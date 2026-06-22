# NET INSPECTOR 🔍

**Diagnóstico completo de conexão & ISP**

Uma ferramenta web moderna e elegante para análise detalhada da sua conexão de rede, provedor de internet (ISP), localização, latência, DNS e segurança.

![Status](https://img.shields.io/badge/status-pronto-success)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)
![Tecnologia](https://img.shields.io/badge/tech-HTML%20%2B%20JS%20puro-brightgreen)

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [APIs Utilizadas](#apis-utilizadas)
- [Indicadores Visuais](#indicadores-visuais)
- [Privacidade e Segurança](#privacidade-e-segurança)
- [Compatibilidade](#compatibilidade)
- [Licença](#licença)

---

## 🎯 Visão Geral

O **NET INSPECTOR** é um utilitário de diagnóstico de rede que roda inteiramente no navegador, sem necessidade de instalação ou backend. Ele coleta informações sobre sua conexão de internet e exibe os resultados em uma interface moderna e responsiva.

### Destaques

- ✅ **Sem instalação** - Basta abrir o arquivo HTML no navegador
- ✅ **100% client-side** - Nenhum dado é armazenado em servidores
- ✅ **Interface moderna** - Design escuro com animações suaves
- ✅ **Responsivo** - Funciona em desktop e mobile
- ✅ **Tempo real** - Atualizações dinâmicas dos dados de rede

---

## ⚡ Funcionalidades

### 1. **IP Público & Hero Section**
- Exibe seu IP público IPv4 em destaque
- Indicador de status pulsante (online/offline)

### 2. **ISP & ASN** 🏢
- Nome do provedor de internet
- Organização responsável
- Número ASN (Autonomous System Number)
- Domínio da rede
- Tipo de conexão

### 3. **Localização Geográfica** 📍
- País, região e cidade
- CEP/Código postal
- Fuso horário
- Coordenadas (latitude/longitude)
- Mapa interativo OpenStreetMap

### 4. **Endereços IP** 🌐
- IPv4 público
- IPv6 público (se disponível)
- IP local da LAN
- IPv6 local
- Detecção de vazamento WebRTC (útil para usuários de VPN)

### 5. **Latência & DNS** ⚡
- Ping HTTP medido em milissegundos
- Barra visual de qualidade de conexão
- Servidor DNS resolvido
- Tempo de lookup DNS
- Verificação de suporte HTTPS e HTTP/2

### 6. **Navegador & Dispositivo** 💻
- User-Agent completo
- Plataforma/Sistema operacional
- Idioma do navegador
- Suporte a cores
- Status de cookies
- Status JavaScript
- Suporte WebRTC
- Resolução da tela
- Memória RAM estimada
- Número de CPUs lógicas

### 7. **Segurança & Privacidade** 🔒
- Detecção de VPN/Proxy
- Detecção de rede Tor
- Tipo de conexão
- Suporte a DoH/DoT (DNS criptografado)
- Detecção de modo incógnito
- Cabeçalhos CORS
- Versão TLS

### 8. **Conectividade** 📡
- Status online/offline
- Velocidade estimada
- Tipo de acesso efetivo
- Economia de dados
- RTT (Round-Trip Time) estimado
- Downlink estimado

### 9. **Log de Diagnóstico** 🔬
- Registro em tempo real de todas as operações
- Timestamp de sessão

---

## 🚀 Como Usar

### Método 1: Abrir Localmente (Recomendado)

```bash
# Navegue até a pasta do projeto
cd /workspace

# Abra o arquivo index.html no seu navegador
# Linux:
xdg-open index.html

# macOS:
open index.html

# Windows (PowerShell):
Start-Process index.html
```

Ou simplesmente:
1. Localize o arquivo `index.html`
2. Clique duas vezes para abrir no navegador padrão

### Método 2: Servidor Local (Opcional)

Para algumas funcionalidades avançadas, você pode usar um servidor local:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### Método 3: Hospedagem Web

Faça upload do arquivo `index.html` para qualquer hospedagem estática:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Servidor Apache/Nginx

---

## 📁 Estrutura do Projeto

```
/workspace
├── index.html      # Arquivo principal (HTML + CSS + JS)
├── LICENSE         # Licença MIT
└── README.md       # Este arquivo de documentação
```

**Nota:** Todo o código está contido em um único arquivo `index.html` para facilitar a portabilidade.

---

## 🌐 APIs Utilizadas

| API | Finalidade | Endpoint |
|-----|-----------|----------|
| **ipapi.co** | Informações IPv4, ISP, localização | `https://ipapi.co/json/` |
| **ipify.org** | Obtenção de IPv6 | `https://api6.ipify.org` |
| **Google DNS** | Resolução DNS | `https://dns.google/resolve` |
| **Cloudflare DNS** | DNS-over-HTTPS (fallback) | `https://cloudflare-dns.com/dns-query` |
| **OpenStreetMap** | Mapa de localização | `https://www.openstreetmap.org/export/embed.html` |
| **WebRTC API** | Detecção de IPs locais | `RTCPeerConnection` |
| **Navigator API** | Informações do navegador | `navigator.*` |

---

## 🎨 Indicadores Visuais

### Cores de Status

| Cor | Significado | Classe |
|-----|-------------|--------|
| 🟢 Verde | OK / Normal | `ok` |
| 🟡 Amarelo | Atenção / Moderado | `warn` |
| 🔴 Vermelho | Erro / Alto / Problema | `err` |
| 🔵 Azul | Informação / Destaque | `accent` |

### Badges

- **IPv4 ✓** - IPv4 detectado com sucesso
- **IPv4 + IPv6 ✓** - Ambos os protocolos disponíveis
- **Online/Offline** - Status da conexão
- **Limpo** - Sem VPN/Proxy/Tor detectados
- **Proxy/VPN** - VPN ou Proxy detectado

### Barra de Latência

A barra visual indica a qualidade do ping:
- **100% → 0ms** (Excelente)
- **0% → ≥300ms** (Muito alto)

Classificação:
- **Excelente**: ≤ 60ms
- **Moderado**: 60-150ms
- **Alto**: > 150ms

---

## 🔒 Privacidade e Segurança

### Compromisso de Privacidade

✅ **Nenhum dado é armazenado** - Todas as informações são processadas localmente no seu navegador

✅ **Sem tracking** - Não há scripts de rastreamento ou analytics

✅ **Código aberto** - Todo o código está visível no arquivo HTML

### Dados Coletados

As seguintes informações são temporariamente exibidas na tela (não são enviadas para nenhum servidor além das APIs necessárias):

- Endereço IP público (via ipapi.co)
- Informações do navegador (via Navigator API)
- IPs locais (via WebRTC)

### APIs de Terceiros

O aplicativo faz requisições para:
- `ipapi.co` - Para geolocalização por IP
- `ipify.org` - Para detecção de IPv6
- `dns.google` / `cloudflare-dns.com` - Para resolução DNS

Essas APIs recebem apenas seu endereço IP como parte da requisição HTTP padrão.

---

## 💻 Compatibilidade

### Navegadores Suportados

| Navegador | Versão Mínima |
|-----------|--------------|
| Chrome | 70+ |
| Firefox | 65+ |
| Safari | 12+ |
| Edge | 79+ |
| Opera | 60+ |

### Requisitos

- JavaScript habilitado
- Suporte a Fetch API
- Suporte a WebRTC (opcional, para detecção de IPs locais)
- Conexão HTTPS (recomendado para algumas APIs)

### Recursos Opcionais

Algumas funcionalidades dependem de APIs específicas do navegador:
- `navigator.connection` - Informações de rede efetiva
- `navigator.deviceMemory` - Memória RAM estimada
- `navigator.hardwareConcurrency` - Número de CPUs
- WebRTC - Detecção de IPs locais

---

## 🛠️ Personalização

### Variáveis CSS (Tema)

Edite as variáveis no `<style>` para personalizar o tema:

```css
:root {
  --bg:        #0b0e14;    /* Fundo principal */
  --surface:   #111620;    /* Fundo dos cards */
  --border:    #1e2535;    /* Bordas */
  --accent:    #00d4ff;    /* Cor de destaque primária */
  --accent2:   #7c3aed;    /* Cor de destaque secundária */
  --ok:        #22c55e;    /* Sucesso */
  --warn:      #f59e0b;    /* Atenção */
  --err:       #ef4444;    /* Erro */
  --text:      #e2e8f0;    /* Texto principal */
  --muted:     #64748b;    /* Texto secundário */
  --label:     #94a3b8;    /* Labels */
}
```

### Fontes

O projeto usa:
- **JetBrains Mono** - Para números, códigos e labels
- **Inter** - Para texto geral

Ambas são carregadas via Google Fonts.

---

## 📝 Notas Técnicas

### Limitações Conhecidas

1. **WebRTC Leak Test** - Pode não funcionar em navegadores com WebRTC desabilitado
2. **Detecção de VPN** - Baseada em heurísticas de banco de dados de IP, não é 100% precisa
3. **Modo Incógnito** - A detecção pode não funcionar em todas as versões de navegadores
4. **IPv6** - Requer que sua rede tenha conectividade IPv6 nativa

### Solução de Problemas

| Problema | Possível Causa | Solução |
|----------|---------------|---------|
| IP não carrega | Bloqueio de API | Verifique firewall/antivirus |
| IPv6 não aparece | Rede sem IPv6 | Normal se seu ISP não oferece |
| Mapa não mostra | Bloqueio de iframe | Permita iframes do OpenStreetMap |
| Ping falha | CORS/Network | Tente recarregar a página |

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### Permissões

✅ Uso comercial  
✅ Modificação  
✅ Distribuição  
✅ Uso privado  

### Requisitos

⚠️ Manter aviso de copyright e licença

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir melhorias
3. Enviar pull requests

---

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique este README
2. Inspecione o console do navegador (F12)
3. Verifique sua conexão de internet

---

**NET INSPECTOR** · Dados processados localmente · Nenhuma informação é armazenada

*Fontes: ipapi.co · ipify.org · WebRTC API · Navigator API*
