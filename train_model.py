# -*- coding: utf-8 -*-
"""
NET INSPECTOR — Pipeline de Treinamento e Exportação ONNX
Modelo: XGBoost Classifier (24 features de segurança)
Saída: models/security-model.onnx (< 500 KB)
"""

import os
import sys
import json

# Configure UTF-8 stdout for Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score, brier_score_loss
from sklearn.linear_model import LogisticRegression
import xgboost as xgb
import onnxmltools
from onnxmltools.convert.common.data_types import FloatTensorType


def generate_synthetic_security_dataset(n_samples=10000, random_state=42):
    """
    Gera dataset sintético com 24 features de segurança baseadas em
    pesos de especialistas e padrões não-lineares reais da web.
    """
    np.random.seed(random_state)
    
    # 0: ssl_valid (85% dos sites modernos têm SSL válido)
    ssl_valid = np.random.binomial(1, 0.85, n_samples).astype(np.float32)
    
    # 1: ssl_days_left (0 a 365 normalizado)
    # Se ssl_valid=0, dias restantes é 0
    ssl_days_raw = np.random.uniform(0, 365, n_samples)
    ssl_days_left = (np.where(ssl_valid == 1, ssl_days_raw, 0) / 365.0).astype(np.float32)
    
    # 2: ssl_proto_secure (TLS 1.2/1.3)
    ssl_proto_secure = np.where(ssl_valid == 1, np.random.binomial(1, 0.90, n_samples), 0).astype(np.float32)
    
    # 3: ssl_weak_cipher
    ssl_weak_cipher = np.random.binomial(1, 0.08, n_samples).astype(np.float32)
    
    # 4: hsts_enabled
    hsts_enabled = np.where(ssl_valid == 1, np.random.binomial(1, 0.60, n_samples), 0).astype(np.float32)
    
    # 5: hsts_preload
    hsts_preload = np.where(hsts_enabled == 1, np.random.binomial(1, 0.30, n_samples), 0).astype(np.float32)
    
    # 6: has_csp
    has_csp = np.random.binomial(1, 0.35, n_samples).astype(np.float32)
    
    # 7: has_xframe
    has_xframe = np.random.binomial(1, 0.65, n_samples).astype(np.float32)
    
    # 8: has_xcontent
    has_xcontent = np.random.binomial(1, 0.70, n_samples).astype(np.float32)
    
    # 9: has_referrer_policy
    has_referrer_policy = np.random.binomial(1, 0.55, n_samples).astype(np.float32)
    
    # 10: has_permissions_policy
    has_permissions_policy = np.random.binomial(1, 0.25, n_samples).astype(np.float32)
    
    # 11: server_version_exposed
    server_version_exposed = np.random.binomial(1, 0.40, n_samples).astype(np.float32)
    
    # 12: dnssec_enabled
    dnssec_enabled = np.random.binomial(1, 0.20, n_samples).astype(np.float32)
    
    # 13: has_spf
    has_spf = np.random.binomial(1, 0.80, n_samples).astype(np.float32)
    
    # 14: dmarc_configured
    dmarc_configured = np.where(has_spf == 1, np.random.binomial(1, 0.70, n_samples), np.random.binomial(1, 0.15, n_samples)).astype(np.float32)
    
    # 15: dmarc_reject_policy
    dmarc_reject_policy = np.where(dmarc_configured == 1, np.random.binomial(1, 0.40, n_samples), 0).astype(np.float32)
    
    # 16: cookies_secure
    cookies_secure = np.where(ssl_valid == 1, np.random.binomial(1, 0.75, n_samples), 0).astype(np.float32)
    
    # 17: cookies_httponly
    cookies_httponly = np.random.binomial(1, 0.70, n_samples).astype(np.float32)
    
    # 18: http_redirects_to_https
    http_redirects_to_https = np.where(ssl_valid == 1, np.random.binomial(1, 0.85, n_samples), 0).astype(np.float32)
    
    # 19: waf_detected
    waf_detected = np.random.binomial(1, 0.38, n_samples).astype(np.float32)
    
    # 20: security_txt_found
    security_txt_found = np.random.binomial(1, 0.12, n_samples).astype(np.float32)
    
    # 21: malware_detected
    malware_detected = np.random.binomial(1, 0.03, n_samples).astype(np.float32)
    
    # 22: open_risky_ports
    open_risky_ports = np.random.binomial(1, 0.05, n_samples).astype(np.float32)
    
    # 23: domain_age_years (0 a 10 normalizado)
    domain_age_years = (np.random.uniform(0.1, 10, n_samples) / 10.0).astype(np.float32)

    # Matriz X com as 24 features
    X = np.column_stack([
        ssl_valid, ssl_days_left, ssl_proto_secure, ssl_weak_cipher,
        hsts_enabled, hsts_preload, has_csp, has_xframe,
        has_xcontent, has_referrer_policy, has_permissions_policy, server_version_exposed,
        dnssec_enabled, has_spf, dmarc_configured, dmarc_reject_policy,
        cookies_secure, cookies_httponly, http_redirects_to_https, waf_detected,
        security_txt_found, malware_detected, open_risky_ports, domain_age_years
    ])

    # Cálculo da probabilidade de ser Seguro (Target y)
    # Lógica de especialista com interações não lineares:
    log_odds = (
        3.0 * ssl_valid
        + 1.5 * (ssl_days_left > (30 / 365.0)).astype(float)
        + 2.0 * ssl_proto_secure
        - 2.5 * ssl_weak_cipher
        + 1.8 * hsts_enabled
        + 0.8 * hsts_preload
        + 1.4 * has_csp
        + 1.0 * has_xframe
        + 1.0 * has_xcontent
        + 0.5 * has_referrer_policy
        + 0.4 * has_permissions_policy
        - 0.8 * server_version_exposed
        + 0.7 * dnssec_enabled
        + 0.8 * has_spf
        + 1.0 * dmarc_configured
        + 0.8 * dmarc_reject_policy
        + 0.8 * cookies_secure
        + 0.8 * cookies_httponly
        + 1.5 * http_redirects_to_https
        + 0.5 * waf_detected
        + 0.4 * security_txt_found
        - 5.0 * malware_detected  # Malware penaliza fortemente
        - 2.0 * open_risky_ports
        + 0.6 * domain_age_years
        - 4.0  # Threshold de calibração
    )

    # Função sigmoide para gerar probabilidade contínua
    prob = 1.0 / (1.0 + np.exp(-log_odds))
    
    # Adiciona ruído estocástico de 5% simulando exceções do mundo real
    noise = np.random.normal(0, 0.15, n_samples)
    final_prob = np.clip(prob + noise, 0.0, 1.0)
    
    # Classificação binária (1 = Seguro, 0 = Vulnerável)
    y = (final_prob >= 0.5).astype(np.int32)
    
    # Se malware_detected=1, força 98% a ser vulnerável
    y[malware_detected == 1] = np.random.binomial(1, 0.02, np.sum(malware_detected == 1))
    
    return X, y


