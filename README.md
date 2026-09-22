# NET INSPECTOR 🔍

**Diagnóstico completo de conexão, IP & análise de domínio — 100% Client-Side**

[![Status](https://img.shields.io/badge/status-produção-success)](https://netinspector.net)
[![Licença](https://img.shields.io/badge/licença-MIT-blue)](LICENSE)
[![Tecnologia](https://img.shields.io/badge/tech-Vanilla%20HTML%2FCSS%2FJS-brightgreen)](https://netinspector.net)
[![Privacidade](https://img.shields.io/badge/privacidade-Zero%20Cookies-purple)](https://netinspector.goatcounter.com/)

**🌐 Demo Online:** [https://netinspector.net/](https://netinspector.net/)

O **NET INSPECTOR** é uma plataforma web moderna de arquitetura Multi-Page Application (MPA) para diagnóstico aprofundado de conexões de rede, provedores de internet (ISP), resolução DNS, segurança e infraestrutura completa de domínios. Tudo é processado localmente no navegador, sem backend proprietário e sem armazenamento de dados.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades e Páginas](#-funcionalidades-e-páginas)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [APIs Utilizadas](#-apis-utilizadas)
- [Analytics Privacy-First (GoatCounter)](#-analytics-privacy-first-goatcounter)
- [Otimização para Mecanismos de Busca (SEO)](#-otimização-para-mecanismos-de-busca-seo)
- [Privacidade e Segurança](#-privacidade-e-segurança)
- [Como Usar](#-como-usar)
- [Compatibilidade](#-compatibilidade)
- [FAQ - Perguntas Frequentes](#-faq---perguntas-frequentes)
- [Licença](#-licença)

---

## 🎯 Visão Geral

Diferente de ferramentas tradicionais que exigem instalação ou realizam rastreamento invasivo, o **NET INSPECTOR** foi concebido sob três pilares fundamentais:

1. **Privacidade Absoluta**: Nenhum dado é salvo em bancos de dados. Não há cookies nem localStorage para tracking.
2. **Performance Instantânea**: Arquitetura leve em Vanilla JavaScript e CSS puro com concorrência assíncrona.
3. **Multi-Page Application (MPA)**: Páginas dedicadas e especializadas que compartilham a mesma base modular de regras de negócio e componentes de interface.

---

## 📁 Estrutura do Projeto

O repositório é composto por 8 arquivos essenciais, perfeitamente desacoplados e organizados:

```
netinspector/
├── index.html       # Página Principal (Home: IP / ISP / Localização / Log, data-page="home")
├── dns-leak.html    # Auditoria de Privacidade VPN / Teste de Vazamento DNS & WebRTC (data-page="dnsleak")
├── domain.html      # Analisador de Domínio com 36 scanners (data-page="domain")
├── style.css        # Design System centralizado (CSS variables, seletor i18n e responsividade)
├── app.js           # Núcleo reativo (i18n com 10 idiomas, ApiManager, Card Factory, Scanners)
├── sitemap.xml      # Mapa de URLs canônicas e hreflang para indexação por motores de busca
├── robots.txt       # Diretivas de rastreamento para web crawlers
└── LICENSE          # Termos da Licença MIT
```

---

## ⚡ Funcionalidades e Páginas

### 1. Página Principal / Qual é o Meu IP (`index.html`) — `data-page="home"`
Página inicial nativa focada na identificação imediata de identidade de rede e conectividade:
- **Hero IP Section**: Exibição em destaque do endereço público com detecção de protocolo e animação pulsante.
- **Cards Essenciais**:
  - **ISP & ASN**: Identificação do provedor de acesso, organização titular, número de sistema autônomo (ASN) e rota BGP.
  - **Localização Geográfica**: País, estado, município, código postal, coordenadas e mapa interativo OpenStreetMap incorporado.
  - **Endereços IP & WebRTC**: Detecção independente de IPv4 público, IPv6 público, IP local LAN e auditoria de vazamento de WebRTC (*WebRTC leak* para usuários de VPN).
  - **Log de Diagnóstico**: Terminal em tempo real registrando o andamento das requisições assíncronas.
- **Conteúdo Didático e SEO**: Artigos aprofundados explicando blocos de endereçamento, geolocalização e diferenças práticas entre IPv4 e IPv6.

### 2. Teste de Vazamento DNS e WebRTC (`dns-leak.html`) — `data-page="dnsleak"`
Landing page voltada para auditoria de conexões VPN, Proxy e proteção da privacidade:
- **Hero Audit Section**: Indicador de integridade e auditoria de privacidade de navegação.
- **Cards Focados em Privacidade**:
  - **Endereços IP**: Verificação de IPv4, IPv6 e detecção de bypass de WebRTC expondo o IP real.
  - **Segurança & Privacidade**: Detecção de VPN/Proxy, nó de saída Tor, modo anônimo, suporte a DoH/DoT e versão TLS.
  - **Latência & DNS**: Medição de ping HTTP, servidor DNS ativo e tempo de resolução.
  - **Log de Diagnóstico**: Acompanhamento passo a passo dos testes de segurança.
- **Conteúdo Didático e FAQ**: Explicação de vazamentos de DNS (DNS Leak), riscos de WebRTC STUN bypass, protocolos DoH/DoT e guia de correção.

### 3. Analisador de Domínio (`domain.html`) — `data-page="domain"`
Ferramenta para auditoria completa de qualquer site ou domínio da web:
- **36 Scanners Concorrentes**:
  - Registros DNS completos (`A`, `AAAA`, `MX`, `NS`, `TXT`, `CNAME`, `SOA`, `CAA`, `PTR`).
  - Validação de certificados SSL/TLS, cadeia de confiança e dias restantes até expiração.
  - Dados de registro Whois e entidades delegadas.
  - Cabeçalhos de segurança HTTP (`HSTS`, `CSP`, `X-Frame-Options`, `X-Content-Type-Options`).
  - Detecção de tecnologias web, robots.txt, sitemap XML e security.txt.
  - Histórico de arquivos (Wayback Machine API).

---

## 🌍 Sistema de Internacionalização (i18n)

O **NET INSPECTOR** possui um motor de internacionalização nativo (Vanilla JS) com suporte a 10 idiomas:

| Idioma | Código | Direção do Texto | Bandeira |
|---|---|---|---|
| Português (Brasil) | `pt-br` *(Padrão)* | LTR | 🇧🇷 |
| English | `en` | LTR | 🇺🇸 |
| Español | `es` | LTR | 🇪🇸 |
| Français | `fr` | LTR | 🇫🇷 |
| Deutsch | `de` | LTR | 🇩🇪 |
| Italiano | `it` | LTR | 🇮🇹 |
| 日本語 (Japanese) | `ja` | LTR | 🇯🇵 |
| 中文 (Chinese) | `zh` | LTR | 🇨🇳 |
| Русский (Russian) | `ru` | LTR | 🇷🇺 |
| العربية (Arabic) | `ar` | RTL (`dir="rtl"`) | 🇸🇦 |

### Recursos do Sistema i18n:
1. **Detecção Automática Hierárquica**: Prioriza parâmetro de URL (`?lang=es`), em seguida preferência salva no `localStorage`, e por fim o idioma do navegador (`navigator.language`).
2. **Seletor Visual no Header**: Menu suspenso estilizado com código, nome e bandeira do país.
3. **Suporte Nativo a RTL**: Alternância automática de `dir="rtl"` para árabe (`ar`).
4. **Tradução Completa**: Cobre cards, rótulos de rede, artigos explicativos, FAQs e rodapé.
5. **Como Adicionar um Novo Idioma**:
   Basta registrar a chave correspondente no objeto `SUPPORTED_LANGS` e adicionar as chaves equivalentes no dicionário `TRANSLATIONS` dentro de `app.js`.

---

## 🏗️ Arquitetura Técnica

O projeto utiliza padrões arquiteturais modernos sem frameworks pesados:

### 1. Card Factory Reativo
Todos os cards da interface são gerados e orquestrados por uma configuração centralizada (`CARDS_CONFIG` em `app.js`). Cada definição de card suporta:
- Filtragem inteligente por página (`pages: ['home']` ou `pages: ['domain']`).
- Estrutura de campos com chaves i18n (`labelKey`, `titleKey`), badges informativos dinâmicos e slots para injeção HTML customizada.
- Renderização limpa via `renderCards()`.

### 2. ApiManager Centralizado
Camada de rede que encapsula 31 chamadas externas com recursos avançados:
- **In-flight Promise Deduplication**: Requisições simultâneas para o mesmo recurso compartilham a mesma Promise, evitando tráfego redundante.
- **Cache de Sessão em Memória com TTL**: Armazenamento temporário de respostas durante o ciclo de vida da página para respostas instantâneas.
- **Resiliência com Fallback em Cascata**:
  - Resolução DNS com alternância transparente (Google DNS over HTTPS → Cloudflare DoH).
  - Obtenção isolada de IPv4 (`api4.ipify.org`, `ipv4.icanhazip.com`) e IPv6 (`api6.ipify.org`, `ipv6.icanhazip.com`).
  - Detecção de geolocalização multi-provedor (`ipwho.is`, `freeipapi.com`, `ipapi.co`).
- **Timeouts Automáticos via AbortController**: Evita que requisições lentas travem o fluxo da aplicação.

### 3. Design System Modular (`style.css`)
- **Tokens CSS Modernos**: Variáveis para paleta de cores (Tailored Dark Palette), espaçamentos, tipografia, bordas e sombras neon glow.
- **Aliases Retrocompatíveis**: Compatibilidade total entre nomes clássicos (`--bg`, `--surface`, `--accent`, `--ok`, `--warn`, `--err`) e tokens de sistema (`--color-bg-primary`, `--color-status-ok`).
- **Responsividade Fluida**: Breakpoints mobile-first cobrindo desde telas estreitas (320px) até monitores ultra-wide (1024px+).

### 4. Controle via Atributo `data-page`
O elemento `<body>` de cada página declara seu contexto de visualização (`data-page="home"` em `index.html`, `data-page="dnsleak"` em `dns-leak.html`, `data-page="domain"` em `domain.html`). O script adapta o comportamento de inicialização, a exibição de cards e os botões de ação contextuais com base nessa propriedade.

### 5. Navegação Unificada via `renderHeader()`
O cabeçalho e menu de navegação responsivo são construídos dinamicamente pela função `renderHeader()`:
- Destaca visualmente a página corrente (`nav-active`).
- Integração do seletor dropdown internacional de idiomas (`pt-br`, `en`, `es`, `fr`, `de`, `it`, `ja`, `zh`, `ru`, `ar`).
- Menu hambúrguer acessível para dispositivos móveis com fechamento automático ao clicar fora ou redimensionar.

---

## 🌐 APIs Utilizadas

| Serviço / Endpoint | Finalidade Técnica | Modo de Acesso |
|---|---|---|
| `https://api4.ipify.org` | Detecção estrita de endereço IPv4 público | JSON via HTTPS |
| `https://api6.ipify.org` | Detecção estrita de endereço IPv6 público | JSON via HTTPS |
| `https://ipv4.icanhazip.com` | Fallback de contingência para IPv4 | Texto puro via HTTPS |
| `https://ipv6.icanhazip.com` | Fallback de contingência para IPv6 | Texto puro via HTTPS |
| `https://ipwho.is/` | Dados geográficos, ASN, ISP e rota de rede | JSON via HTTPS (sem CORS lock) |
| `https://freeipapi.com/` | Provedor secundário de geolocalização e proxy | JSON via HTTPS |
| `https://dns.google/resolve` | Consulta primária a registros DNS via DoH | DNS-over-HTTPS |
| `https://cloudflare-dns.com/dns-query` | Fallback de alta disponibilidade para DNS DoH | DNS-over-HTTPS |
| `https://archive.org/wayback/available` | Histórico de capturas arquivadas de domínio | JSON via HTTPS |
| `https://www.openstreetmap.org/` | Renderização do mapa cartográfico embed | Iframe local sem cookies |
| `WebRTC API` (`RTCPeerConnection`) | Mapeamento de interfaces locais e detecção de vazamento | API Nativa do Navegador |
| `Navigator API` | Extração de parâmetros de hardware e rede do cliente | API Nativa do Navegador |

---

## 📊 Analytics Privacy-First (GoatCounter)

O **NET INSPECTOR** adota o [GoatCounter](https://www.goatcounter.com/), uma solução de análise estatística de código aberto, estritamente ética e em conformidade com o GDPR e a LGPD:

- ✅ **Sem cookies**: Nenhum dado ou identificador persistente é armazenado no seu dispositivo.
- ✅ **Sem tracking cross-site**: Não rastreamos a navegação do usuário em outros sites da internet.
- ✅ **IP anonimizado**: Endereços IP são processados com hash criptográfico irreversível e salteamento diário.
- ✅ **Sem popups de consentimento**: Como não há coleta de dados pessoais nem cookies, não incomodamos você com banners irritantes.
- ✅ **Transparência total**: As estatísticas de acesso são públicas e auditáveis em tempo real por qualquer pessoa em: **[https://netinspector.goatcounter.com/](https://netinspector.goatcounter.com/)**
- ✅ **Mecanismo de Opt-Out simples**: Qualquer usuário pode desativar o rastreamento clicando no botão **"Desativar Analytics"** presente no rodapé de todas as páginas (o sistema adiciona o parâmetro `?skipgc=on` na URL).

**Dados métricos computados (totalmente agregados):**
- Páginas visitadas (ex: `/index.html`, `/dns-leak.html`, `/domain.html`)
- Referrer (origem da visita)
- Navegador e sistema operacional (genéricos, não identificáveis)
- Faixa geral de resolução de tela

---

## 🔍 Otimização para Mecanismos de Busca (SEO)

O projeto implementa as melhores práticas recomendadas de SEO técnico e semântico:
- **Schema.org Estruturado**: Injeção de metadados ricos em formato JSON-LD com marcações `@graph` de `WebApplication`, `FAQPage` e `BreadcrumbList`.
- **Open Graph & Twitter Cards**: Tags canônicas completas com imagens pré-configuradas de preview em redes sociais.
- **Sitemap Canônico (`sitemap.xml`)**: Mapeamento das 3 URLs fundamentais com prioridades balanceadas e frequência de rastreamento.
- **Controle de Crawlers (`robots.txt`)**: Diretivas amigáveis para robôs de busca.

---

## 🔒 Privacidade e Segurança

- **100% Client-Side**: O código fonte roda exclusivamente na sua máquina. Não mantemos servidores coletando logs ou armazenando tráfego.
- **Código Auditável**: Todo o projeto é transparente e distribuído abertamente sob a licença MIT.
- **Sem Dependências Ocultas**: Nenhum framework externo de terceiros ou script invasivo de anúncios.

---

## 🚀 Como Usar

### Acesso Online
Acesse a versão em produção hospedada globalmente na Cloudflare Pages:
👉 **[https://netinspector.net/](https://netinspector.net/)**

### Execução em Ambiente Local

Por ser construído em tecnologias nativas, você pode executar o projeto localmente com qualquer servidor estático:

```bash
# Clone o repositório
git clone https://github.com/fabaodabahia/netinspector.git
cd netinspector

# Inicie um servidor HTTP local simples:
# Opção 1: Python 3
python -m http.server 8000

# Opção 2: Node.js (npx)
npx serve .

# Opção 3: PHP
php -S localhost:8000
```
Em seguida, acesse `http://localhost:8000` em seu navegador web.

---

## 💻 Compatibilidade

O NET INSPECTOR é compatível com os principais navegadores modernos para Desktop e Mobile:
- **Google Chrome / Chromium**: Versão 70+
- **Mozilla Firefox**: Versão 68+
- **Microsoft Edge**: Versão 79+
- **Apple Safari**: Versão 12.1+
- **Opera**: Versão 57+
- **Brave / Vivaldi / Tor Browser**: Totalmente suportados

---

## ❓ FAQ - Perguntas Frequentes

### O que é o NET INSPECTOR?
É um conjunto de ferramentas web gratuitas para diagnóstico completo de conectividade de rede, dados de provedor de internet (ISP), endereço IP público, latência com medição de ping, auditoria de DNS e inspeção de domínios.

### Como funciona o teste de latência e ping?
O teste avalia o tempo de trânsito de ida e volta (Round-Trip Time) até nós globais de alta disponibilidade, computando o valor em milissegundos e classificando visualmente a qualidade da rota da sua conexão.

### O que é vazamento de WebRTC (WebRTC Leak)?
Trata-se de uma vulnerabilidade presente em alguns navegadores onde requisições do protocolo de comunicação em tempo real (WebRTC) revelam seu verdadeiro endereço IP local ou público, mesmo com um túnel de VPN ativo. O NET INSPECTOR realiza a checagem e alerta o usuário imediatamente.

### Algum dado meu é armazenado?
Não. Todas as requisições ocorrem diretamente do seu navegador para as APIs de consulta técnica. Nenhum banco de dados ou backend armazena o que você pesquisa ou visualiza.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para termos completos de uso e distribuição.

---

**NET INSPECTOR** · Dados processados localmente · Nenhuma informação pessoal é armazenada  
*Projeto open source mantido com foco em segurança, transparência e privacidade.*
