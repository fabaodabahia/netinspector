# NET INSPECTOR 🔍

**Complete Network Diagnostics, CGNAT & Gaming NAT Test, DNS Leak Audit & Domain Security AI**  
*Diagnóstico completo de conexão, Teste de CGNAT/NAT para jogos, Auditoria VPN & Análise de Domínio com IA em WebAssembly*

[![Status](https://img.shields.io/badge/status-production-success)](https://netinspector.net)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Edge](https://img.shields.io/badge/Cloudflare-Workers%20%2B%20Assets-F38020)](https://netinspector.net)
[![ML](https://img.shields.io/badge/Security%20AI-XGBoost%20ONNX%20WASM-7c3aed)](https://netinspector.net/domain.html)
[![Privacy](https://img.shields.io/badge/privacy-Client--Side%20%26%20Zero%20Logs-purple)](https://netinspector.goatcounter.com/)

**🌐 Live Demo:**
- 🇧🇷 Português (Padrão): [https://netinspector.net/](https://netinspector.net/)
- 🇺🇸 English: [https://netinspector.net/en/](https://netinspector.net/en/)
- 🇪🇸 Español: [https://netinspector.net/es/](https://netinspector.net/es/)

O **NET INSPECTOR** é uma plataforma web open-source (arquitetura MPA em Vanilla HTML/CSS/JS + Cloudflare Worker Anti-CORS) para diagnóstico aprofundado de conexões de internet, detecção de CGNAT e tipo de NAT para jogos, auditoria de vazamentos de VPN (DNS & WebRTC) e inspeção completa de segurança de domínios com **Machine Learning local via WebAssembly (XGBoost → ONNX)**.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Ferramentas e Páginas](#-ferramentas-e-páginas)
- [Análise de Segurança IA (Regras + ONNX WASM)](#-análise-de-segurança-ia-regras-especialistas--machine-learning-onnx)
- [Cloudflare Worker Anti-CORS](#-cloudflare-worker-anti-cors-workerjs)
- [Internacionalização & Páginas Estáticas](#-internacionalização-i18n--páginas-estáticas)
- [APIs & Protocolos Utilizados](#-apis--protocolos-utilizados)
- [Analytics](#-analytics)
- [Como Executar Localmente](#-como-executar-localmente)
- [Licença](#-licença)

---

## 🎯 Visão Geral

1. **Zero Logs & Privacidade**: Nenhum IP pesquisado ou histórico de análise é armazenado em banco de dados. Toda a inferência de IA e testes WebRTC/DNS ocorrem localmente no navegador.
2. **Arquitetura Híbrida (Client-Side + Edge Worker)**: Consultas DNS-over-HTTPS, WebRTC STUN e modelo XGBoost rodam no cliente, enquanto um Cloudflare Worker (`/api/inspect`) elimina restrições de CORS para ler cabeçalhos HTTP, `Set-Cookie`, `robots.txt`, `security.txt` e redirects reais na borda.
3. **SEO Multi-Idioma Nativo**: Páginas estáticas dedicadas para Português (`/`), Inglês (`/en/`) e Espanhol (`/es/`), além de tradução dinâmica em 10 idiomas com suporte RTL.

---

## 📁 Estrutura do Projeto

```text
netinspector/
├── index.html             # Home PT-BR: IP público, ISP, ASN, Geolocalização & Log
├── cgnat.html             # Teste de CGNAT (RFC 6598), NAT para Jogos (STUN) & IPv6
├── dns-leak.html          # Auditoria de Privacidade VPN: DNS Leak & WebRTC Leak
├── domain.html            # Analisador de Domínio com Worker Anti-CORS, RDAP & ML ONNX
├── en/                    # Versões estáticas pré-renderizadas em Inglês (SEO)
│   ├── index.html
│   ├── cgnat.html
│   ├── dns-leak.html
│   └── domain.html
├── es/                    # Versões estáticas pré-renderizadas em Espanhol (SEO)
│   ├── index.html
│   ├── cgnat.html
│   ├── dns-leak.html
│   └── domain.html
├── app.js                 # Core: i18n (10 idiomas), ApiManager, Card Factory, Scanners, MLInference & SecurityAnalyzer
├── style.css              # Design System (Tailored Dark Palette, tokens CSS e responsividade)
├── worker.js              # Cloudflare Worker Anti-CORS (/api/inspect) + proteção SSRF
├── wrangler.jsonc         # Configuração Cloudflare Workers & Static Assets
├── .assetsignore          # Exclusão de arquivos internos do bundle estático público
├── models/
│   ├── security-model.onnx  # Modelo XGBoost exportado para ONNX (~68 KB)
│   └── calibration.json     # Coeficientes (a, b) de calibração de Platt
├── train_model.py         # Script Python de treino sintético, calibração de Platt e exportação ONNX
├── requirements.txt       # Dependências Python do pipeline ML
├── sitemap.xml            # Sitemap canônico (12 URLs com hreflang)
├── robots.txt             # Regras para crawlers
├── og-image.png           # Banner Open Graph / Twitter Card (1200x630)
├── favicon.svg / .ico     # Ícones do site
└── LICENSE                # Licença MIT
```

---

## ⚡ Ferramentas e Páginas

### 1. Qual é o Meu IP Público (`index.html`) — `data-page="home"`
- Exibição instantânea do **IPv4 e IPv6 públicos** com botão **Copiar Meu IP** em 1 clique.
- Identificação de **ISP, Organização e ASN**, mapa interativo OpenStreetMap e auditoria de exposição WebRTC.

### 2. Teste de CGNAT, IPv6 e NAT para Jogos (`cgnat.html`) — `data-page="cgnat"`
- **Detecção RFC 6598 (`100.64.0.0/10`)**: Verifica candidatos locais e públicos em busca da faixa oficial de CGNAT.
- **Comportamento NAT via múltiplos STUN (`probeStunNatCandidates`)**: Compara mapeamentos `srflx` entre servidores STUN do Google e Cloudflare para identificar **Symmetric NAT (NAT Estrito / Tipo 3)** vs. **Cone NAT (Aberto/Moderado)**.
- **Auditoria IPv6 Nativo (Dual-Stack)**: Indica se a conexão possui IPv6 funcional para contornar o CGNAT.
- **Gerador de Solicitação ao Suporte**: Botão pronto para copiar um texto técnico com os dados da linha solicitando rollback de CGNAT junto ao provedor.

### 3. Teste de Vazamento DNS & WebRTC (`dns-leak.html`) — `data-page="dnsleak"`
- Auditoria de privacidade para conexões **VPN e Proxy**, detecção de saída Tor, verificação de DNS-over-HTTPS (DoH), latência HTTP e guia educativo sobre o impacto de desabilitar o WebRTC.

### 4. Analisador de Domínio + Links Compartilháveis (`domain.html`) — `data-page="domain"`
- **URL Compartilhável (`?d=dominio.com`)**: Execução automática ao abrir o link + botão **"Compartilhar Relatório"**.
- **Scanners Concorrentes Funcionais**:
  - **IP Info & Server Location**: Resolução DNS (`A`) seguida de geolocalização e ASN do servidor.
  - **Whois / RDAP Oficial**: Consulta direta ao protocolo IETF RDAP (`rdap.registro.br` para `.br` e `rdap.org` global) com cálculo real da idade do domínio.
  - **DNS Records, TXT & DNSSEC**: Registros `A`, `AAAA`, `MX`, `NS`, `CNAME`, `SPF`, `DMARC`, `DKIM` e `DS`.
  - **SSL Chain & HSTS**: Verificação de validade SSL, dias restantes e diretivas `max-age` / `preload`.
  - **Headers HTTP, Cookies, Firewall (WAF), Redirect Chain, Tech Stack, Carbon Footprint, `robots.txt` e `security.txt`**: Alimentados pelo Worker Anti-CORS sem bloqueios de navegador.
  - **Archive History**: Histórico de capturas via Wayback Machine.

---

## 🤖 Análise de Segurança IA (Regras Especialistas + Machine Learning ONNX)

O `domain.html` combina duas camadas 100% locais no navegador:

1. **Sistema Especialista (`SecurityAnalyzer`)**: Avalia categorias OWASP (A01, A02, A05, A06), gera um **Security Score de 0 a 100** e recomendações acionáveis.
2. **Machine Learning Client-Side (`MLInference`)**:
   - **Lazy Loading**: O runtime `onnxruntime-web` (WASM) e o modelo [`models/security-model.onnx`](models/security-model.onnx) (~68 KB) só são carregados sob demanda ao iniciar uma análise de domínio.
   - **24 Features Vetorizadas**: `prepareTensorForONNX()` converte os dados dos scanners em um `Float32Array` de 24 posições alinhado ao [`train_model.py`](train_model.py).
   - **Calibração de Platt (JS-side)**: Aplica `logit = ln(p / (1 - p))` e `p_cal = sigmoid(a * logit + b)` usando os coeficientes em [`models/calibration.json`](models/calibration.json).
   - **Semáforo + Alerta de Anomalia**: Exibe `"🧠 IA: X% de chance de ser seguro"` (verde/amarelo/vermelho) com explicação educativa em `<details>` e dispara alerta `.anomaly-alert` quando a divergência entre Regras e ML ultrapassa 30 pontos.

---

## ⚡ Cloudflare Worker Anti-CORS (`worker.js`)

O arquivo [`worker.js`](worker.js) atua na borda da Cloudflare servindo os arquivos estáticos via `env.ASSETS` e expondo a rota `GET /api/inspect?domain=...`:
- Coleta cabeçalhos HTTP, flags reais de `Set-Cookie`, cadeia de redirecionamentos (`http://` → `https://`), status HTTP, `/robots.txt`, `/.well-known/security.txt` e metadados HTML (OG/Twitter tags e stack tecnológica).
- **Segurança Anti-SSRF**: Rejeita endereços IP literais, `localhost`, `.local`, `.internal` e domínios inválidos.
- **Fallback Transparente**: Caso o site seja aberto em servidor estático puro (sem Worker), o `ApiManager.inspectDomain()` faz fallback automático para o modo client-side.

---

## 🌍 Internacionalização (i18n) & Páginas Estáticas

Suporte completo a **10 idiomas** (`pt-br`, `en`, `es`, `fr`, `de`, `it`, `ja`, `zh`, `ru`, `ar` com `dir="rtl"`):
- **Rotas Estáticas Canônicas**: Português na raiz (`/`), Inglês em `/en/` e Espanhol em `/es/`, com `<title>`, `description`, `<h1>` e artigos já traduzidos no HTML para indexação limpa em mecanismos de busca.
- **Troca Dinâmica**: Os demais 7 idiomas funcionam instantaneamente via seletor no cabeçalho ou `?lang=xx`.

---

## 🌐 APIs & Protocolos Utilizados

| Serviço / Protocolo | Finalidade |
|---|---|
| `Cloudflare Worker (/api/inspect)` | Inspeção Anti-CORS de headers, cookies, redirects, `robots.txt` e `security.txt` |
| `dns.google` / `cloudflare-dns.com` | Resolução DNS-over-HTTPS (`A`, `AAAA`, `MX`, `NS`, `TXT`, `CNAME`, `DS`) |
| `rdap.registro.br` / `rdap.org` | Consulta oficial Whois/RDAP com suporte nativo a CORS |
| `api4.ipify.org` / `api6.ipify.org` / `icanhazip.com` | Detecção isolada de IPv4 e IPv6 públicos |
| `ipwho.is` / `freeipapi.com` / `ipapi.co` | Geolocalização, ISP e ASN em cascata |
| `archive.org/wayback/available` | Histórico de capturas do domínio |
| `WebRTC` (`RTCPeerConnection` + STUN Google/Cloudflare) | Detecção de WebRTC Leak, IPs locais, RFC 6598 e Cone vs. Symmetric NAT |

---

## 📊 Analytics

- **[GoatCounter](https://netinspector.goatcounter.com/)**: Analytics privacy-first sem cookies e com opção de opt-out no rodapé (`?skipgc=on`).
- **Microsoft Clarity**: Análise agregada de usabilidade e mapas de calor.

---

## 🚀 Como Executar Localmente

### Opção 1: Com Cloudflare Wrangler (inclui o Worker `/api/inspect`)
```bash
git clone https://github.com/fabaodabahia/netinspector.git
cd netinspector
npx wrangler dev
```

### Opção 2: Servidor Estático Simples (modo client-side com fallback automático)
```bash
# Python 3
python -m http.server 8000

# ou Node.js
npx serve .
```
Acesse `http://localhost:8000` (ou a porta exibida pelo Wrangler).

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte [LICENSE](LICENSE).