def calibrate_platt(model, X_val, y_val):
    """
    Ajusta Platt Scaling sobre probabilidades do validation set:
    logit = ln(p / (1 - p))
    p_cal = sigmoid(a * logit + b)
    """
    probs_raw = model.predict_proba(X_val)[:, 1]
    
    # Prevenção de divisão por zero e log(0)
    probs_clamped = np.clip(probs_raw, 1e-4, 1.0 - 1e-4)
    logits = np.log(probs_clamped / (1.0 - probs_clamped)).reshape(-1, 1)
    
    # Regressão logística univariada sobre o logit
    calibrator = LogisticRegression(C=1.0, solver='lbfgs')
    calibrator.fit(logits, y_val)
    
    a = float(calibrator.coef_[0][0])
    b = float(calibrator.intercept_[0])
    
    # Avaliação de calibração
    logits_all = np.log(probs_clamped / (1.0 - probs_clamped))
    probs_cal = 1.0 / (1.0 + np.exp(-(a * logits_all + b)))
    brier_before = brier_score_loss(y_val, probs_raw)
    brier_after = brier_score_loss(y_val, probs_cal)
    
    calib_data = {"a": round(a, 4), "b": round(b, 4)}
    os.makedirs('models', exist_ok=True)
    calib_path = os.path.join('models', 'calibration.json')
    with open(calib_path, 'w', encoding='utf-8') as f:
        json.dump(calib_data, f, indent=2)
        
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"📊 ML_CALIBRATION = {{ a: {a:.4f}, b: {b:.4f} }}")
    print(f"📉 Brier Score: {brier_before:.5f} ➔ {brier_after:.5f}")
    print(f"✅ Calibração salva com sucesso em: {calib_path}")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    return a, b


def main():
    print("🚀 NET INSPECTOR — Gerando Dataset Sintético (10.000 amostras)...")
    X, y = generate_synthetic_security_dataset(10000)
    
    print(f"✅ Dataset gerado: {X.shape[0]} amostras, {X.shape[1]} features.")
    print(f"📊 Distribuição de classes: Seguro (1) = {np.sum(y == 1)}, Vulnerável (0) = {np.sum(y == 0)}")
    
    # 70% treino, 15% validação (para Platt Scaling), 15% teste final
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42, stratify=y_temp)
    
    print("\n🧠 Treinando classificador XGBoost leve...")
    model = xgb.XGBClassifier(
        n_estimators=100,
        max_depth=4,
        learning_rate=0.08,
        subsample=0.85,
        colsample_bytree=0.85,
        objective='binary:logistic',
        eval_metric='logloss',
        random_state=42
    )
    model.fit(X_train, y_train)
    
    # Avaliação
    preds = model.predict(X_test)
    probs = model.predict_proba(X_test)[:, 1]
    
    acc = accuracy_score(y_test, preds)
    f1 = f1_score(y_test, preds)
    roc_auc = roc_auc_score(y_test, probs)
    
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"🎯 Acurácia no Teste: {acc * 100:.2f}%")
    print(f"🎯 F1-Score:          {f1:.4f}")
    print(f"🎯 ROC-AUC:           {roc_auc:.4f}")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    # Calibração de Platt
    calibrate_platt(model, X_val, y_val)
    
    # Exportação para ONNX (apenas se ainda não existir, preservando o arquivo existente)
    os.makedirs('models', exist_ok=True)
    onnx_path = os.path.join('models', 'security-model.onnx')
    
    if not os.path.exists(onnx_path):
        print("\n📦 Exportando modelo para formato ONNX (FloatTensorType [None, 24])...")
        initial_type = [('input', FloatTensorType([None, 24]))]
        onnx_model = onnxmltools.convert_xgboost(
            model,
            initial_types=initial_type,
            target_opset=13
        )
        
        with open(onnx_path, 'wb') as f:
            f.write(onnx_model.SerializeToString())
            
        size_kb = os.path.getsize(onnx_path) / 1024.0
        print(f"✅ Modelo ONNX salvo com sucesso em: {onnx_path} ({size_kb:.2f} KB)")
    else:
        size_kb = os.path.getsize(onnx_path) / 1024.0
        print(f"🔒 Modelo ONNX existente mantido intacto em: {onnx_path} ({size_kb:.2f} KB)")


if __name__ == '__main__':
    main()
