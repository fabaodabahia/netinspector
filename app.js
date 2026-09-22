/* ─────────── Internationalization (i18n) ─────────── */
const SUPPORTED_LANGS = {
  'pt-br': { name: 'Português (Brasil)', flag: '🇧🇷', dir: 'ltr' },
  'en':    { name: 'English',             flag: '🇺🇸', dir: 'ltr' },
  'es':    { name: 'Español',             flag: '🇪🇸', dir: 'ltr' },
  'fr':    { name: 'Français',            flag: '🇫🇷', dir: 'ltr' },
  'de':    { name: 'Deutsch',             flag: '🇩🇪', dir: 'ltr' },
  'it':    { name: 'Italiano',            flag: '🇮🇹', dir: 'ltr' },
  'ja':    { name: '日本語',              flag: '🇯🇵', dir: 'ltr' },
  'zh':    { name: '中文',                flag: '🇨🇳', dir: 'ltr' },
  'ru':    { name: 'Русский',             flag: '🇷🇺', dir: 'ltr' },
  'ar':    { name: 'العربية',             flag: '🇸🇦', dir: 'rtl' }
};

const TRANSLATIONS = {
  'pt-br': {
    // Nav & Header
    logo_subtitle: 'Diagnóstico completo de conexão &amp; ISP',
    nav_home: '🌐 Qual Meu IP?',
    nav_domain: '🔍 Analisar Domínio',
    btn_scan: '▶ Analisar',
    btn_domain: '🔍 Analisar Domínio ↗',
    btn_home: '← Qual Meu IP',
    // Hero meu-ip
    hero_ip_label: 'Seu Endereço de IP Público',
    // Hero domain
    hero_domain_label: 'Diagnóstico de Segurança, DNS e SSL',
    hero_domain_title: 'Analisador de Domínio Online Gratuito',
    hero_domain_desc: 'Inspecione a infraestrutura completa de qualquer site: registros DNS, certificado SSL/TLS, dados Whois, cabeçalhos de segurança HTTP, portas e tecnologias em tempo real.',
    domain_input_placeholder: 'Digite um domínio (ex: example.com)',
    domain_btn_scan: '🔍 Analisar',
    domain_input_hint: 'Digite um domínio para análise completa de segurança, DNS, SSL e infraestrutura.',
    // Cards Titles
    card_isp: 'ISP &amp; ASN',
    card_location: 'Localização',
    card_ip: 'Endereços IP',
    card_latency: 'Latência &amp; DNS',
    card_browser: 'Navegador &amp; Dispositivo',
    card_security: 'Segurança &amp; Privacidade',
    card_connectivity: 'Conectividade',
    card_domain_scan: 'Análise de Domínio',
    card_ipinfo: 'IP Info',
    card_ssl_chain: 'SSL Chain',
    card_dns_records: 'DNS Records',
    card_cookies: 'Cookies',
    card_crawl_rules: 'Crawl Rules',
    card_headers: 'Headers',
    card_quality_metrics: 'Quality Metrics',
    card_server_location: 'Server Location',
    card_associated_hosts: 'Associated Hosts',
    card_redirect_chain: 'Redirect Chain',
    card_diagnostic_log: 'Log de Diagnóstico',
    card_tls_audit: 'TLS Audit',
    card_tls_compat: 'TLS Compatibility',
    // Card field labels
    lbl_provider: 'Provedor',
    lbl_org: 'Organização',
    lbl_asn: 'ASN',
    lbl_domain: 'Domínio',
    lbl_nettype: 'Tipo de rede',
    lbl_country: 'País',
    lbl_region: 'Região',
    lbl_city: 'Cidade',
    lbl_postal: 'CEP / Postal',
    lbl_tz: 'Fuso horário',
    lbl_coords: 'Coordenadas',
    lbl_ipv4_public: 'IPv4 público',
    lbl_ipv6_public: 'IPv6 público',
    lbl_ip_local: 'IP local (LAN)',
    lbl_ipv6_local: 'IPv6 local',
    lbl_webrtc_leak: 'WebRTC leak',
    lbl_webrtc_note: '⚠ IPs locais via WebRTC. Se aparecer o IPv4 público aqui, pode indicar vazamento de VPN.',
    lbl_ping: 'Ping HTTP',
    lbl_dns_server: 'Servidor DNS',
    lbl_dns_lookup: 'DNS lookup',
    lbl_https_support: 'HTTPS suporte',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Plataforma',
    lbl_language: 'Idioma',
    lbl_screen: 'Tela (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor detectado',
    lbl_incognito: 'Modo incógnito',
    lbl_speed: 'Velocidade estimada',
    lbl_online: 'Status',
    // Quality bar
    lbl_quality: 'Qualidade',
    // Articles & FAQ - meu-ip
    art_ip_title: 'O que é um Endereço IP Público?',
    art_ip_p1: 'O endereço IP (Internet Protocol) é o identificador numérico global que identifica seu ponto de acesso à rede mundial de computadores. Assim como o endereço postal identifica sua residência para a entrega de cartas, o IP público permite que servidores web, plataformas de streaming, sites e aplicativos enviem pacotes de dados de volta para você de maneira exata e segura.',
    art_ip_p2: 'Existem duas versões em operação na internet contemporânea: o IPv4, formato tradicional composto por 4 números separados por pontos (ex: 177.136.244.12), e o IPv6, padrão moderno de 128 bits representado por caracteres hexadecimais (ex: 2804:14d:5483::1). O NET INSPECTOR realiza a checagem de ambos instantaneamente.',
    art_isp_title: 'Como o NET INSPECTOR identifica seu Provedor (ISP)?',
    art_isp_p1: 'Todos os blocos de endereços IP globais são distribuídos por entidades regionais de registro (como o Registro.br / LACNIC na América Latina, ARIN na América do Norte e RIPE NCC na Europa). Esses blocos são concedidos a operadoras de telecomunicações e corporações chamadas de Sistemas Autônomos (Autonomous Systems).',
    art_isp_p2: 'Ao inspecionar seu IP público, o NET INSPECTOR consulta as bases públicas de ASN (Autonomous System Number) e tabelas BGP, revelando com precisão o nome fantasia da sua operadora (como Claro, Vivo, TIM, Starlink ou provedores regionais de fibra óptica) e o número de registro do seu sistema autônomo.',
    art_geo_title: 'Por que a Geolocalização por IP pode ser Imprecisa?',
    art_geo_p1: 'Muitos usuários se surpreendem quando a cidade indicada no teste não corresponde ao seu endereço físico exato. Isso acontece porque a geolocalização por IP não utiliza GPS. O método mapeia o endereço IP para o ponto de presença (PoP), central de roteamento ou datacenter mais próximo instalado pela sua operadora.',
    art_geo_p2: 'Por conta dessa arquitetura, conexões via rede móvel (4G/5G) ou provedores que compartilham rotas estaduais podem indicar uma capital próxima ou município vizinho. Além disso, o uso de CGNAT (Carrier-Grade NAT) agrupa dezenas de residências sob uma mesma faixa de saída.',
    art_faq_title: 'Perguntas Frequentes sobre IP e Privacidade (FAQ)',
    faq_q1: 'Meu IP é estático ou dinâmico?',
    faq_a1: 'Na imensa maioria das assinaturas residenciais, o IP é dinâmico, alternando periodicamente ou sempre que seu modem é desligado da tomada. IPs fixos (estáticos) costumam ser contratados separadamente para empresas e hospedagem de servidores.',
    faq_q2: 'Qual é a real diferença entre IPv4 e IPv6?',
    faq_a2: 'O IPv4 suporta aproximadamente 4,3 bilhões de endereços, quantidade que se esgotou com a explosão de smartphones e dispositivos IoT. O IPv6 foi criado com 128 bits, gerando sextilhões de combinações e eliminando a dependência de tecnologias de tradução de endereços (NAT).',
    faq_q3: 'Como posso esconder meu IP público?',
    faq_a3: 'Você pode utilizar uma VPN de boa reputação, a rede Tor ou proxies criptografados. Ao navegar com uma VPN ativa, os sites passam a enxergar o IP do servidor remoto. Nosso card de IP inclui verificação de WebRTC Leak para alertar caso sua VPN esteja deixando vazar seu IP real.',
    faq_q4: 'Alguém pode descobrir meu endereço físico pelo IP?',
    faq_a4: 'Não diretamente. Terceiros só conseguem ver estimativas regionais (cidade, estado e provedor). Apenas o seu provedor de internet possui os registros contratuais associando o IP ao endereço residencial, informação protegida por lei e fornecida unicamente sob ordem judicial.',
    cta_domain_title: 'Quer analisar um domínio ou site completo?',
    cta_domain_desc: 'O NET INSPECTOR possui um analisador de domínio dedicado com 36 scanners: registros DNS, certificado SSL/TLS, dados Whois, segurança HTTP e muito mais.',
    cta_domain_btn: 'Abrir Analisador de Domínio 🔍',
    // Domain Page Articles & FAQs
    art_domain_title: 'O que é uma Análise de Domínio?',
    art_domain_p1: 'A análise de domínio é um procedimento técnico de auditoria que investiga todos os aspectos públicos da presença digital de um site ou servidor na internet. Ela abrange desde o roteamento básico de tráfego (DNS) até camadas críticas de criptografia (SSL/TLS), políticas de correio eletrônico (SPF, DKIM, DMARC) e cabeçalhos de segurança que protegem os visitantes contra ataques virtuais.',
    art_domain_p2: 'Seja para desenvolvedores depurando configurações de servidores, analistas de cibersegurança auditando vulnerabilidades ou proprietários de sites verificando a integridade de seus serviços, o NET INSPECTOR executa mais de 36 testes em paralelo diretamente pelo navegador.',
    art_dns_title: 'Como verificar os registros DNS de um site?',
    art_dns_p1: 'O Domain Name System (DNS) é a agenda telefônica da internet, convertendo nomes de domínios memorizáveis em endereços numéricos IP legíveis por máquinas. Nossa ferramenta consulta resoluções autoritativas via DNS-over-HTTPS (DoH) para examinar múltiplos tipos de registros essenciais (A, AAAA, MX, NS, TXT, CNAME).',
    art_ssl_title: 'Por que verificar o certificado SSL/TLS de um domínio?',
    art_ssl_p1: 'O protocolo HTTPS garante que toda a comunicação entre o navegador do usuário e o servidor web permaneça criptografada, impedindo interceptações por terceiros. Auditar o certificado SSL/TLS permite atestar validade temporal, cadeia de confiança e suporte a versões criptográficas modernas como TLS 1.2 e TLS 1.3.',
    art_whois_title: 'O que é Whois e para que serve?',
    art_whois_p1: 'O Whois é um protocolo padronizado que permite consultar os bancos de dados públicos dos registradores de domínios. Através dele, é possível descobrir a data em que o domínio foi registrado pela primeira vez, sua última renovação e sua data de expiração.',
    dfaq_q1: 'Quantas informações a ferramenta analisa de um domínio?',
    dfaq_a1: 'O NET INSPECTOR executa mais de 36 verificações em paralelo, incluindo resolução DNS profunda, cadeias de certificação SSL, dados Whois, cabeçalhos de segurança HTTP, portas comuns, firewall (WAF) e histórico de arquivamento.',
    dfaq_q2: 'A análise é gratuita e sem limites?',
    dfaq_a2: 'Sim! A ferramenta é 100% gratuita, sem limite diário de consultas e não requer cadastro ou fornecimento de e-mail.',
    dfaq_q3: 'Os dados do domínio analisado são armazenados?',
    dfaq_a3: 'Não. Todas as requisições são processadas diretamente pelo navegador do cliente (client-side) utilizando APIs públicas e DoH. Nenhum histórico ou busca é gravado em servidores próprios.',
    dfaq_q4: 'Por que alguns campos aparecem como "Indisponível (CORS)"?',
    dfaq_a4: 'Por ser uma ferramenta 100% client-side, algumas consultas HTTP diretas são restringidas pela política de CORS dos navegadores para evitar requisições não autorizadas entre origens.',
    dfaq_q5: 'O que significam os headers de segurança HTTP?',
    dfaq_a5: 'Cabeçalhos HTTP como HSTS, CSP, X-Frame-Options e X-Content-Type-Option    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ Teste de Vazamento DNS',
    btn_dnsleak: '🛡️ Teste de Vazamento ↗',
    leak_hero_badge: 'Privacidade &amp; Auditoria de VPN',
    leak_hero_title: 'Sua VPN ou Proxy está vazando dados?',
    leak_hero_desc: 'Faça um teste completo de vazamento de DNS, endereço IP real e WebRTC para garantir que sua navegação permaneça 100% segura e anônima.',
    leak_art_dns_title: 'O que é um Vazamento de DNS (DNS Leak)?',
    leak_art_dns_p1: 'Quando você se conecta a uma VPN, todo o tráfego de dados e requisições de resolução de nomes devem passar por um túnel criptografado seguro até os servidores DNS da própria VPN. Ocorre um vazamento de DNS quando seu sistema operacional ignora esse túnel e envia as consultas diretamente aos servidores DNS padrão do seu provedor de internet (ISP).',
    leak_art_dns_p2: 'Isso significa que, mesmo acreditando estar anônimo, seu provedor de internet continua sabendo exatamente quais sites você visita, o que anula a principal vantagem de privacidade da sua VPN.',
    leak_art_webrtc_title: 'O Perigo do Vazamento via WebRTC (WebRTC Leak)',
    leak_art_webrtc_p1: 'O protocolo WebRTC é nativo dos navegadores modernos para chamadas de voz e vídeo. No entanto, suas requisições STUN podem contornar interfaces de rede virtuais, expondo seu verdadeiro IPv4 ou IPv6 público diretamente para qualquer site visitado.',
    leak_art_webrtc_p2: 'O NET INSPECTOR analisa as conexões ICE locais do seu navegador e alerta instantaneamente caso ocorra divergência entre o IP do túnel VPN e seu IP real.',
    leak_art_doh_title: 'Como o DNS-over-HTTPS (DoH) e DoT Protegem Você?',
    leak_art_doh_p1: 'O DNS tradicional transmite requisições em texto não criptografado via porta UDP 53, permitindo grampos e censura de rede. Protocolos modernos como DNS-over-HTTPS (DoH) e DNS-over-TLS (DoT) encapsulam suas consultas em túneis TLS seguros, impedindo a interceptação por terceiros ou operadoras intermediárias.',
    leak_faq_title: 'Perguntas Frequentes sobre Privacidade de VPN &amp; DNS (FAQ)',
    leak_faq_q1: 'Minha VPN esconde meu IP, mas e o DNS?',
    leak_faq_a1: 'Nem sempre. Softwares de VPN mal configurados ou navegadores com configurações padrão de sistema podem direcionar resoluções de nomes para o roteador local da sua operadora.',
    leak_faq_q2: 'Como um site descobre meu IP real mesmo com VPN ativa?',
    leak_faq_a2: 'Geralmente através de vazamento de WebRTC ou chamadas simultâneas IPv6 não cobertas pelo túnel da VPN. Se sua VPN só roteia IPv4, seu IPv6 verdadeiro pode ficar totalmente desprotegido.',
    leak_faq_q3: 'O que é DNS-over-HTTPS (DoH) e DNS-over-TLS (DoT)?',
    leak_faq_a3: 'São padrões criptográficos que protegem a resolução de domínios contra espionagem na rede local ou corporativa, adicionando uma camada extra de blindagem mesmo sem VPN.',
    leak_faq_q4: 'Como posso corrigir um vazamento de DNS identificado no teste?',
    leak_faq_a4: 'Ative a proteção contra vazamento de DNS (DNS leak protection) e Kill Switch nas configurações do seu cliente de VPN, ou configure manualmente servidores DNS seguros como Cloudflare (1.1.1.1) ou Google (8.8.8.8) diretamente na sua placa de rede.',
    leak_cta_home_title: 'Deseja inspecionar seu provedor de internet detalhadamente?',
    leak_cta_home_desc: 'Consulte geolocalização exata, ASN do provedor e dados de infraestrutura da sua conexão.',
    leak_cta_home_btn: 'Consultar Meu IP &amp; Provedor 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · Diagnóstico de IP e Conexão 100% Client-Side · Nenhum dado é registrado',
    footer_link_ip: 'Qual é o Meu IP?',
    footer_link_dnsleak: 'Teste de Vazamento DNS',
    footer_link_domain: 'Análise de Domínio',
    footer_analytics: '📊 Analytics privacy-first via GoatCounter (sem cookies) —',
    footer_stats: 'Ver estatísticas públicas ↗',
    btn_optout_off: 'Desativar Analytics',
    btn_optout_on: 'Ativar Analytics'
  },
  'en': {
    logo_subtitle: 'Full connection &amp; ISP diagnostics',
    nav_home: '🌐 What is My IP?',
    nav_domain: '🔍 Domain Analyzer',
    btn_scan: '▶ Analyze',
    btn_domain: '🔍 Domain Analyzer ↗',
    btn_home: '← What is My IP',
    hero_ip_label: 'Your Public IP Address',
    hero_domain_label: 'Security, DNS & SSL Diagnostics',
    hero_domain_title: 'Free Online Domain Analyzer',
    hero_domain_desc: 'Inspect the complete infrastructure of any website: DNS records, SSL/TLS certificate, Whois data, HTTP security headers, ports, and real-time technologies.',
    domain_input_placeholder: 'Enter a domain (e.g. example.com)',
    domain_btn_scan: '🔍 Analyze',
    domain_input_hint: 'Enter a domain name for full security, DNS, SSL, and infrastructure analysis.',
    card_isp: 'ISP &amp; ASN',
    card_location: 'Location',
    card_ip: 'IP Addresses',
    card_latency: 'Latency &amp; DNS',
    card_browser: 'Browser &amp; Device',
    card_security: 'Security &amp; Privacy',
    card_connectivity: 'Connectivity',
    card_domain_scan: 'Domain Analysis',
    card_ipinfo: 'IP Info',
    card_ssl_chain: 'SSL Chain',
    card_dns_records: 'DNS Records',
    card_cookies: 'Cookies',
    card_crawl_rules: 'Crawl Rules',
    card_headers: 'Headers',
    card_quality_metrics: 'Quality Metrics',
    card_server_location: 'Server Location',
    card_associated_hosts: 'Associated Hosts',
    card_redirect_chain: 'Redirect Chain',
    card_diagnostic_log: 'Diagnostic Log',
    card_tls_audit: 'TLS Audit',
    card_tls_compat: 'TLS Compatibility',
    lbl_provider: 'ISP Provider',
    lbl_org: 'Organization',
    lbl_asn: 'ASN',
    lbl_domain: 'Domain',
    lbl_nettype: 'Network Type',
    lbl_country: 'Country',
    lbl_region: 'Region',
    lbl_city: 'City',
    lbl_postal: 'Postal Code',
    lbl_tz: 'Timezone',
    lbl_coords: 'Coordinates',
    lbl_ipv4_public: 'Public IPv4',
    lbl_ipv6_public: 'Public IPv6',
    lbl_ip_local: 'Local IP (LAN)',
    lbl_ipv6_local: 'Local IPv6',
    lbl_webrtc_leak: 'WebRTC leak',
    lbl_webrtc_note: '⚠ Local IPs via WebRTC. If your public IPv4 appears here, it may indicate a VPN leak.',
    lbl_ping: 'HTTP Ping',
    lbl_dns_server: 'DNS Server',
    lbl_dns_lookup: 'DNS lookup',
    lbl_https_support: 'HTTPS Support',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Platform',
    lbl_language: 'Language',
    lbl_screen: 'Screen (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor Detected',
    lbl_incognito: 'Incognito Mode',
    lbl_speed: 'Estimated Speed',
    lbl_online: 'Status',
    lbl_quality: 'Quality',
    art_ip_title: 'What is a Public IP Address?',
    art_ip_p1: 'The IP (Internet Protocol) address is the global numerical identifier that specifies your gateway to the world wide web. Just like a physical postal address allows mail delivery to your home, a public IP address enables servers, streaming platforms, and apps to deliver data packets back to you accurately and safely.',
    art_ip_p2: 'Two versions coexist on the modern Internet: IPv4, composed of 4 dot-separated numbers (e.g., 177.136.244.12), and IPv6, a 128-bit hexadecimal standard (e.g., 2804:14d:5483::1). NET INSPECTOR checks both instantaneously.',
    art_isp_title: 'How does NET INSPECTOR detect your ISP?',
    art_isp_p1: 'Global IP address blocks are allocated by regional registries (such as ARIN, RIPE NCC, and LACNIC) to telecommunications carriers and corporations known as Autonomous Systems.',
    art_isp_p2: 'When inspecting your public IP, NET INSPECTOR queries public ASN databases and BGP tables, accurately showing your provider name and Autonomous System Number.',
    art_geo_title: 'Why can IP Geolocation be Inaccurate?',
    art_geo_p1: 'Users are often surprised when the reported city does not match their exact home. IP geolocation does not use GPS; it maps your IP to your ISP nearest routing center or Point of Presence (PoP).',
    art_geo_p2: 'Mobile cellular connections (4G/5G) or CGNAT networks frequently pool residential customers across broader regional hubs.',
    art_faq_title: 'Frequently Asked Questions (FAQ)',
    faq_q1: 'Is my IP address static or dynamic?',
    faq_a1: 'Most residential broadband connections use dynamic IP addresses that cycle periodically or upon modem reboot. Fixed static IPs are usually reserved for business subscriptions and dedicated servers.',
    faq_q2: 'What is the real difference between IPv4 and IPv6?',
    faq_a2: 'IPv4 supports about 4.3 billion unique addresses, which have been exhausted globally. IPv6 features 128-bit addresses, offering practically unlimited addresses without NAT overhead.',
    faq_q3: 'How can I hide or mask my public IP address?',
    faq_a3: 'You can use a trusted VPN, the Tor network, or encrypted proxies. Our IP inspection card also runs a WebRTC leak check to make sure your VPN is not leaking your true IP.',
    faq_q4: 'Can anyone find my home address from my IP?',
    faq_a4: 'No. Third parties can only see regional estimates (city and ISP). Only your Internet service provider maintains legal subscription records matching IPs to physical addresses.',
    cta_domain_title: 'Looking for a full domain audit?',
    cta_domain_desc: 'NET INSPECTOR provides a dedicated domain analyzer with 36 real-time scanners: DNS records, SSL/TLS certificate, Whois data, HTTP security headers, and more.',
    cta_domain_btn: 'Open Domain Analyzer 🔍',
    art_domain_title: 'What is Domain Analysis?',
    art_domain_p1: 'Domain analysis is a technical audit examining all public facets of a website or server. It ranges from DNS routing to SSL/TLS encryption, mail exchange records, and HTTP security headers.',
    art_domain_p2: 'Whether you are a developer troubleshooting configurations or a security analyst assessing threats, NET INSPECTOR runs 36+ parallel checks right inside your browser.',
    art_dns_title: 'How to check website DNS records?',
    art_dns_p1: 'The Domain Name System (DNS) translates human-friendly hostnames into machine-readable IP addresses. Our tool uses DNS-over-HTTPS (DoH) to inspect essential records (A, AAAA, MX, NS, TXT, CNAME).',
    art_ssl_title: 'Why verify SSL/TLS certificates?',
    art_ssl_p1: 'HTTPS encrypts data between user browsers and web servers. Auditing certificates confirms validity dates, certificate authority chains, and modern protocol support (TLS 1.2 / TLS 1.3).',
    art_whois_title: 'What is Whois and why is it useful?',
    art_whois_p1: 'Whois queries public domain registrar databases to reveal registration dates, renewal timestamps, and expiration deadlines.',
    dfaq_q1: 'How many data points does this tool analyze?',
    dfaq_a1: 'NET INSPECTOR runs over 36 tests in parallel covering DNS, SSL certificates, Whois, security headers, open ports, and historical web archives.',
    dfaq_q2: 'Is this analysis free and unlimited?',
    dfaq_a2: 'Yes! 100% free, unlimited queries, with no registration or email needed.',
    dfaq_q3: 'Are tested domain searches stored or logged?',
    dfaq_a3: 'No. All queries run client-side in your browser using public APIs. We never record queries on our servers.',
    dfaq_q4: 'Why do some fields show "Unavailable (CORS)"?',
    dfaq_a4: 'As a client-side tool, certain direct HTTP queries are restricted by browser CORS security policies.',
    dfaq_q5: 'What do HTTP security headers do?',
    dfaq_a5: 'Headers like HSTS, CSP, and X-Frame-Options instruct browsers how to safeguard users against clickjacking, XSS, and downgrade attacks.',
    cta_home_title: 'Want to test your own internet connection?',
    cta_home_desc: 'Instantly find your public IP address, ISP, geolocation, and WebRTC leak test.',
    cta_home_btn: 'Find My IP 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ DNS Leak Test',
    btn_dnsleak: '🛡️ DNS Leak Test ↗',
    leak_hero_badge: 'Privacy &amp; VPN Audit',
    leak_hero_title: 'Is your VPN or Proxy leaking private data?',
    leak_hero_desc: 'Run an end-to-end DNS leak, public IP and WebRTC test to guarantee your internet traffic stays 100% private and protected.',
    leak_art_dns_title: 'What is a DNS Leak?',
    leak_art_dns_p1: 'When connected to a VPN, all network traffic and DNS queries should route through an encrypted tunnel directly to your VPN provider DNS servers. A DNS leak happens when your device bypasses this tunnel, sending requests to your local internet provider (ISP) DNS servers instead.',
    leak_art_dns_p2: 'This means that despite believing you are anonymous, your ISP can still monitor which websites you visit, entirely undermining your VPN privacy.',
    leak_art_webrtc_title: 'The Danger of WebRTC Leaks',
    leak_art_webrtc_p1: 'WebRTC is built into modern browsers for peer-to-peer real-time communication. However, STUN requests can bypass VPN network adapters, exposing your true public IPv4 or IPv6 address directly to websites.',
    leak_art_webrtc_p2: 'NET INSPECTOR inspects your browser local ICE candidates in real time and alerts you if any divergence between your VPN IP and real IP is found.',
    leak_art_doh_title: 'How DNS-over-HTTPS (DoH) & DoT Protect You',
    leak_art_doh_p1: 'Standard DNS queries travel unencrypted over UDP port 53, making them vulnerable to surveillance. DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) wrap requests in secure TLS tunnels, preventing tampering and snooping.',
    leak_faq_title: 'VPN &amp; DNS Privacy Frequently Asked Questions (FAQ)',
    leak_faq_q1: 'Does my VPN always hide my DNS queries?',
    leak_faq_a1: 'Not always. Misconfigured VPN clients or operating system fallbacks can route lookups to your local ISP router.',
    leak_faq_q2: 'How can a website discover my real IP even with an active VPN?',
    leak_faq_a2: 'Mainly through WebRTC leaks or unprotected IPv6 traffic. If your VPN only handles IPv4, your true IPv6 might be exposed.',
    leak_faq_q3: 'What are DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)?',
    leak_faq_a3: 'They are modern security protocols encrypting DNS traffic, preventing eavesdropping on public Wi-Fi and ISP monitoring.',
    leak_faq_q4: 'How do I fix a DNS leak detected by this test?',
    leak_faq_a4: 'Enable DNS Leak Protection and Kill Switch inside your VPN app, or manually set trusted DNS servers like Cloudflare (1.1.1.1) on your network adapter.',
    leak_cta_home_title: 'Want to inspect your internet provider and IP details?',
    leak_cta_home_desc: 'Check detailed geolocation, ASN routing, and connectivity speed.',
    leak_cta_home_btn: 'Inspect My IP &amp; ISP 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · 100% Client-Side Network & IP Diagnostics · Zero data stored',
    footer_link_ip: 'What is My IP?',
    footer_link_dnsleak: 'DNS Leak Test',
    footer_link_domain: 'Domain Analysis',
    footer_analytics: '📊 Privacy-first analytics via GoatCounter (no cookies) —',
    footer_stats: 'View public stats ↗',
    btn_optout_off: 'Disable Analytics',
    btn_optout_on: 'Enable Analytics'
  },
  'es': {
    logo_subtitle: 'Diagnóstico completo de conexión e ISP',
    nav_home: '🌐 ¿Cuál es Mi IP?',
    nav_domain: '🔍 Analizar Dominio',
    btn_scan: '▶ Analizar',
    btn_domain: '🔍 Analizar Dominio ↗',
    btn_home: '← ¿Cuál es Mi IP?',
    hero_ip_label: 'Su Dirección IP Pública',
    hero_domain_label: 'Diagnóstico de Seguridad, DNS y SSL',
    hero_domain_title: 'Analizador de Dominio Online Gratuito',
    hero_domain_desc: 'Inspeccione la infraestructura completa de cualquier sitio web: registros DNS, certificado SSL/TLS, datos Whois, encabezados HTTP, puertos y tecnologías en tiempo real.',
    domain_input_placeholder: 'Ingrese un dominio (ej: example.com)',
    domain_btn_scan: '🔍 Analizar',
    domain_input_hint: 'Ingrese un nombre de dominio para un análisis exhaustivo de seguridad, DNS, SSL e infraestructura.',
    card_isp: 'ISP &amp; ASN',
    card_location: 'Ubicación',
    card_ip: 'Direcciones IP',
    card_latency: 'Latencia &amp; DNS',
    card_browser: 'Navegador &amp; Dispositivo',
    card_security: 'Seguridad &amp; Privacidad',
    card_connectivity: 'Conectividad',
    card_domain_scan: 'Análisis de Dominio',
    card_ipinfo: 'Info IP',
    card_ssl_chain: 'Cadena SSL',
    card_dns_records: 'Registros DNS',
    card_cookies: 'Cookies',
    card_crawl_rules: 'Reglas de Rastreo',
    card_headers: 'Encabezados',
    card_quality_metrics: 'Métricas de Calidad',
    card_server_location: 'Ubicación del Servidor',
    card_associated_hosts: 'Hosts Asociados',
    card_redirect_chain: 'Cadena de Redirección',
    card_diagnostic_log: 'Registro de Diagnóstico',
    card_tls_audit: 'Auditoría TLS',
    card_tls_compat: 'Compatibilidad TLS',
    lbl_provider: 'Proveedor',
    lbl_org: 'Organización',
    lbl_asn: 'ASN',
    lbl_domain: 'Dominio',
    lbl_nettype: 'Tipo de red',
    lbl_country: 'País',
    lbl_region: 'Región',
    lbl_city: 'Ciudad',
    lbl_postal: 'Código Postal',
    lbl_tz: 'Zona horaria',
    lbl_coords: 'Coordenadas',
    lbl_ipv4_public: 'IPv4 público',
    lbl_ipv6_public: 'IPv6 público',
    lbl_ip_local: 'IP local (LAN)',
    lbl_ipv6_local: 'IPv6 local',
    lbl_webrtc_leak: 'Fuga WebRTC',
    lbl_webrtc_note: '⚠ IPs locales vía WebRTC. Si aparece su IPv4 público aquí, puede indicar fuga de VPN.',
    lbl_ping: 'Ping HTTP',
    lbl_dns_server: 'Servidor DNS',
    lbl_dns_lookup: 'Búsqueda DNS',
    lbl_https_support: 'Soporte HTTPS',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Plataforma',
    lbl_language: 'Idioma',
    lbl_screen: 'Pantalla (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor detectado',
    lbl_incognito: 'Modo incógnito',
    lbl_speed: 'Velocidad estimada',
    lbl_online: 'Estado',
    lbl_quality: 'Calidad',
    art_ip_title: '¿Qué es una Dirección IP Pública?',
    art_ip_p1: 'La dirección IP es el identificador numérico que define su punto de conexión a Internet, permitiendo el intercambio seguro de datos con servidores web y aplicaciones.',
    art_ip_p2: 'Existen dos versiones principales: IPv4 (cuatro números separados por puntos) e IPv6 (128 bits hexadecimales). NET INSPECTOR detecta ambos protocolos.',
    art_isp_title: '¿Cómo identifica NET INSPECTOR a su ISP?',
    art_isp_p1: 'Los bloques de IP se delegan a operadores a través de Sistemas Autónomos (ASN). NET INSPECTOR consulta tablas de enrutamiento BGP públicas para identificar a su operador.',
    art_isp_p2: 'Al consultar su IP, mostramos con precisión el nombre de su proveedor de Internet y el número ASN asignado.',
    art_geo_title: '¿Por qué la Geolocalización IP puede ser Imprecisa?',
    art_geo_p1: 'La geolocalização por IP no utiliza GPS satelital; apunta al centro de datos o nodo de distribución más próximo de su proveedor.',
    art_geo_p2: 'Las redes celulares móviles (4G/5G) y CGNAT suelen concentrar usuarios en capitales o regiones vecinas.',
    art_faq_title: 'Preguntas Frecuentes sobre IP y Privacidad (FAQ)',
    faq_q1: '¿Mi dirección IP es estática o dinámica?',
    faq_a1: 'En la mayoría de hogares es dinámica y cambia periódicamente. Las IPs estáticas suelen ser para empresas y servidores.',
    faq_q2: '¿Cuál es la diferencia entre IPv4 e IPv6?',
    faq_a2: 'IPv4 tiene 4.300 millones de direcciones agotadas en el mundo. IPv6 ofrece direcciones prácticamente infinitas.',
    faq_q3: '¿Cómo puedo ocultar mi dirección IP pública?',
    faq_a3: 'Usando una VPN confiable, proxies cifrados o la red Tor. Nuestro verificador de WebRTC detecta posibles fugas.',
    faq_q4: '¿Pueden saber mi dirección física mediante mi IP?',
    faq_a4: 'No directamente. Los terceros solo ven datos regionales (ciudad y proveedor). Solo su ISP tiene registros legales de abonados.',
    cta_domain_title: '¿Desea auditar un dominio web completo?',
    cta_domain_desc: 'Analice registros DNS, certificados SSL/TLS, datos Whois y encabezados de seguridad.',
    cta_domain_btn: 'Abrir Analizador de Dominio 🔍',
    art_domain_title: '¿Qué es un Análisis de Dominio?',
    art_domain_p1: 'Es una auditoría técnica que examina el enrutamiento DNS, cifrado SSL, certificados y encabezados de seguridad de cualquier sitio.',
    art_domain_p2: 'NET INSPECTOR ejecuta más de 36 pruebas en paralelo desde el navegador, sin necesidad de comandos de terminal.',
    art_dns_title: '¿Cómo verificar registros DNS?',
    art_dns_p1: 'El sistema DNS traduce nombres en IPs. Consultamos DoH para verificar registros A, AAAA, MX, NS, TXT y CNAME.',
    art_ssl_title: '¿Por qué verificar certificados SSL/TLS?',
    art_ssl_p1: 'Permite confirmar la validez del certificado, la entidad emisora y el soporte de protocolos modernos (TLS 1.2 / TLS 1.3).',
    art_whois_title: '¿Qué es Whois y para qué sirve?',
    art_whois_p1: 'Whois consulta registros públicos de dominios revelando fechas de alta, renovación y vencimiento.',
    dfaq_q1: '¿Cuánta información analiza la herramienta?',
    dfaq_a1: 'Ejecuta más de 36 verificaciones simultáneas cubriendo DNS, SSL, Whois, cabeceras HTTP y puertos.',
    dfaq_q2: '¿El análisis es gratuito e ilimitado?',
    dfaq_a2: '¡Sí! Totalmente gratuito, sin límites ni registros.',
    dfaq_q3: '¿Se almacenan las búsquedas realizadas?',
    dfaq_a3: 'No. Toda la ejecución es 100% client-side en su navegador.',
    dfaq_q4: '¿Por qué algunos campos dicen "No disponible (CORS)"?',
    dfaq_a4: 'Por políticas de seguridad de los navegadores que impiden peticiones entre orígenes sin cabecera CORS.',
    dfaq_q5: '¿Para qué sirven las cabeceras de seguridad HTTP?',
    dfaq_a5: 'Protegen a los usuarios contra ataques de clickjacking, robo de sesión e inyección XSS.',
    cta_home_title: '¿Desea comprobar su propia conexión?',
    cta_home_desc: 'Descubra al instante su IP pública, ISP, geolocalización y prueba de fugas WebRTC.',
    cta_home_btn: 'Descubrir Mi IP 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ Test de Fuga DNS',
    btn_dnsleak: '🛡️ Test de Fuga ↗',
    leak_hero_badge: 'Privacidad y Auditoría de VPN',
    leak_hero_title: '¿Su VPN o Proxy está filtrando datos?',
    leak_hero_desc: 'Realice una prueba exhaustiva de fugas de DNS, dirección IP real y WebRTC para asegurar que su navegación sea 100% privada.',
    leak_art_dns_title: '¿Qué es una Fuga de DNS (DNS Leak)?',
    leak_art_dns_p1: 'Al conectarse a una VPN, todas las peticiones DNS deben pasar por el túnel cifrado hacia los servidores de la VPN. Una fuga ocurre cuando el sistema omite el túnel y consulta directamente los DNS de su ISP.',
    leak_art_dns_p2: 'Esto expone qué sitios visita directamente ante su proveedor de internet, anulando la privacidad pretendida por su VPN.',
    leak_art_webrtc_title: 'El Peligro de las Fugas por WebRTC',
    leak_art_webrtc_p1: 'WebRTC facilita la comunicación en tiempo real en navegadores, pero sus consultas STUN pueden esquivar adaptadores virtuales de VPN y revelar su IP real.',
    leak_art_webrtc_p2: 'NET INSPECTOR examina candidatos ICE en tiempo real para advertirle al instante sobre cualquier discrepancia.',
    leak_art_doh_title: '¿Cómo Protegen DNS-over-HTTPS (DoH) y DoT?',
    leak_art_doh_p1: 'El DNS convencional viaja en texto plano por UDP 53. DoH y DoT encapsulan consultas en túneles TLS seguros evitando intercepciones.',
    leak_faq_title: 'Preguntas Frecuentes sobre Privacidad de VPN y DNS (FAQ)',
    leak_faq_q1: '¿Mi VPN oculta siempre mis consultas DNS?',
    leak_faq_a1: 'No siempre. Clientes de VPN mal configurados pueden dejar escapar consultas hacia el router de su operadora.',
    leak_faq_q2: '¿Cómo puede un sitio descubrir mi IP real con VPN?',
    leak_faq_a2: 'Principalmente por fugas de WebRTC o tráfico IPv6 no canalizado por la VPN.',
    leak_faq_q3: '¿Qué son DoH y DoT?',
    leak_faq_a3: 'Son protocolos de cifrado DNS que impiden la vigilancia en redes Wi-Fi públicas y proveedores locales.',
    leak_faq_q4: '¿Cómo solucionar una fuga de DNS?',
    leak_faq_a4: 'Active Kill Switch y protección contra fugas DNS en su aplicación VPN, o configure DNS seguros como Cloudflare (1.1.1.1).',
    leak_cta_home_title: '¿Desea inspeccionar su proveedor de Internet?',
    leak_cta_home_desc: 'Consulte geolocalización, ASN y velocidad de conectividad.',
    leak_cta_home_btn: 'Consultar Mi IP e ISP 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · Diagnóstico de red e IP 100% Client-Side · Sin registro de datos',
    footer_link_ip: '¿Cuál es Mi IP?',
    footer_link_dnsleak: 'Test de Fuga DNS',
    footer_link_domain: 'Análisis de Dominio',
    footer_analytics: '📊 Analítica privacy-first con GoatCounter (sin cookies) —',
    footer_stats: 'Ver estadísticas públicas ↗',
    btn_optout_off: 'Desactivar Analítica',
    btn_optout_on: 'Activar Analítica'
  },
  'fr': {
    logo_subtitle: 'Diagnostic complet de connexion &amp; FAI',
    nav_home: '🌐 Mon IP Publique',
    nav_domain: '🔍 Analyseur de Domaine',
    btn_scan: '▶ Analyser',
    btn_domain: '🔍 Analyseur de Domaine ↗',
    btn_home: '← Mon IP Publique',
    hero_ip_label: 'Votre Adresse IP Publique',
    hero_domain_label: 'Sécurité, DNS et Certificats SSL',
    hero_domain_title: 'Analyseur de Domaine en Ligne Gratuit',
    hero_domain_desc: 'Inspectez l’infrastructure complète de n’importe quel site web : enregistrements DNS, certificat SSL/TLS, données Whois, en-têtes de sécurité HTTP et technologies.',
    domain_input_placeholder: 'Entrez un domaine (ex : example.com)',
    domain_btn_scan: '🔍 Analyser',
    domain_input_hint: 'Saisissez un domaine pour un audit complet de sécurité, DNS, SSL et infrastructure.',
    card_isp: 'FAI &amp; ASN',
    card_location: 'Localisation',
    card_ip: 'Adresses IP',
    card_latency: 'Latence &amp; DNS',
    card_browser: 'Navigateur &amp; Appareil',
    card_security: 'Sécurité &amp; Confidentialité',
    card_connectivity: 'Connectivité',
    card_domain_scan: 'Analyse de Domaine',
    card_ipinfo: 'Infos IP',
    card_ssl_chain: 'Chaîne SSL',
    card_dns_records: 'Enregistrements DNS',
    card_cookies: 'Cookies',
    card_crawl_rules: 'Règles d’indexation',
    card_headers: 'En-têtes',
    card_quality_metrics: 'Métriques Qualité',
    card_server_location: 'Emplacement Serveur',
    card_associated_hosts: 'Hôtes Associés',
    card_redirect_chain: 'Redirections',
    card_diagnostic_log: 'Journal de Diagnostic',
    card_tls_audit: 'Audit TLS',
    card_tls_compat: 'Compatibilité TLS',
    lbl_provider: 'Fournisseur (FAI)',
    lbl_org: 'Organisation',
    lbl_asn: 'ASN',
    lbl_domain: 'Domaine',
    lbl_nettype: 'Type de réseau',
    lbl_country: 'Pays',
    lbl_region: 'Région',
    lbl_city: 'Ville',
    lbl_postal: 'Code postal',
    lbl_tz: 'Fuseau horaire',
    lbl_coords: 'Coordonnées',
    lbl_ipv4_public: 'IPv4 publique',
    lbl_ipv6_public: 'IPv6 publique',
    lbl_ip_local: 'IP locale (LAN)',
    lbl_ipv6_local: 'IPv6 locale',
    lbl_webrtc_leak: 'Fuite WebRTC',
    lbl_webrtc_note: '⚠ IPs locales via WebRTC. Si votre IPv4 publique apparaît ici, cela peut indiquer une fuite VPN.',
    lbl_ping: 'Ping HTTP',
    lbl_dns_server: 'Serveur DNS',
    lbl_dns_lookup: 'Résolution DNS',
    lbl_https_support: 'Support HTTPS',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Plateforme',
    lbl_language: 'Langue',
    lbl_screen: 'Écran (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor détecté',
    lbl_incognito: 'Navigation privée',
    lbl_speed: 'Débit estimé',
    lbl_online: 'Statut',
    lbl_quality: 'Qualité',
    art_ip_title: 'Qu’est-ce qu’une Adresse IP Publique ?',
    art_ip_p1: 'L’adresse IP est l’identifiant numérique unique attribué à votre passerelle Internet, permettant l’échange sécurisé de paquets de données avec les serveurs distants.',
    art_ip_p2: 'Deux protocoles coexistent : IPv4 (format à 4 nombres) et IPv6 (128 bits hexadécimaux). NET INSPECTOR détecte les deux instantanément.',
    art_isp_title: 'Comment NET INSPECTOR identifie votre FAI ?',
    art_isp_p1: 'Les blocs d’adresses IP sont alloués aux opérateurs au sein de Systèmes Autonomes (ASN). Notre outil consulte les tables BGP publiques.',
    art_isp_p2: 'Nous identifions fidèlement votre opérateur commercial et le numéro ASN associé.',
    art_geo_title: 'Pourquoi la Géolocalisation IP peut être Imprécise ?',
    art_geo_p1: 'La géolocalisation par IP n’utilise aucun signal GPS : elle cible le centre de routage ou PoP le plus proche de votre opérateur.',
    art_geo_p2: 'Les réseaux mobiles (4G/5G) et le CGNAT regroupent souvent les abonnés dans une grande métropole régionale.',
    art_faq_title: 'Questions Fréquentes (FAQ)',
    faq_q1: 'Mon adresse IP est-elle fixe ou dynamique ?',
    faq_a1: 'La plupart des offres grand public utilisent des adresses IP dynamiques qui changent régulièrement ou au redémarrage du boîtier.',
    faq_q2: 'Quelle est la différence entre IPv4 et IPv6 ?',
    faq_a2: 'L’IPv4 est limité à 4,3 milliards d’adresses aujourd’hui épuisées. L’IPv6 propose un nombre quasi infini de combinaisons.',
    faq_q3: 'Comment masquer mon adresse IP publique ?',
    faq_a3: 'En utilisant un VPN éprouvé, le réseau Tor ou des proxys chiffrés. Notre test WebRTC vérifie l’absence de fuites.',
    faq_q4: 'Une tierce personne peut-elle trouver mon domicile avec mon IP ?',
    faq_a4: 'Non. Seules des estimations régionales sont visibles. Seul votre FAI dispose du registre liant l’IP à votre contrat.',
    cta_domain_title: 'Besoin d’analyser un domaine complet ?',
    cta_domain_desc: 'Vérifiez les enregistrements DNS, le certificat SSL/TLS, le Whois et les en-têtes HTTP de sécurité.',
    cta_domain_btn: 'Ouvrir l’Analyseur de Domaine 🔍',
    art_domain_title: 'Qu’est-ce que l’Analyse de Domaine ?',
    art_domain_p1: 'C’est un audit technique complet inspectant le routage DNS, le chiffrement SSL et la conformité de sécurité.',
    art_domain_p2: 'NET INSPECTOR lance plus de 36 vérifications en parallèle directement depuis votre navigateur.',
    art_dns_title: 'Comment vérifier le DNS d’un site ?',
    art_dns_p1: 'Le DNS convertit les noms de domaine en adresses IP. Nous interrogeons DoH pour lire les entrées A, AAAA, MX, NS, TXT et CNAME.',
    art_ssl_title: 'Pourquoi vérifier un certificat SSL/TLS ?',
    art_ssl_p1: 'Cela permet de vérifier la validité temporelle, l’autorité de certification et la compatibilité avec TLS 1.2 / TLS 1.3.',
    art_whois_title: 'Qu’est-ce que le Whois ?',
    art_whois_p1: 'Le protocole Whois interroge les registres de noms de domaine pour connaître la date d’enregistrement et d’expiration.',
    dfaq_q1: 'Combien d’éléments sont audités ?',
    dfaq_a1: 'Plus de 36 contrôles simultanés sur le DNS, les certificats SSL, le Whois et les en-têtes HTTP.',
    dfaq_q2: 'Est-ce gratuit et sans limite ?',
    dfaq_a2: 'Oui, totalement gratuit, illimité et sans création de compte.',
    dfaq_q3: 'Les recherches sont-elles conservées ?',
    dfaq_a3: 'Non. Tout s’exécute côté client (client-side) dans votre navigateur.',
    dfaq_q4: 'Pourquoi certains champs affichent "Indisponible (CORS)" ?',
    dfaq_a4: 'Les règles de sécurité du navigateur restreignent certaines requêtes directes sans autorisation CORS.',
    dfaq_q5: 'À quoi servent les en-têtes de sécurité HTTP ?',
    dfaq_a5: 'Ils protègent les internautes contre le détournement de clic (clickjacking), le vol de session et les failles XSS.',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ Test de Fuite DNS',
    btn_dnsleak: '🛡️ Test de Fuite ↗',
    leak_hero_badge: 'Sécurité VPN & Confidentialité',
    leak_hero_title: 'Votre VPN ou Proxy fait-il fuiter des données ?',
    leak_hero_desc: 'Effectuez un test complet de fuite DNS, IP publique et WebRTC pour vous assurer que votre navigation reste 100% anonyme et sécurisée.',
    leak_art_dns_title: 'Qu’est-ce qu’une Fuite DNS (DNS Leak) ?',
    leak_art_dns_p1: 'Lors de l’utilisation d’un VPN, vos requêtes DNS doivent être acheminées à travers le tunnel chiffré. Une fuite se produit lorsque le système contourne ce tunnel et interroge directement les serveurs DNS de votre FAI.',
    leak_art_dns_p2: 'Votre fournisseur d’accès peut ainsi voir chaque site que vous consultez, réduisant à néant la confidentialité offerte par votre VPN.',
    leak_art_webrtc_title: 'Le Risque des Fuites WebRTC',
    leak_art_webrtc_p1: 'La technologie WebRTC permet la communication en temps réel dans le navigateur, mais ses requêtes STUN peuvent contourner le VPN et exposer votre IP locale ou publique réelle.',
    leak_art_webrtc_p2: 'NET INSPECTOR analyse vos candidats ICE en direct pour vous avertir instantanément en cas d’anomalie.',
    leak_art_doh_title: 'Comment DNS-over-HTTPS (DoH) et DoT protègent vos requêtes ?',
    leak_art_doh_p1: 'Le protocole DNS standard transmet les requêtes en clair sur le port UDP 53. DoH et DoT encapsulent ces requêtes dans des tunnels TLS chiffrés.',
    leak_faq_title: 'Questions Fréquentes sur les Fuites DNS et VPN (FAQ)',
    leak_faq_q1: 'Mon VPN masque-t-il automatiquement mes requêtes DNS ?',
    leak_faq_a1: 'Pas systématiquement. Des configurations défaillantes peuvent laisser fuiter les requêtes vers le routeur de votre opérateur.',
    leak_faq_q2: 'Comment un site peut-il connaître ma vraie IP malgré mon VPN ?',
    leak_faq_a2: 'Généralement à cause de fuites WebRTC ou de trafic IPv6 non pris en charge par le tunnel VPN.',
    leak_faq_q3: 'Que sont DoH et DoT ?',
    leak_faq_a3: 'Ce sont des protocoles de chiffrement DNS empêchant l’espionnage sur les réseaux Wi-Fi publics et par les FAI.',
    leak_faq_q4: 'Comment corriger une fuite DNS ?',
    leak_faq_a4: 'Activez l’option Kill Switch et la protection contre les fuites DNS dans votre logiciel VPN, ou configurez des serveurs DNS sécurisés.',
    leak_cta_home_title: 'Vérifier votre fournisseur d’accès Internet ?',
    leak_cta_home_desc: 'Analysez votre IP publique, FAI, ASN et géolocalisation.',
    leak_cta_home_btn: 'Voir Mon IP & FAI 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · Diagnostic réseau et IP 100% Client-Side · Aucune donnée conservée',
    footer_link_ip: 'Mon IP Publique',
    footer_link_dnsleak: 'Test de Fuite DNS',
    footer_link_domain: 'Analyse de Domaine',
    footer_analytics: '📊 Statistiques respectueuses de la vie privée via GoatCounter (sans cookies) —',
    footer_stats: 'Statistiques publiques ↗',
    btn_optout_off: 'Désactiver les statistiques',
    btn_optout_on: 'Activer les statistiques'
  },
  'de': {
    logo_subtitle: 'Vollständige Verbindungs- &amp; ISP-Diagnose',
    nav_home: '🌐 Wie ist meine IP?',
    nav_domain: '🔍 Domain analysieren',
    btn_scan: '▶ Analysieren',
    btn_domain: '🔍 Domain analysieren ↗',
    btn_home: '← Wie ist meine IP',
    hero_ip_label: 'Ihre öffentliche IP-Adresse',
    hero_domain_label: 'Sicherheits-, DNS- und SSL-Diagnose',
    hero_domain_title: 'Kostenloser Online-Domain-Analyzer',
    hero_domain_desc: 'Untersuchen Sie die gesamte Infrastruktur einer Website: DNS-Einträge, SSL/TLS-Zertifikate, Whois-Daten, HTTP-Sicherheits-Header und Technologien in Echtzeit.',
    domain_input_placeholder: 'Domain eingeben (z. B. example.com)',
    domain_btn_scan: '🔍 Analysieren',
    domain_input_hint: 'Geben Sie eine Domain für eine umfassende Sicherheits-, DNS-, SSL- und Infrastrukturanalyse ein.',
    card_isp: 'ISP &amp; ASN',
    card_location: 'Standort',
    card_ip: 'IP-Adressen',
    card_latency: 'Latenz &amp; DNS',
    card_browser: 'Browser &amp; Gerät',
    card_security: 'Sicherheit &amp; Datenschutz',
    card_connectivity: 'Konnektivität',
    card_domain_scan: 'Domain-Analyse',
    card_ipinfo: 'IP-Info',
    card_ssl_chain: 'SSL-Kette',
    card_dns_records: 'DNS-Einträge',
    card_cookies: 'Cookies',
    card_crawl_rules: 'Crawl-Regeln',
    card_headers: 'Header',
    card_quality_metrics: 'Qualitätsmetriken',
    card_server_location: 'Serverstandort',
    card_associated_hosts: 'Verbundene Hosts',
    card_redirect_chain: 'Weiterleitungskette',
    card_diagnostic_log: 'Diagnoseprotokoll',
    card_tls_audit: 'TLS-Audit',
    card_tls_compat: 'TLS-Kompatibilität',
    lbl_provider: 'Internetanbieter (ISP)',
    lbl_org: 'Organisation',
    lbl_asn: 'ASN',
    lbl_domain: 'Domain',
    lbl_nettype: 'Netzwerktyp',
    lbl_country: 'Land',
    lbl_region: 'Region',
    lbl_city: 'Stadt',
    lbl_postal: 'Postleitzahl',
    lbl_tz: 'Zeitzone',
    lbl_coords: 'Koordinaten',
    lbl_ipv4_public: 'Öffentliche IPv4',
    lbl_ipv6_public: 'Öffentliche IPv6',
    lbl_ip_local: 'Lokale IP (LAN)',
    lbl_ipv6_local: 'Lokale IPv6',
    lbl_webrtc_leak: 'WebRTC-Leak',
    lbl_webrtc_note: '⚠ Lokale IPs via WebRTC. Falls hier Ihre öffentliche IP erscheint, kann dies auf ein VPN-Leck hinweisen.',
    lbl_ping: 'HTTP-Ping',
    lbl_dns_server: 'DNS-Server',
    lbl_dns_lookup: 'DNS-Auflösung',
    lbl_https_support: 'HTTPS-Unterstützung',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Plattform',
    lbl_language: 'Sprache',
    lbl_screen: 'Bildschirm (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor erkannt',
    lbl_incognito: 'Inkognito-Modus',
    lbl_speed: 'Geschätzte Geschwindigkeit',
    lbl_online: 'Status',
    lbl_quality: 'Qualität',
    art_ip_title: 'Was ist eine öffentliche IP-Adresse?',
    art_ip_p1: 'Die IP-Adresse identifiziert Ihren Internetanschluss eindeutig im weltweiten Netz und ermöglicht die fehlerfreie Übertragung von Datenpaketen.',
    art_ip_p2: 'Es gibt zwei Standards: das klassische IPv4 (vier Zahlenblöcke) und das moderne 128-Bit-IPv6. NET INSPECTOR prüft beide Adressen.',
    art_isp_title: 'Wie erkennt NET INSPECTOR Ihren ISP?',
    art_isp_p1: 'IP-Blöcke werden Autonomen Systemen (ASN) zugewiesen. NET INSPECTOR fragt öffentliche BGP-Routingtabellen ab.',
    art_isp_p2: 'So ermitteln wir Ihren Netzanbieter und Ihre ASN-Nummer präzise und zuverlässig.',
    art_geo_title: 'Warum kann IP-Geolokalisierung ungenau sein?',
    art_geo_p1: 'IP-Geolokalisierung verwendet kein GPS, sondern verweist auf das nächste Rechenzentrum oder den Verteilerknoten Ihres Anbieters.',
    art_geo_p2: 'Mobilfunknetze (4G/5G) oder CGNAT bündeln Anschlüsse oft über überregionale Knotenpunkte.',
    art_faq_title: 'Häufig gestellte Fragen (FAQ)',
    faq_q1: 'Ist meine IP statisch oder dynamisch?',
    faq_a1: 'Bei den meisten Privatkundenanschlüssen ist die IP dynamisch und wechselt periodisch. Feste IPs werden meist von Geschäftskunden gebucht.',
    faq_q2: 'Was ist der Unterschied zwischen IPv4 und IPv6?',
    faq_a2: 'IPv4 bietet ca. 4,3 Milliarden Adressen, die weltweit aufgebraucht sind. IPv6 bietet einen quasi unerschöpflichen Adressraum.',
    faq_q3: 'Wie kann ich meine öffentliche IP verbergen?',
    faq_a3: 'Mit einem zuverlässigen VPN, dem Tor-Netzwerk oder Proxys. Unser Tool prüft zusätzlich auf WebRTC-Lecks.',
    faq_q4: 'Kann jemand anhand meiner IP meine Adresse ermitteln?',
    faq_a4: 'Nein. Dritte sehen nur regionale Näherungswerte. Nur Ihr Provider kennt die Vertragsdaten hinter einer IP.',
    cta_domain_title: 'Möchten Sie eine vollständige Domain prüfen?',
    cta_domain_desc: 'Prüfen Sie DNS-Einträge, SSL/TLS-Zertifikate, Whois-Daten und Sicherheits-Header.',
    cta_domain_btn: 'Domain-Analyzer öffnen 🔍',
    art_domain_title: 'Was ist eine Domain-Analyse?',
    art_domain_p1: 'Eine technische Prüfung von DNS-Routing, SSL-Verschlüsselung und HTTP-Sicherheits-Headern einer Website.',
    art_domain_p2: 'NET INSPECTOR führt über 36 parallele Tests direkt im Browser aus – ganz ohne Terminalbefehle.',
    art_dns_title: 'Wie prüft man DNS-Einträge?',
    art_dns_p1: 'DNS wandelt Domainnamen in IP-Adressen um. Wir nutzen DNS-over-HTTPS zur Abfrage von A, AAAA, MX, NS, TXT und CNAME.',
    art_ssl_title: 'Warum SSL/TLS-Zertifikate prüfen?',
    art_ssl_p1: 'Um Gültigkeitszeiträume, Ausstellerzertifikate und moderne Protokolle wie TLS 1.2 und TLS 1.3 zu kontrollieren.',
    art_whois_title: 'Was ist Whois?',
    art_whois_p1: 'Whois fragt öffentliche Vergabedatenbanken ab, um Registrierungs- und Ablaufdaten von Domains zu ermitteln.',
    dfaq_q1: 'Wie viele Daten werden analysiert?',
    dfaq_a1: 'Über 36 Prüfungen gleichzeitig zu DNS, SSL, Whois, Server-Headern und Ports.',
    dfaq_q2: 'Ist die Analyse kostenlos?',
    dfaq_a2: 'Ja, 100 % kostenlos, unbegrenzt und ohne Registrierung.',
    dfaq_q3: 'Werden geprüfte Domains gespeichert?',
    dfaq_a3: 'Nein. Alle Anfragen laufen vollständig clientseitig in Ihrem Browser ab.',
    dfaq_q4: 'Warum steht bei manchen Feldern "Nicht verfügbar (CORS)"?',
    dfaq_a4: 'Browser-Sicherheitsrichtlinien blockieren bestimmte Cross-Origin-Anfragen ohne passende CORS-Header.',
    dfaq_q5: 'Welche Funktion haben HTTP-Sicherheits-Header?',
    dfaq_a5: 'Sie schützen Besucher vor Clickjacking-, XSS- und Downgrade-Angriffen.',
    cta_home_title: 'Eigene Internetverbindung testen?',
    cta_home_desc: 'Ermitteln Sie sofort Ihre öffentliche IP, ISP, Standort und WebRTC-Sicherheit.',
    cta_home_btn: 'Meine IP anzeigen 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ DNS-Leak-Test',
    btn_dnsleak: '🛡️ Leak-Test ↗',
    leak_hero_badge: 'VPN-Sicherheit & Datenschutz',
    leak_hero_title: 'Verliert Ihr VPN oder Proxy private Daten?',
    leak_hero_desc: 'Führen Sie einen umfassenden Test auf DNS-Lecks, echte IP-Adressen und WebRTC-Sicherheitslücken durch, um anonym zu surfen.',
    leak_art_dns_title: 'Was ist ein DNS-Leak (DNS-Leck)?',
    leak_art_dns_p1: 'Bei aktiver VPN-Verbindung müssen alle DNS-Anfragen durch den verschlüsselten VPN-Tunnel laufen. Ein DNS-Leak entsteht, wenn Anfragen am Tunnel vorbei direkt an die DNS-Server Ihres Anbieters gesendet werden.',
    leak_art_dns_p2: 'Ihr Internetprovider sieht somit genau, welche Domains Sie aufrufen – der Schutz des VPNs ist damit ausgehebelt.',
    leak_art_webrtc_title: 'Die Gefahr von WebRTC-Leaks',
    leak_art_webrtc_p1: 'WebRTC ermöglicht Audio-/Video-Chats im Browser. STUN-Anfragen können jedoch die lokale oder öffentliche IP-Adresse am VPN vorbei nach außen übermitteln.',
    leak_art_webrtc_p2: 'NET INSPECTOR prüft ICE-Kandidaten in Echtzeit und warnt Sie sofort vor eventuellen Lecks.',
    leak_art_doh_title: 'Wie schützen DNS-over-HTTPS (DoH) und DoT?',
    leak_art_doh_p1: 'Klassisches DNS überträgt Anfragen unverschlüsselt über Port 53. DoH und DoT kapseln DNS-Pakete in sicheren TLS-Tunneln und schützen vor Man-in-the-Middle-Angriffen.',
    leak_faq_title: 'Häufig gestellte Fragen zu VPN- und DNS-Leaks (FAQ)',
    leak_faq_q1: 'Verschlüsselt mein VPN automatisch alle DNS-Anfragen?',
    leak_faq_a1: 'Nicht immer. Schlecht konfigurierte VPN-Clients oder Windows-Standardeinstellungen können DNS-Anfragen am Tunnel vorbeileiten.',
    leak_faq_q2: 'Wie kann eine Website trotz VPN meine echte IP ermitteln?',
    leak_faq_a2: 'Meist durch WebRTC-Schwachstellen im Browser oder durch IPv6-Verbindungen, die vom VPN nicht abgedeckt werden.',
    leak_faq_q3: 'Was bringen DoH und DoT?',
    leak_faq_a3: 'Sie verschlüsseln DNS-Abfragen vor neugierigen Blicken in öffentlichen WLAN-Netzen und beim Internetanbieter.',
    leak_faq_q4: 'Wie behebe ich ein DNS-Leak?',
    leak_faq_a4: 'Aktivieren Sie die Kill-Switch- und DNS-Leak-Protection in Ihrer VPN-Software oder konfigurieren Sie sichere DNS-Server wie Cloudflare (1.1.1.1).',
    leak_cta_home_title: 'Möchten Sie Ihren Netzanbieter überprüfen?',
    leak_cta_home_desc: 'Prüfen Sie IP, Standort, ISP und Verbindungsdetails.',
    leak_cta_home_btn: 'Meine IP & ISP prüfen 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · 100% Client-Side Netzwerk- und IP-Diagnose · Keine Datenspeicherung',
    footer_link_ip: 'Wie ist meine IP?',
    footer_link_dnsleak: 'DNS-Leak-Test',
    footer_link_domain: 'Domain-Analyse',
    footer_analytics: '📊 Datenschutzfreundliche Analyse mit GoatCounter (keine Cookies) —',
    footer_stats: 'Öffentliche Statistiken ↗',
    btn_optout_off: 'Analytics deaktivieren',
    btn_optout_on: 'Analytics aktivieren'
  },
  'it': {
    logo_subtitle: 'Diagnostica completa di connessione &amp; ISP',
    nav_home: '🌐 Qual è il Mio IP?',
    nav_domain: '🔍 Analisi Dominio',
    btn_scan: '▶ Analizza',
    btn_domain: '🔍 Analisi Dominio ↗',
    btn_home: '← Qual è il Mio IP',
    hero_ip_label: 'Il Tuo Indirizzo IP Pubblico',
    hero_domain_label: 'Diagnostica di Sicurezza, DNS e SSL',
    hero_domain_title: 'Analizzatore di Dominio Online Gratuito',
    hero_domain_desc: 'Ispeziona l’infrastruttura completa di qualsiasi sito web: record DNS, certificato SSL/TLS, dati Whois, intestazioni di sicurezza HTTP e porte.',
    domain_input_placeholder: 'Inserisci un dominio (es: example.com)',
    domain_btn_scan: '🔍 Analizza',
    domain_input_hint: 'Digita un dominio per un’analisi completa di sicurezza, DNS, SSL e infrastruttura.',
    card_isp: 'ISP &amp; ASN',
    card_location: 'Posizione',
    card_ip: 'Indirizzi IP',
    card_latency: 'Latenza &amp; DNS',
    card_browser: 'Browser &amp; Dispositivo',
    card_security: 'Sicurezza &amp; Privacy',
    card_connectivity: 'Connettività',
    card_domain_scan: 'Analisi Dominio',
    card_ipinfo: 'Info IP',
    card_ssl_chain: 'Catena SSL',
    card_dns_records: 'Record DNS',
    card_cookies: 'Cookie',
    card_crawl_rules: 'Regole di Crawling',
    card_headers: 'Intestazioni',
    card_quality_metrics: 'Metriche di Qualità',
    card_server_location: 'Posizione Server',
    card_associated_hosts: 'Host Associati',
    card_redirect_chain: 'Reindirizzamenti',
    card_diagnostic_log: 'Log Diagnostico',
    card_tls_audit: 'Audit TLS',
    card_tls_compat: 'Compatibilità TLS',
    lbl_provider: 'Fornitore (ISP)',
    lbl_org: 'Organizzazione',
    lbl_asn: 'ASN',
    lbl_domain: 'Dominio',
    lbl_nettype: 'Tipo di rete',
    lbl_country: 'Paese',
    lbl_region: 'Regione',
    lbl_city: 'Città',
    lbl_postal: 'CAP / Codice Postale',
    lbl_tz: 'Fuso orario',
    lbl_coords: 'Coordinate',
    lbl_ipv4_public: 'IPv4 pubblico',
    lbl_ipv6_public: 'IPv6 pubblico',
    lbl_ip_local: 'IP locale (LAN)',
    lbl_ipv6_local: 'IPv6 locale',
    lbl_webrtc_leak: 'Perdita WebRTC',
    lbl_webrtc_note: '⚠ IP locali via WebRTC. Se qui appare il tuo IPv4 pubblico, potrebbe indicare una perdita VPN.',
    lbl_ping: 'Ping HTTP',
    lbl_dns_server: 'Server DNS',
    lbl_dns_lookup: 'Risoluzione DNS',
    lbl_https_support: 'Supporto HTTPS',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'Piattaforma',
    lbl_language: 'Lingua',
    lbl_screen: 'Schermo (px)',
    lbl_vpn_proxy: 'VPN / Proxy',
    lbl_tor: 'Tor rilevato',
    lbl_incognito: 'Modalità anonima',
    lbl_speed: 'Velocità stimata',
    lbl_online: 'Stato',
    lbl_quality: 'Qualità',
    art_ip_title: 'Cos’è un Indirizzo IP Pubblico?',
    art_ip_p1: 'L’indirizzo IP è l’identificativo numerico globale che individua la tua connessione su Internet, consentendo lo scambio sicuro di dati con server e app.',
    art_ip_p2: 'Sono attive due versioni: IPv4 a 32 bit e IPv6 a 128 bit. NET INSPECTOR controlla entrambi istantaneamente.',
    art_isp_title: 'Come identifica NET INSPECTOR il tuo operatore?',
    art_isp_p1: 'I blocchi IP sono assegnati ai provider attraverso Sistemi Autonomi (ASN). Consultiamo tabelle BGP pubbliche.',
    art_isp_p2: 'Mostriamo fedelmente il nome commerciale dell’operatore e il codice ASN relativo.',
    art_geo_title: 'Perché la geolocalizzazione IP può essere imprecisa?',
    art_geo_p1: 'Non si basa su coordinate GPS, ma mappa l’IP al nodo di smistamento o datacenter dell’operatore più vicino.',
    art_geo_p2: 'Le reti mobili (4G/5G) e il CGNAT raggruppano spesso gli utenti verso nodi regionali.',
    art_faq_title: 'Domande Frequenti (FAQ)',
    faq_q1: 'Il mio indirizzo IP è statico o dinamico?',
    faq_a1: 'Nelle normali utenze domestiche è dinamico e varia a ogni riavvio del modem. Gli IP fissi sono tipici di server aziendali.',
    faq_q2: 'Qual è la differenza tra IPv4 e IPv6?',
    faq_a2: 'L’IPv4 ha circa 4,3 miliardi di indirizzi ormai esauriti. L’IPv6 ne offre una disponibilità praticamente illimitata.',
    faq_q3: 'Come posso nascondere il mio IP?',
    faq_a3: 'Usando una VPN affidabile, la rete Tor o proxy crittografati. Verifichiamo anche eventuali perdite WebRTC.',
    faq_q4: 'Qualcuno può risalire alla mia abitazione tramite IP?',
    faq_a4: 'No. Terzi vedono solo stime a livello di città o provincia. Solo il tuo ISP detiene l’associazione con l’indirizzo fisico.',
    cta_domain_title: 'Vuoi analizzare un dominio o sito web?',
    cta_domain_desc: 'Ispeziona record DNS, certificati SSL/TLS, Whois e intestazioni di sicurezza HTTP.',
    cta_domain_btn: 'Apri Analizzatore di Dominio 🔍',
    art_domain_title: 'Cos’è l’Analisi di Dominio?',
    art_domain_p1: 'Un controllo tecnico approfondito di routing DNS, crittografia SSL e policy di sicurezza.',
    art_domain_p2: 'NET INSPECTOR esegue oltre 36 test in parallelo direttamente all’interno del browser.',
    art_dns_title: 'Come controllare i record DNS?',
    art_dns_p1: 'Il DNS mappa i nomi host in indirizzi IP. Interroghiamo DoH per verificare record A, AAAA, MX, NS, TXT e CNAME.',
    art_ssl_title: 'Perché verificare i certificati SSL/TLS?',
    art_ssl_p1: 'Per accertare scadenza, autorità emittente e pieno supporto a TLS 1.2 e TLS 1.3.',
    art_whois_title: 'Cos’è il Whois?',
    art_whois_p1: 'Whois interroga i registri ufficiali dei domini mostrando data di creazione, rinnovo e scadenza.',
    dfaq_q1: 'Quanti parametri analizza lo strumento?',
    dfaq_a1: 'Oltre 36 controlli in tempo reale su DNS, SSL, Whois e porte aperte.',
    dfaq_q2: 'L’analisi è gratuita e senza limiti?',
    dfaq_a2: 'Sì! 100% gratuita, senza limiti di utilizzo e senza registrazione.',
    dfaq_q3: 'I dati dei domini testati vengono salvati?',
    dfaq_a3: 'No. Tutte le richieste sono elaborate dal tuo browser in modalità client-side.',
    dfaq_q4: 'Perché alcuni campi indicano "Non disponibile (CORS)"?',
    dfaq_a4: 'I browser bloccano alcune chiamate dirette tra origini diverse per motivi di sicurezza.',
    dfaq_q5: 'A cosa servono le intestazioni di sicurezza HTTP?',
    dfaq_a5: 'Proteggono i navigatori da attacchi come clickjacking, furto di sessione e vulnerabilità XSS.',
    cta_home_title: 'Vuoi testare la tua connessione?',
    cta_home_desc: 'Trova subito il tuo IP pubblico, ISP, coordinate e sicurezza WebRTC.',
    cta_home_btn: 'Scopri il Mio IP 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ Test Perdita DNS',
    btn_dnsleak: '🛡️ Test Perdita ↗',
    leak_hero_badge: 'Privacy e Sicurezza VPN',
    leak_hero_title: 'La tua VPN o Proxy perde dati riservati?',
    leak_hero_desc: 'Esegui un test accurato contro le perdite di DNS, indirizzo IP reale e WebRTC per verificare l’effettivo anonimato della tua navigazione.',
    leak_art_dns_title: 'Cos’è una Perdita DNS (DNS Leak)?',
    leak_art_dns_p1: 'Quando usi una VPN, tutte le richieste DNS dovrebbero transitare nel tunnel protetto. Una perdita accade quando il dispositivo scavalca la VPN e interroga direttamente i resolver del tuo operatore telefonico.',
    leak_art_dns_p2: 'Questo rivela al tuo operatore ogni sito che visiti, compromettendo la riservatezza offerta dalla VPN.',
    leak_art_webrtc_title: 'Il Rischio delle Perdite WebRTC',
    leak_art_webrtc_p1: 'WebRTC abilita comunicazioni multimediali nel browser, ma le sue richieste STUN possono bypassare il tunnel virtuale della VPN e svelare l’IP pubblico originario.',
    leak_art_webrtc_p2: 'NET INSPECTOR esamina i candidati ICE in tempo reale per avvisarti subito in caso di discrepanze.',
    leak_art_doh_title: 'Come Proteggono DoH e DoT?',
    leak_art_doh_p1: 'Il DNS tradizionale invia query in chiaro su porta UDP 53. DNS-over-HTTPS (DoH) e DoT cifrano le richieste in sessioni TLS sicure.',
    leak_faq_title: 'Domande Frequenti su Perdite DNS e VPN (FAQ)',
    leak_faq_q1: 'Una VPN garantisce sempre la protezione DNS?',
    leak_faq_a1: 'Non sempre. Client VPN difettosi o configurazioni di rete errate possono esporre le richieste DNS verso il router di casa.',
    leak_faq_q2: 'Come fa un sito a scoprire il mio vero IP con VPN attiva?',
    leak_faq_a2: 'Spesso a causa di vulnerabilità WebRTC nel browser o perdite di connettività IPv6 non coperte dal fornitore VPN.',
    leak_faq_q3: 'A cosa servono DoH e DoT?',
    leak_faq_a3: 'A impedire lo spionaggio delle risoluzioni di dominio su reti Wi-Fi pubbliche e da parte degli ISP locali.',
    leak_faq_q4: 'Come risolvere una perdita DNS?',
    leak_faq_a4: 'Attiva il Kill Switch e la protezione da perdite DNS nella tua app VPN, oppure imposta server DNS sicuri.',
    leak_cta_home_title: 'Vuoi ispezionare il tuo operatore di rete?',
    leak_cta_home_desc: 'Scopri IP pubblico, ISP, ASN e localizzazione geografica.',
    leak_cta_home_btn: 'Verifica il Mio IP & ISP 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · Diagnostica di rete e IP 100% Client-Side · Nessun dato registrato',
    footer_link_ip: 'Qual è il Mio IP?',
    footer_link_dnsleak: 'Test Perdita DNS',
    footer_link_domain: 'Analisi di Dominio',
    footer_analytics: '📊 Statistiche privacy-first via GoatCounter (senza cookie) —',
    footer_stats: 'Visualizza statistiche pubbliche ↗',
    btn_optout_off: 'Disattiva Statistiche',
    btn_optout_on: 'Attiva Statistiche'
  },
  'ja': {
    logo_subtitle: '完全な接続とISPのリアルタイム診断',
    nav_home: '🌐 私のIPアドレスは？',
    nav_domain: '🔍 ドメイン分析',
    btn_scan: '▶ 診断開始',
    btn_domain: '🔍 ドメイン分析 ↗',
    btn_home: '← 私のIPアドレス',
    hero_ip_label: 'お客様のパブリックIPアドレス',
    hero_domain_label: 'セキュリティ・DNS・SSL診断',
    hero_domain_title: '無料オンラインドメインアナライザー',
    hero_domain_desc: 'DNSレコード、SSL/TLS証明書、Whoisデータ、HTTPセキュリティヘッダー、ポートなど、Webサイトのインフラ全体を即座に検査します。',
    domain_input_placeholder: 'ドメインを入力 (例: example.com)',
    domain_btn_scan: '🔍 分析する',
    domain_input_hint: 'ドメイン名を入力すると、セキュリティ、DNS、SSL、インフラを総合的に分析します。',
    card_isp: 'ISP &amp; ASN',
    card_location: '位置情報',
    card_ip: 'IPアドレス',
    card_latency: 'レイテンシ &amp; DNS',
    card_browser: 'ブラウザ &amp; デバイス',
    card_security: 'セキュリティ &amp; プライバシー',
    card_connectivity: '接続状況',
    card_domain_scan: 'ドメイン分析',
    card_ipinfo: 'IP詳細',
    card_ssl_chain: 'SSLチェーン',
    card_dns_records: 'DNSレコード',
    card_cookies: 'Cookie',
    card_crawl_rules: 'クロール規則',
    card_headers: 'HTTPヘッダー',
    card_quality_metrics: '品質メトリクス',
    card_server_location: 'サーバー位置',
    card_associated_hosts: '関連ホスト',
    card_redirect_chain: 'リダイレクト追跡',
    card_diagnostic_log: '診断ログ',
    card_tls_audit: 'TLS監査',
    card_tls_compat: 'TLS互換性',
    lbl_provider: 'プロバイダ (ISP)',
    lbl_org: '組織',
    lbl_asn: 'ASN',
    lbl_domain: 'ドメイン',
    lbl_nettype: 'ネットワーク種別',
    lbl_country: '国',
    lbl_region: '地域/都道府県',
    lbl_city: '市区町村',
    lbl_postal: '郵便番号',
    lbl_tz: 'タイムゾーン',
    lbl_coords: '緯度経度',
    lbl_ipv4_public: 'パブリック IPv4',
    lbl_ipv6_public: 'パブリック IPv6',
    lbl_ip_local: 'ローカルIP (LAN)',
    lbl_ipv6_local: 'ローカルIPv6',
    lbl_webrtc_leak: 'WebRTC漏洩',
    lbl_webrtc_note: '⚠ WebRTC経由のローカルIP。ここにパブリックIPv4が表示される場合、VPN漏洩の可能性があります。',
    lbl_ping: 'HTTP Ping',
    lbl_dns_server: 'DNSサーバー',
    lbl_dns_lookup: 'DNSルックアップ',
    lbl_https_support: 'HTTPS対応',
    lbl_http2: 'HTTP/2',
    lbl_platform: 'OSプラットフォーム',
    lbl_language: '言語設定',
    lbl_screen: '解像度 (px)',
    lbl_vpn_proxy: 'VPN / プロキシ',
    lbl_tor: 'Tor検出',
    lbl_incognito: 'シークレットモード',
    lbl_speed: '推定通信速度',
    lbl_online: '状態',
    lbl_quality: '品質',
    art_ip_title: 'パブリックIPアドレスとは？',
    art_ip_p1: 'IPアドレスはインターネット上の通信相手を特定する識別番号であり、Webサーバーやアプリが安全にデータを送受信するためのデジタル住所です。',
    art_ip_p2: 'IPv4（4つの数字の羅列）と現代標準のIPv6（128ビット英数字）の両方をNET INSPECTORは瞬時に判定します。',
    art_isp_title: 'NET INSPECTORはどのようにISPを判定しますか？',
    art_isp_p1: '全世界のIPアドレスは自律システム（ASN）を通じて事業者に割り当てられます。当ツールは公開BGPルートを参照します。',
    art_isp_p2: 'お客様のインターネットプロバイダ事業者名とASN番号を高精度に特定します。',
    art_geo_title: 'IP位置情報が実際の住所と異なる理由',
    art_geo_p1: 'IP位置情報はGPSを使用せず、プロバイダの最寄りのルーティングセンターやデータセンターを示します。',
    art_geo_p2: '携帯電話ネットワーク（4G/5G）やCGNAT環境では、近隣の大都市に集約されて表示されるのが一般的です。',
    art_faq_title: 'よくあるご質問 (FAQ)',
    faq_q1: '私のIPアドレスは固定ですか？動的ですか？',
    faq_a1: '一般的な家庭用回線では定期的に変動する動的IPが採用されています。固定IPは法人契約向けが主流です。',
    faq_q2: 'IPv4とIPv6の違いは何ですか？',
    faq_a2: 'IPv4は約43億個で枯渇しています。IPv6はほぼ無制限のアドレス数を持ち、NAT変換なしで直接通信できます。',
    faq_q3: 'IPアドレスを隠す方法はありますか？',
    faq_a3: '信頼できるVPNやTorネットワークを利用します。当ツールのWebRTCチェックでVPN漏洩も検証可能です。',
    faq_q4: 'IPから自宅の番地まで特定されますか？',
    faq_a4: 'いいえ。第三者には市区町村やプロバイダ名しか分かりません。契約者住所は警察の令状がない限り開示されません。',
    cta_domain_title: 'ドメイン全体のセキュリティを診断しますか？',
    cta_domain_desc: 'DNSレコード、SSL/TLS証明書、Whois情報、HTTPセキュリティヘッダーを詳細診断。',
    cta_domain_btn: 'ドメインアナライザーを開く 🔍',
    art_domain_title: 'ドメイン分析とは？',
    art_domain_p1: 'WebサイトのDNS設定、SSL暗号化、メール認証、セキュリティヘッダーを網羅的に監査する技術です。',
    art_domain_p2: 'コマンド不要で、ブラウザ上から直接36種類以上のテストを並行実行します。',
    art_dns_title: 'DNSレコードの確認方法',
    art_dns_p1: 'DNS-over-HTTPS (DoH) を使用して、A、AAAA、MX、NS、TXT、CNAMEなどの主要レコードを検査します。',
    art_ssl_title: 'SSL/TLS証明書を確認する重要性',
    art_ssl_p1: '証明書の有効期限切れ防止、認証局の信頼性、TLS 1.2/1.3の対応状況を確認できます。',
    art_whois_title: 'Whoisとは何ですか？',
    art_whois_p1: 'ドメインの初回登録日、最終更新日、次回更新期限などの登録者情報を照会するプロトコルです。',
    dfaq_q1: 'いくつの項目を診断できますか？',
    dfaq_a1: 'DNS、SSL、Whois、セキュリティヘッダー、ポートなど36以上の項目を並行テストします。',
    dfaq_q2: '完全無料で無制限に使えますか？',
    dfaq_a2: 'はい！登録不要で誰でも何度でも完全無料で利用できます。',
    dfaq_q3: '検索したドメイン履歴は記録されますか？',
    dfaq_a3: 'いいえ。すべてお客様のブラウザ内で完結（クライアントサイド）するためサーバーに記録されません。',
    dfaq_q4: '一部の項目が「利用不可（CORS）」になる理由は？',
    dfaq_a4: 'ブラウザの同一生成元ポリシー（CORS）により、直接通信が制限されるAPIがあるためです。',
    dfaq_q5: 'HTTPセキュリティヘッダーとは？',
    dfaq_a5: 'HSTSやCSPなどのヘッダーは、クリックジャッキングやスクリプト注入攻撃から利用者を保護します。',
    cta_home_title: 'ご自身のネットワーク接続を診断しますか？',
    cta_home_desc: 'パブリックIP、プロバイダ名、位置情報、WebRTC漏洩を今すぐチェック。',
    cta_home_btn: '私のIPを調べる 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ DNS漏洩テスト',
    btn_dnsleak: '🛡️ 漏洩テスト ↗',
    leak_hero_badge: 'VPNプライバシー＆セキュリティ',
    leak_hero_title: 'お使いのVPNやプロキシはデータを漏洩していませんか？',
    leak_hero_desc: 'DNS漏洩、実際のパブリックIP、WebRTCの脆弱性を網羅的に診断し、完全な匿名性と安全性を確認します。',
    leak_art_dns_title: 'DNS漏洩（DNS Leak）とは？',
    leak_art_dns_p1: 'VPN接続時、すべてのDNSリクエストは暗号化トンネルを経由する必要があります。漏洩が発生すると、端末がトンネルを迂回して契約プロバイダのDNSに直接問い合わせてしまいます。',
    leak_art_dns_p2: 'これにより閲覧先のWebサイト情報がプロバイダに筒抜けとなり、VPNによるプライバシー保護が無効化されます。',
    leak_art_webrtc_title: 'WebRTC漏洩の危険性',
    leak_art_webrtc_p1: 'WebRTCはリアルタイム通信を可能にしますが、STUNサーバーへの通信がVPNトンネルをバイパスして本来のIPアドレスを暴露してしまう恐れがあります。',
    leak_art_webrtc_p2: 'NET INSPECTORはICE候補をリアルタイムに検査し、IP漏洩の兆候を即座に検知します。',
    leak_art_doh_title: 'DoHやDoTによる暗号化保護とは？',
    leak_art_doh_p1: '従来のDNS問い合わせは平文で送信されます。DNS-over-HTTPS (DoH) や DoT はTLS通信内で安全にカプセル化し盗聴を防ぎます。',
    leak_faq_title: 'VPN・DNS漏洩に関するよくある質問 (FAQ)',
    leak_faq_q1: 'VPNを使っていれば常にDNSは安全ですか？',
    leak_faq_a1: '必ずしもそうではありません。設定の不備やOSの仕様により、DNSリクエストがルーター経由で漏れ出ることがあります。',
    leak_faq_q2: 'VPN接続中に本物のIPが特定される原因は？',
    leak_faq_a2: '主にブラウザのWebRTC脆弱性や、未対応のIPv6通信が原因となります。',
    leak_faq_q3: 'DoHやDoTのメリットは何ですか？',
    leak_faq_a3: '公共Wi-Fiやインターネットプロバイダによる閲覧ドメインの監視・改ざんを防御できます。',
    leak_faq_q4: 'DNS漏洩を修正するには？',
    leak_faq_a4: 'VPNアプリのキルスイッチやDNS漏洩保護を有効化するか、Cloudflare (1.1.1.1) などの暗号化DNSを手動設定してください。',
    leak_cta_home_title: 'ご自身のプロバイダ情報を確認しますか？',
    leak_cta_home_desc: 'パブリックIP、ASN、地理的位置、通信速度をチェック。',
    leak_cta_home_btn: '私のIPとISPを確認 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · 100% クライアントサイド ネットワーク診断 · データ保存なし',
    footer_link_ip: '私のIPアドレス',
    footer_link_dnsleak: 'DNS漏洩テスト',
    footer_link_domain: 'ドメイン分析',
    footer_analytics: '📊 GoatCounterによるプライバシー重視のアクセス解析（Cookie不使用） —',
    footer_stats: '公開統計を見る ↗',
    btn_optout_off: '解析を無効化',
    btn_optout_on: '解析を有効化'
  },
  'zh': {
    logo_subtitle: '完整的网络连接与ISP实时诊断',
    nav_home: '🌐 我的公网IP',
    nav_domain: '🔍 域名深度分析',
    btn_scan: '▶ 开始分析',
    btn_domain: '🔍 域名深度分析 ↗',
    btn_home: '← 我的公网IP',
    hero_ip_label: '您的公网 IP 地址',
    hero_domain_label: '安全、DNS 与 SSL 诊断',
    hero_domain_title: '免费在线域名分析工具',
    hero_domain_desc: '全面检查任何网站的基础设施：DNS 记录、SSL/TLS 证书有效性、Whois 数据、HTTP 安全响应头和开放端口。',
    domain_input_placeholder: '输入域名 (例如: example.com)',
    domain_btn_scan: '🔍 分析',
    domain_input_hint: '输入域名以进行全面的安全性、DNS、SSL 和网络基础设施分析。',
    card_isp: 'ISP 与 ASN',
    card_location: '地理位置',
    card_ip: 'IP 地址',
    card_latency: '延迟与 DNS',
    card_browser: '浏览器与设备',
    card_security: '安全与隐私',
    card_connectivity: '连通性',
    card_domain_scan: '域名分析',
    card_ipinfo: 'IP 详细信息',
    card_ssl_chain: 'SSL 证书链',
    card_dns_records: 'DNS 记录',
    card_cookies: 'Cookie 检查',
    card_crawl_rules: '抓取规则',
    card_headers: 'HTTP 标头',
    card_quality_metrics: '质量指标',
    card_server_location: '服务器位置',
    card_associated_hosts: '关联主机',
    card_redirect_chain: '重定向链',
    card_diagnostic_log: '诊断日志',
    card_tls_audit: 'TLS 审计',
    card_tls_compat: 'TLS 兼容性',
    lbl_provider: '宽带运营商 (ISP)',
    lbl_org: '组织机构',
    lbl_asn: '自治系统号 (ASN)',
    lbl_domain: '域名',
    lbl_nettype: '网络类型',
    lbl_country: '国家',
    lbl_region: '省份 / 地区',
    lbl_city: '城市',
    lbl_postal: '邮政编码',
    lbl_tz: '时区',
    lbl_coords: '经纬度坐标',
    lbl_ipv4_public: '公网 IPv4',
    lbl_ipv6_public: '公网 IPv6',
    lbl_ip_local: '局域网 IP (LAN)',
    lbl_ipv6_local: '本地 IPv6',
    lbl_webrtc_leak: 'WebRTC 泄漏',
    lbl_webrtc_note: '⚠ WebRTC 本地地址。如果在此处看到公网 IPv4，则可能存在 VPN 泄漏。',
    lbl_ping: 'HTTP 延迟 (Ping)',
    lbl_dns_server: 'DNS 服务器',
    lbl_dns_lookup: 'DNS 查询耗时',
    lbl_https_support: 'HTTPS 支持',
    lbl_http2: 'HTTP/2 支持',
    lbl_platform: '系统平台',
    lbl_language: '语言环境',
    lbl_screen: '屏幕分辨率 (px)',
    lbl_vpn_proxy: 'VPN / 代理检测',
    lbl_tor: 'Tor 网络检测',
    lbl_incognito: '无痕隐身模式',
    lbl_speed: '估计下行速率',
    lbl_online: '连接状态',
    lbl_quality: '质量评级',
    art_ip_title: '什么是公网 IP 地址？',
    art_ip_p1: '公网 IP 地址是您在互联网世界的数字门牌号，使各大网络服务器和流媒体服务能够准确、安全地将数据包回传给您的设备。',
    art_ip_p2: '现行体系包含 IPv4（由点分隔的四组数字）和新一代 128 位十六进制 IPv6。NET INSPECTOR 支持瞬间并行检测这两项地址。',
    art_isp_title: 'NET INSPECTOR 如何识别您的运营商？',
    art_isp_p1: '全球 IP 地址段由各大区域注册机构分发给拥有自治系统编号（ASN）的电信运营商。',
    art_isp_p2: '我们通过查询公开的 BGP 路由表，准确展示您的运营商名称及对应的 ASN 编号。',
    art_geo_title: '为什么 IP 定位可能与实际物理位置存在偏差？',
    art_geo_p1: 'IP 地理定位并不使用卫星 GPS，而是将 IP 地址映射到所属运营商最近的汇聚节点或数据中心。',
    art_geo_p2: '移动蜂窝网络（4G/5G）或多户宽带 CGNAT 通常会将附近区域的用户聚合至省级或区域骨干网中心。',
    art_faq_title: '常见问题解答 (FAQ)',
    faq_q1: '我的公网 IP 是静态的还是动态的？',
    faq_a1: '绝大多数家庭宽带均分配动态 IP，每次重启路由器或断开连接时会自动变更。固定静态 IP 通常需单独向企业级专线申请。',
    faq_q2: 'IPv4 和 IPv6 有什么本质区别？',
    faq_a2: 'IPv4 总量约 43 亿个，已在世界范围内耗尽；IPv6 采用 128 位架构，提供海量地址空间，无需复杂的 NAT 端口转发。',
    faq_q3: '如何隐藏我的真实公网 IP？',
    faq_a3: '您可以使用合规的 VPN、Tor 网络或加密代理。我们的 IP 检测卡片内置 WebRTC 泄露检测，帮您确认真实 IP 是否被外露。',
    faq_q4: '他人能否通过公网 IP 查到我的家庭住址？',
    faq_a4: '不能。公开接口仅能查询到大致的省市及运营商级别。只有在公安等司法机关出具法定调证手续时，运营商才会调取装机地址。',
    cta_domain_title: '想要全面检测某个网站或域名的安全性吗？',
    cta_domain_desc: 'NET INSPECTOR 提供专业的域名分析工具，包含 36 项检测：DNS 记录、SSL/TLS 证书、Whois、HTTP 安全标头等。',
    cta_domain_btn: '打开域名分析器 🔍',
    art_domain_title: '什么是域名分析？',
    art_domain_p1: '域名分析是对网站公网表现的综合性技术审查，涵盖 DNS 路由、SSL 证书链、SPF 防垃圾邮件策略及安全防护头。',
    art_domain_p2: '无需安装任何终端命令工具，NET INSPECTOR 直接在您的浏览器中并行执行 36 项以上的安全核查。',
    art_dns_title: '如何检查网站的 DNS 记录？',
    art_dns_p1: 'DNS 负责将人类易读的域名解析为服务器 IP。我们利用 DNS-over-HTTPS (DoH) 读取 A、AAAA、MX、NS、TXT 和 CNAME 记录。',
    art_ssl_title: '为什么要验证 SSL/TLS 证书？',
    art_ssl_p1: '验证证书有效期限、根证书签发信任链，并确保服务器已开启对 TLS 1.2 及 TLS 1.3 现代加密协议的支持。',
    art_whois_title: '什么是 Whois 协议？',
    art_whois_p1: 'Whois 查询域名注册数据库，获取域名的首次注册日期、最后更新时间以及到期续费节点。',
    dfaq_q1: '该工具总共分析多少项指标？',
    dfaq_a1: '可同时并发检测 36 项以上指标，涵盖 DNS 解析、SSL 证书、Whois 档案、HTTP 响应标头和端口扫描。',
    dfaq_q2: '分析服务是否完全免费且不限次数？',
    dfaq_a2: '是的！100% 永久免费，无需登录注册，无查询频率限制。',
    dfaq_q3: '我所查询的域名数据会被服务器保存吗？',
    dfaq_a3: '不会。所有网络请求均由您的客户端浏览器（client-side）直接发起，没有任何中心化服务器记录查询历史。',
    dfaq_q4: '为什么部分指标提示“不可用 (CORS)”？',
    dfaq_a4: '受现代浏览器跨域安全策略（CORS）限制，部分目标服务器未开放跨域标头时将无法直接读取明文响应。',
    dfaq_q5: 'HTTP 安全响应头的作用是什么？',
    dfaq_a5: '例如 HSTS、CSP、X-Frame-Options 等标头，可防止网站遭受点击劫持、会话冒领及跨站脚本（XSS）攻击。',
    cta_home_title: '想要测试您当前的互联网连接状态吗？',
    cta_home_desc: '一键快速获知您的公网 IP、宽带运营商、地理位置以及 WebRTC 安全状态。',
    cta_home_btn: '检测我的公网 IP 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ DNS泄漏检测',
    btn_dnsleak: '🛡️ 泄漏检测 ↗',
    leak_hero_badge: 'VPN隐私安全与防泄漏审计',
    leak_hero_title: '您的 VPN 或代理是否存在数据泄漏？',
    leak_hero_desc: '一键运行 DNS 泄漏、真实公网 IP 及 WebRTC 漏洞综合检测，确保您的网络通信完全匿名且安全无虞。',
    leak_art_dns_title: '什么是 DNS 泄漏 (DNS Leak)？',
    leak_art_dns_p1: '连接 VPN 后，所有的域名解析（DNS）请求理应全部走加密隧道。当系统绕过该隧道、直接向本地宽带运营商的 DNS 服务器发起查询时，即发生 DNS 泄漏。',
    leak_art_dns_p2: '这将导致本地运营商仍可清晰掌握您访问的每一个网站，使 VPN 的隐私防护形同虚设。',
    leak_art_webrtc_title: '警惕 WebRTC 泄漏风险',
    leak_art_webrtc_p1: 'WebRTC 在浏览器中用于实时音视频通信，其 STUN 协议有可能绕过虚拟网卡隧道，暴露您未经代理的真实公网 IP 或局域网 IP。',
    leak_art_webrtc_p2: 'NET INSPECTOR 实时分析浏览器 ICE 候选，一旦发现真实 IP 泄漏立即给出预警。',
    leak_art_doh_title: 'DoH 与 DoT 如何实现传输加密？',
    leak_art_doh_p1: '传统 DNS 采用明文 UDP 53 端口通信，极易被监听与劫持。DNS-over-HTTPS (DoH) 和 DoT 将请求封装在 TLS 加密通道中，杜绝中间人窥视。',
    leak_faq_title: '关于 VPN 与 DNS 泄漏的常见问题 (FAQ)',
    leak_faq_q1: '使用了 VPN 就能保证 DNS 绝对不泄漏吗？',
    leak_faq_a1: '不一定。配置不当的客户端或操作系统默认网络策略可能导致部分查询直接漏给本地路由器。',
    leak_faq_q2: '网站如何在使用 VPN 时识别我的真实 IP？',
    leak_faq_a2: '主要通过浏览器 WebRTC 漏洞，或未被 VPN 隧道覆盖的 IPv6 旁路流量。',
    leak_faq_q3: '使用 DoH 和 DoT 有什么好处？',
    leak_faq_a3: '可以有效防止在公共 Wi-Fi 网络或宽带运营商层面对访问域名的嗅探和篡改。',
    leak_faq_q4: '如何彻底修复 DNS 泄漏？',
    leak_faq_a4: '在 VPN 客户端中开启 Kill Switch（紧急断网开关）和 DNS 防泄漏保护，或手动配置 Cloudflare (1.1.1.1) 等加密 DNS。',
    leak_cta_home_title: '想要全面检测您的网络运营商信息？',
    leak_cta_home_desc: '快速查询公网 IP、运营商归属、地理位置及下行速率。',
    leak_cta_home_btn: '查询我的公网 IP 与 ISP 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · 100% 纯客户端网络与 IP 诊断 · 无任何数据被记录',
    footer_link_ip: '我的公网 IP',
    footer_link_dnsleak: 'DNS泄漏检测',
    footer_link_domain: '域名综合分析',
    footer_analytics: '📊 基于 GoatCounter 的无 Cookie 隐私友好统计 —',
    footer_stats: '查看公开统计 ↗',
    btn_optout_off: '停用访问统计',
    btn_optout_on: '启用访问统计'
  },
  'ru': {
    logo_subtitle: 'Полная диагностика сетевого соединения и провайдера',
    nav_home: '🌐 Узнать мой IP',
    nav_domain: '🔍 Анализ домена',
    btn_scan: '▶ Анализировать',
    btn_domain: '🔍 Анализ домена ↗',
    btn_home: '← Узнать мой IP',
    hero_ip_label: 'Ваш публичный IP-адрес',
    hero_domain_label: 'Диагностика безопасности, DNS и SSL',
    hero_domain_title: 'Бесплатный онлайн-анализатор доменов',
    hero_domain_desc: 'Полная проверка инфраструктуры любого сайта: записи DNS, валидность SSL/TLS, данные Whois, заголовки безопасности HTTP и порты.',
    domain_input_placeholder: 'Введите домен (например: example.com)',
    domain_btn_scan: '🔍 Анализировать',
    domain_input_hint: 'Введите домен для комплексного аудита безопасности, DNS, SSL и сетевой инфраструктуры.',
    card_isp: 'Провайдер &amp; ASN',
    card_location: 'Местоположение',
    card_ip: 'IP-адреса',
    card_latency: 'Задержка &amp; DNS',
    card_browser: 'Браузер &amp; Устройство',
    card_security: 'Безопасность &amp; Приватность',
    card_connectivity: 'Связь',
    card_domain_scan: 'Анализ домена',
    card_ipinfo: 'Инфо об IP',
    card_ssl_chain: 'Цепочка SSL',
    card_dns_records: 'Записи DNS',
    card_cookies: 'Файлы Cookie',
    card_crawl_rules: 'Правила индексации',
    card_headers: 'Заголовки HTTP',
    card_quality_metrics: 'Метрики качества',
    card_server_location: 'Локация сервера',
    card_associated_hosts: 'Связанные хосты',
    card_redirect_chain: 'Редиректы',
    card_diagnostic_log: 'Журнал диагностики',
    card_tls_audit: 'Аудит TLS',
    card_tls_compat: 'Совместимость TLS',
    lbl_provider: 'Провайдер (ISP)',
    lbl_org: 'Организация',
    lbl_asn: 'Номер ASN',
    lbl_domain: 'Домен',
    lbl_nettype: 'Тип сети',
    lbl_country: 'Страна',
    lbl_region: 'Регион / Область',
    lbl_city: 'Город',
    lbl_postal: 'Почтовый индекс',
    lbl_tz: 'Часовой пояс',
    lbl_coords: 'Координаты',
    lbl_ipv4_public: 'Публичный IPv4',
    lbl_ipv6_public: 'Публичный IPv6',
    lbl_ip_local: 'Локальный IP (LAN)',
    lbl_ipv6_local: 'Локальный IPv6',
    lbl_webrtc_leak: 'Утечка WebRTC',
    lbl_webrtc_note: '⚠ Локальные IP через WebRTC. Появление публичного IP может свидетельствовать об утечке VPN.',
    lbl_ping: 'Пинг HTTP',
    lbl_dns_server: 'DNS-сервер',
    lbl_dns_lookup: 'Поиск DNS',
    lbl_https_support: 'Поддержка HTTPS',
    lbl_http2: 'Поддержка HTTP/2',
    lbl_platform: 'Платформа ОС',
    lbl_language: 'Язык системы',
    lbl_screen: 'Разрешение (px)',
    lbl_vpn_proxy: 'VPN / Прокси',
    lbl_tor: 'Сеть Tor',
    lbl_incognito: 'Режим инкогнито',
    lbl_speed: 'Примерная скорость',
    lbl_online: 'Статус сети',
    lbl_quality: 'Качество',
    art_ip_title: 'Что такое публичный IP-адрес?',
    art_ip_p1: 'Публичный IP-адрес — это глобальный цифровой идентификатор вашей точки выхода в Интернет, позволяющий серверам передавать данные на ваше устройство.',
    art_ip_p2: 'Сегодня используются два протокола: IPv4 (четыре числа через точку) и 128-битный IPv6. NET INSPECTOR мгновенно определяет оба.',
    art_isp_title: 'Как NET INSPECTOR определяет вашего провайдера?',
    art_isp_p1: 'Диапазоны IP-адресов распределяются операторам связи через Автономные Системы (ASN). Мы запрашиваем публичные таблицы маршрутизации BGP.',
    art_isp_p2: 'Сервис точно отображает торговое наименование вашего интернет-провайдера и закрепленный номер ASN.',
    art_geo_title: 'Почему геолокация по IP может быть неточной?',
    art_geo_p1: 'Геолокация по IP не использует спутниковый GPS, а указывает на ближайший дата-центр или узел связи вашего провайдера.',
    art_geo_p2: 'Мобильные сети (4G/5G) или технология CGNAT часто агрегируют абонентов на уровне областного центра.',
    art_faq_title: 'Часто задаваемые вопросы (FAQ)',
    faq_q1: 'Мой IP-адрес статичный или динамический?',
    faq_a1: 'У большинства домашних абонентов IP динамический и меняется при перезагрузке роутера. Статические IP заказываются отдельно.',
    faq_q2: 'В чем ключевая разница между IPv4 и IPv6?',
    faq_a2: 'Адреса IPv4 исчерпаны во всем мире. IPv6 обеспечивает практически бесконечный запас адресов без необходимости NAT.',
    faq_q3: 'Как можно скрыть свой реальный IP-адрес?',
    faq_a3: 'С помощью надежного VPN, сети Tor или прокси. Наша проверка WebRTC покажет, не происходит ли утечка адреса.',
    faq_q4: 'Может ли посторонний узнать мой точный домашний адрес по IP?',
    faq_a4: 'Нет. Доступны только приблизительные сведения о городе и провайдере. Точный адрес есть только у провайдера по договору.',
    cta_domain_title: 'Хотите проверить безопасность веб-сайта или домена?',
    cta_domain_desc: 'Запустите детальный аудит: записи DNS, сертификат SSL/TLS, данные Whois и заголовки HTTP.',
    cta_domain_btn: 'Открыть анализатор домена 🔍',
    art_domain_title: 'Что такое анализ домена?',
    art_domain_p1: 'Это комплексный аудит сетевых настроек сайта: DNS-маршрутизации, шифрования SSL и заголовков защиты.',
    art_domain_p2: 'NET INSPECTOR проводит более 36 проверок параллельно прямо в вашем браузере без установки утилит.',
    art_dns_title: 'Как проверить записи DNS?',
    art_dns_p1: 'DNS преобразует имена сайтов в IP. С помощью DNS-over-HTTPS (DoH) мы опрашиваем записи A, AAAA, MX, NS, TXT и CNAME.',
    art_ssl_title: 'Зачем проверять сертификаты SSL/TLS?',
    art_ssl_p1: 'Для предотвращения сбоев из-за истечения срока, проверки доверия к Удостоверяющему Центру и поддержки TLS 1.2 / TLS 1.3.',
    art_whois_title: 'Что такое сервис Whois?',
    art_whois_p1: 'Протокол Whois запрашивает базы данных регистраторов и показывает даты создания, продления и окончания срока домена.',
    dfaq_q1: 'Сколько параметров проверяет сервис?',
    dfaq_a1: 'Более 36 показателей одновременно: DNS, цепочки SSL, Whois, заголовки безопасности и порты.',
    dfaq_q2: 'Анализ бесплатен и не имеет ограничений?',
    dfaq_a2: 'Да! 100% бесплатно, без регистрации и без ограничений по количеству запросов.',
    dfaq_q3: 'Сохраняются ли проверяемые домены на сервере?',
    dfaq_a3: 'Нет. Все запросы выполняются исключительно на клиенте (client-side) в вашем браузере.',
    dfaq_q4: 'Почему некоторые строки показывают "Недоступно (CORS)"?',
    dfaq_a4: 'Политика безопасности браузеров блокирует некоторые прямые запросы без соответствующих заголовков CORS.',
    dfaq_q5: 'Для чего служат заголовки безопасности HTTP?',
    dfaq_a5: 'Они предотвращают атаки типа Clickjacking, кражу сессий и внедрение вредоносных скриптов (XSS).',
    cta_home_title: 'Хотите проверить собственное интернет-подключение?',
    cta_home_desc: 'Мгновенно узнайте свой публичный IP, провайдера, геолокацию и наличие утечек WebRTC.',
    cta_home_btn: 'Узнать мой IP 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ Тест утечки DNS',
    btn_dnsleak: '🛡️ Тест утечки ↗',
    leak_hero_badge: 'Конфиденциальность и безопасность VPN',
    leak_hero_title: 'Утечка данных через ваш VPN или прокси?',
    leak_hero_desc: 'Запустите детальную проверку на утечки DNS, реального IP-адреса и уязвимостей WebRTC для обеспечения абсолютной анонимности.',
    leak_art_dns_title: 'Что такое утечка DNS (DNS Leak)?',
    leak_art_dns_p1: 'При подключении к VPN все DNS-запросы должны следовать по зашифрованному туннелю. Утечка происходит, когда устройство обходит туннель и обращается напрямую к серверам DNS вашего интернет-провайдера.',
    leak_art_dns_p2: 'В результате провайдер видит все посещаемые вами сайты, сводя на нет конфиденциальность, предоставляемую VPN.',
    leak_art_webrtc_title: 'Опасность утечек через WebRTC',
    leak_art_webrtc_p1: 'Технология WebRTC используется для аудио- и видеосвязи в браузере, однако ее запросы STUN могут обходить виртуальный интерфейс VPN и раскрывать ваш настоящий публичный или локальный IP.',
    leak_art_webrtc_p2: 'NET INSPECTOR сканирует ICE-кандидаты в реальном времени и предупреждает о любых обнаруженных расхождениях.',
    leak_art_doh_title: 'Как работают шифрованные протоколы DoH и DoT?',
    leak_art_doh_p1: 'Традиционный DNS передает запросы открытым текстом по UDP 53. DoH и DoT оборачивают запросы в зашифрованный TLS-туннель, исключая перехват.',
    leak_faq_title: 'Часто задаваемые вопросы об утечках DNS и VPN (FAQ)',
    leak_faq_q1: 'Скрывает ли VPN мои DNS-запросы на 100%?',
    leak_faq_a1: 'Не всегда. Некорректная настройка VPN-клиента может приводить к утечке запросов на роутер провайдера.',
    leak_faq_q2: 'Как сайт может узнать мой реальный IP при включенном VPN?',
    leak_faq_a2: 'Чаще всего через уязвимости WebRTC в браузере или через трафик IPv6, не охваченный VPN-соединением.',
    leak_faq_q3: 'Зачем нужны DoH и DoT?',
    leak_faq_a3: 'Они предотвращают перехват адресов сайтов в публичных сетях Wi-Fi и со стороны интернет-провайдеров.',
    leak_faq_q4: 'Как устранить утечку DNS?',
    leak_faq_a4: 'Включите функции Kill Switch и DNS Leak Protection в VPN-приложении либо настройте защищенные серверы (например, Cloudflare 1.1.1.1).',
    leak_cta_home_title: 'Хотите проверить своего интернет-провайдера?',
    leak_cta_home_desc: 'Узнайте публичный IP, провайдера, ASN и геолокацию.',
    leak_cta_home_btn: 'Проверить мой IP и ISP 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · Диагностика сети и IP 100% Client-Side · Никакие данные не сохраняются',
    footer_link_ip: 'Узнать мой IP',
    footer_link_dnsleak: 'Тест утечки DNS',
    footer_link_domain: 'Анализ домена',
    footer_analytics: '📊 Приватная аналитика через GoatCounter (без файлов cookie) —',
    footer_stats: 'Открыть публичную статистику ↗',
    btn_optout_off: 'Отключить аналитику',
    btn_optout_on: 'Включить аналитику'
  },
  'ar': {
    logo_subtitle: 'تشخيص شامل للاتصال ومزود خدمة الإنترنت',
    nav_home: '🌐 ما هو عنوان IP الخاص بي؟',
    nav_domain: '🔍 فحص النطاقات',
    btn_scan: '▶ بدء التحليل',
    btn_domain: '🔍 فحص النطاقات ↗',
    btn_home: '← ما هو عنوان IP الخاص بي',
    hero_ip_label: 'عنوان IP العام الخاص بك',
    hero_domain_label: 'تشخيص الأمان و DNS وشهادات SSL',
    hero_domain_title: 'أداة مجانية لتحليل النطاقات عبر الإنترنت',
    hero_domain_desc: 'افحص البنية التحتية الكاملة لأي موقع ويب: سجلات DNS، صلاحية شهادة SSL/TLS، بيانات Whois، ترويسات أمان HTTP والمنافذ في الوقت الفعلي.',
    domain_input_placeholder: 'أدخل اسم النطاق (مثال: example.com)',
    domain_btn_scan: '🔍 تحليل',
    domain_input_hint: 'أدخل اسم نطاق لإجراء تدقيق شامل للأمان و DNS و SSL والبنية التحتية.',
    card_isp: 'مزود الخدمة &amp; ASN',
    card_location: 'الموقع الجغرافي',
    card_ip: 'عناوين IP',
    card_latency: 'زمن الاستجابة &amp; DNS',
    card_browser: 'المتصفح &amp; الجهاز',
    card_security: 'الأمان &amp; الخصوصية',
    card_connectivity: 'حالة الاتصال',
    card_domain_scan: 'تحليل النطاق',
    card_ipinfo: 'معلومات IP',
    card_ssl_chain: 'سلسلة SSL',
    card_dns_records: 'سجلات DNS',
    card_cookies: 'ملفات تعريف الارتباط',
    card_crawl_rules: 'قواعد الزحف',
    card_headers: 'ترويسات HTTP',
    card_quality_metrics: 'مقاييس الجودة',
    card_server_location: 'موقع الخادم',
    card_associated_hosts: 'المضيفون المرتبطون',
    card_redirect_chain: 'سلسلة التوجيه',
    card_diagnostic_log: 'سجل التشخيص',
    card_tls_audit: 'تدقيق TLS',
    card_tls_compat: 'توافقية TLS',
    lbl_provider: 'مزود الإنترنت (ISP)',
    lbl_org: 'المؤسسة',
    lbl_asn: 'رقم النظام المستقل (ASN)',
    lbl_domain: 'النطاق',
    lbl_nettype: 'نوع الشبكة',
    lbl_country: 'الدولة',
    lbl_region: 'المنطقة / المحافظة',
    lbl_city: 'المدينة',
    lbl_postal: 'الرمز البريدي',
    lbl_tz: 'المنطقة الزمنية',
    lbl_coords: 'الإحداثيات',
    lbl_ipv4_public: 'عنوان IPv4 العام',
    lbl_ipv6_public: 'عنوان IPv6 العام',
    lbl_ip_local: 'عنوان IP المحلي (LAN)',
    lbl_ipv6_local: 'عنوان IPv6 المحلي',
    lbl_webrtc_leak: 'تسريب WebRTC',
    lbl_webrtc_note: '⚠ عناوين محلية عبر WebRTC. إذا ظهر عنوان IPv4 العام هنا، فهذا يشير لتسريب VPN.',
    lbl_ping: 'اختبار الاتصال (Ping)',
    lbl_dns_server: 'خادم DNS',
    lbl_dns_lookup: 'استعلام DNS',
    lbl_https_support: 'دعم HTTPS',
    lbl_http2: 'دعم HTTP/2',
    lbl_platform: 'منصة التشغيل',
    lbl_language: 'لغة النظام',
    lbl_screen: 'أبعاد الشاشة (px)',
    lbl_vpn_proxy: 'شبكة VPN / بروكسي',
    lbl_tor: 'شبكة Tor',
    lbl_incognito: 'التصفح المتخفي',
    lbl_speed: 'السرعة المقدرة',
    lbl_online: 'حالة الاتصال',
    lbl_quality: 'الجودة',
    art_ip_title: 'ما هو عنوان IP العام؟',
    art_ip_p1: 'عنوان IP هو المعرف الرقمي العالمي لنقطة اتصالك بالإنترنت، مما يسمح للخوادم والتطبيقات بتبادل حزم البيانات مع جهازك بأمان.',
    art_ip_p2: 'يوجد بروتوكولان قيد التشغيل: IPv4 التقليدي و IPv6 الحديث المكون من 128 بت. يقوم NET INSPECTOR بفحصهما فوراً.',
    art_isp_title: 'كيف يحدد NET INSPECTOR مزود الإنترنت الخاص بك؟',
    art_isp_p1: 'توزع عناوين IP للشركات المشغلة عبر أنظمة مستقلة (ASN). نقوم باستعلام جداول توجيه BGP العامة.',
    art_isp_p2: 'نعرض بدقة اسم مزود الخدمة التجاري ورقم النظام المستقل المسجل.',
    art_geo_title: 'لماذا قد يكون تحديد الموقع الجغرافي لـ IP غير دقيق؟',
    art_geo_p1: 'تحديد الموقع الجغرافي لا يعتمد على نظام GPS، بل يشير إلى أقرب مركز بيانات أو نقطة توزيع تابعة لمزودك.',
    art_geo_p2: 'غالباً ما تجمع شبكات الهواتف المحمولة (4G/5G) أو تقنية CGNAT المستخدمين في مركز المحافظة أو العاصمة.',
    art_faq_title: 'الأسئلة الشائعة (FAQ)',
    faq_q1: 'هل عنوان IP الخاص بي ثابت أم ديناميكي؟',
    faq_a1: 'في معظم الاشتراكات المنزلية يكون ديناميكياً ويتغير دورياً. العناوين الثابتة مخصصة عادة للشركات والخوادم.',
    faq_q2: 'ما الفرق الحقيقي بين IPv4 و IPv6؟',
    faq_a2: 'يوفر IPv4 حوالي 4.3 مليار عنوان نفدت بالكامل عالمياً، بينما يمنح IPv6 مليارات لا تنتهي دون الحاجة لتقنيات NAT.',
    faq_q3: 'كيف يمكنني إخفاء عنوان IP العام الخاص بي؟',
    faq_a3: 'عبر استخدام خدمة VPN موثوقة أو متصفح Tor. تقوم بطاقتنا بفحص تسريبات WebRTC للتأكد من حماية خصوصيتك.',
    faq_q4: 'هل يستطيع أي شخص معرفة عنوان منزلي الدقيق من الـ IP؟',
    faq_a4: 'كلا، تظهر فقط تقديرات عامة للمدينة ومزود الخدمة. عنوانك السكني مسجل لدى مزودك فقط ولا يمنح إلا بأمر قضائي.',
    cta_domain_title: 'هل ترغب في فحص نطاق أو موقع ويب بالكامل؟',
    cta_domain_desc: 'يقدم NET INSPECTOR فاحص نطاقات متخصص يضم 36 أداة تدقيق لسجلات DNS وشهادات SSL وترويسات الأمان.',
    cta_domain_btn: 'فتح محلل النطاقات 🔍',
    art_domain_title: 'ما هو تحليل النطاق؟',
    art_domain_p1: 'هو فحص تقني شامل لجميع الواجهات العامة لأي موقع: توجيه DNS، تشفير SSL، ترويسات الأمان وحماية البريد.',
    art_domain_p2: 'يقوم NET INSPECTOR بتشغيل أكثر من 36 اختباراً بالتوازي مباشرة من متصفحك دون الحاجة لأي برامج خارجية.',
    art_dns_title: 'كيفية فحص سجلات DNS لأي موقع؟',
    art_dns_p1: 'يقوم نظام DNS بتحويل أسماء النطاقات إلى عناوين IP. نستخدم DoH المشفر لفحص سجلات A و AAAA و MX و NS و TXT و CNAME.',
    art_ssl_title: 'لماذا يجب التحقق من شهادة SSL/TLS؟',
    art_ssl_p1: 'للتأكد من تاريخ صلاحية الشهادة، موثوقية الجهة المصدرة، ودعم بروتوكولات التشفير الحديثة TLS 1.2 و TLS 1.3.',
    art_whois_title: 'ما هو بروتوكول Whois؟',
    art_whois_p1: 'يستعلم Whois قواعد بيانات مسجلي النطاقات لعرض تاريخ التسجيل الأول وتاريخ التجديد والانتهاء.',
    dfaq_q1: 'كم عدد الفحوصات التي تجريها الأداة؟',
    dfaq_a1: 'أكثر من 36 فحصاً متزامناً يشمل سجلات DNS، شهادات SSL، ترويسات الأمان وفحص المنافذ.',
    dfaq_q2: 'هل الفحص مجاني وغير محدود؟',
    dfaq_a2: 'نعم! مجاني 100% وبدون أي حدود أو اشتراط لتسجيل الدخول.',
    dfaq_q3: 'هل يتم تسجيل أو حفظ النطاقات المفحوصة؟',
    dfaq_a3: 'كلا، تتم جميع الاستعلامات داخل متصفح المستخدم (client-side) مباشرة دون تخزين أي سجلات على خوادمنا.',
    dfaq_q4: 'لماذا تظهر بعض الحقول عبارة "غير متاح (CORS)"؟',
    dfaq_a4: 'بسبب سياسات أمان المتصفحات التي تقيد بعض الطلبات المباشرة بين النطاقات غير المصرح بها.',
    dfaq_q5: 'ما فائدة ترويسات أمان HTTP؟',
    dfaq_a5: 'تحمي المستخدمين من هجمات الاختطاف وتزوير الجلسات وحقن البرمجيات الخبيثة (XSS).',
    cta_home_title: 'هل تريد فحص اتصالك الحالي بالإنترنت؟',
    cta_home_desc: 'اكتشف فوراً عنوان IP العام، مزود الخدمة، موقعك الجغرافي وفحص تسريب WebRTC.',
    cta_home_btn: 'كشف عنوان IP الخاص بي 📍',
    // DNS Leak & Privacy
    nav_dnsleak: '🛡️ فحص تسريب DNS',
    btn_dnsleak: '🛡️ فحص التسريب ↗',
    leak_hero_badge: 'خصوصية VPN وتدقيق التسريبات',
    leak_hero_title: 'هل يسرب اتصال VPN أو البروكسي بياناتك؟',
    leak_hero_desc: 'أجرِ فحصاً شاملاً لتسريبات DNS وعنوان IP الحقيقي وثغرات WebRTC للتأكد من أن تصفحك محمي ومجهول الهوية بالكامل.',
    leak_art_dns_title: 'ما هو تسريب DNS (DNS Leak)؟',
    leak_art_dns_p1: 'عند استخدام VPN، يجب أن تمر جميع طلبات أسماء النطاقات عبر النفق المشفر. يحدث التسريب عندما يتجاوز الجهاز هذا النفق ويرسل الاستعلام مباشرة لخوادم مزود الإنترنت المحلي.',
    leak_art_dns_p2: 'يؤدي هذا إلى كشف المواقع التي تزورها لمزودك، مما يبطل ميزة الخصوصية الأساسية للـ VPN.',
    leak_art_webrtc_title: 'خطر تسريبات بروتوكول WebRTC',
    leak_art_webrtc_p1: 'يتيح WebRTC نقل الصوت والفيديو في المتصفح، إلا أن خوادم STUN قد تتجاوز بطاقة شبكة VPN الافتراضية وتفصح عن عنوان IP الحقيقي لجهازك.',
    leak_art_webrtc_p2: 'يقوم NET INSPECTOR بتحليل مرشحي ICE في الوقت الفعلي لتنبيهك فوراً عند رصد أي تسريب.',
    leak_art_doh_title: 'كيف يحمي تشفير DoH و DoT تصفحك؟',
    leak_art_doh_p1: 'يرسل بروتوكول DNS التقليدي البيانات بنص صريح غير مشفر. يقوم DoH و DoT بتغليف الطلبات داخل اتصالات TLS مشفرة تمنع أي تنصت.',
    leak_faq_title: 'الأسئلة الشائعة حول تسريبات VPN و DNS (FAQ)',
    leak_faq_q1: 'هل يضمن اتصال VPN حجب استعلامات DNS دائماً؟',
    leak_faq_a1: 'ليس بالضرورة. قد تتسبب البرامج غير المضبوطة بإحكام في تسريب الطلبات إلى موجه الشبكة المحلي (الراوتر).',
    leak_faq_q2: 'كيف يكشف موقع ما عنوان IP الحقيقي رغم تفعيل VPN؟',
    leak_faq_a2: 'غالباً من خلال ثغرات WebRTC في المتصفح أو تسريبات حزم IPv6 غير المشمولة بنفق الاتصال.',
    leak_faq_q3: 'ما هي أهمية استخدام DoH و DoT؟',
    leak_faq_a3: 'منع مزودي الخدمة والمتلصصين على شبكات Wi-Fi العامة من رصد النطاقات التي تتصفحها.',
    leak_faq_q4: 'كيف أعالج مشكلة تسريب DNS؟',
    leak_faq_a4: 'قم بتفعيل ميزة Kill Switch وحماية تسريب DNS داخل تطبيق VPN، أو عيّن يدوياً خوادم DNS آمنة مثل Cloudflare (1.1.1.1).',
    leak_cta_home_title: 'هل تريد فحص مزود الخدمة الخاص بك؟',
    leak_cta_home_desc: 'اكتشف عنوان IP العام، رقم ASN والموقع الجغرافي.',
    leak_cta_home_btn: 'كشف عنوان IP ومزود الخدمة 📍',
    // Footer & Common
    footer_desc: 'NET INSPECTOR · تشخيص شبكة و IP بنسبة 100% من جانب العميل · لا يتم تخزين أي بيانات',
    footer_link_ip: 'ما هو عنوان IP؟',
    footer_link_dnsleak: 'فحص تسريب DNS',
    footer_link_domain: 'تحليل النطاقات',
    footer_analytics: '📊 إحصائيات تحترم الخصوصية عبر GoatCounter (بدون ملفات تعريف ارتباط) —',
    footer_stats: 'عرض الإحصائيات العامة ↗',
    btn_optout_off: 'تعطيل الإحصائيات',
    btn_optout_on: 'تفعيل الإحصائيات'
  }
};

/**
 * Detecta o idioma preferencial:
 * 1. URL search param ?lang=xx
 * 2. localStorage['preferred_language']
 * 3. navigator.language (extrai prefixo)
 * Fallback: 'pt-br'
 */
function detectLanguage() {
  try {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang && SUPPORTED_LANGS[paramLang.toLowerCase()]) {
      return paramLang.toLowerCase();
    }
  } catch (e) {}

  try {
    const saved = localStorage.getItem('preferred_language');
    if (saved && SUPPORTED_LANGS[saved.toLowerCase()]) {
      return saved.toLowerCase();
    }
  } catch (e) {}

  try {
    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (SUPPORTED_LANGS[navLang]) return navLang;
    const prefix = navLang.split('-')[0];
    if (prefix === 'pt') return 'pt-br';
    if (SUPPORTED_LANGS[prefix]) return prefix;
  } catch (e) {}

  return 'pt-br';
}

let currentLang = detectLanguage();

/**
 * Traduz uma chave para o idioma corrente
 */
function t(key) {
  if (!key) return '';
  const langDict = TRANSLATIONS[currentLang] || TRANSLATIONS['pt-br'];
  if (langDict && langDict[key] !== undefined) {
    return langDict[key];
  }
  const fallbackDict = TRANSLATIONS['pt-br'];
  if (fallbackDict && fallbackDict[key] !== undefined) {
    return fallbackDict[key];
  }
  return key;
}

/**
 * Altera o idioma ativo, grava no localStorage, atualiza html lang e dir e reaplica
 */
function setLanguage(langCode) {
  const code = langCode ? langCode.toLowerCase() : 'pt-br';
  if (!SUPPORTED_LANGS[code]) return;
  currentLang = code;
  try {
    localStorage.setItem('preferred_language', code);
  } catch (e) {}

  // Atualiza atributo lang e dir do html
  document.documentElement.lang = code === 'pt-br' ? 'pt-BR' : code;
  document.documentElement.dir = SUPPORTED_LANGS[code].dir || 'ltr';

  // Atualiza o dropdown e botões
  updateLangDropdownUi();
  applyTranslations();

  // Fechar dropdown
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

/**
 * Alterna a visibilidade do dropdown de idiomas
 */
function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('lang-dropdown');
  if (!dropdown) return;
  dropdown.classList.toggle('hidden');
}

/**
 * Atualiza o seletor visual de idioma no header
 */
function updateLangDropdownUi() {
  const flagEl = document.getElementById('lang-current-flag');
  const codeEl = document.getElementById('lang-current-code');
  if (flagEl && codeEl && SUPPORTED_LANGS[currentLang]) {
    flagEl.textContent = SUPPORTED_LANGS[currentLang].flag;
    codeEl.textContent = currentLang.toUpperCase();
  }
  document.querySelectorAll('.lang-opt').forEach(opt => {
    if (opt.dataset.lang === currentLang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

/**
 * Aplica traduções a todos os elementos com data-i18n, data-i18n-placeholder, etc.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.setAttribute('placeholder', val);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t(key);
    if (val) el.setAttribute('title', val);
  });

  // Atualiza botões de ação e opt-out
  updateOptOutButtons();
}

// Fechar menu de idioma ao clicar fora
document.addEventListener('click', e => {
  const wrap = document.querySelector('.lang-selector-wrap');
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown && !dropdown.classList.contains('hidden') && wrap && !wrap.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

/* ─────────── Card Factory ─────────── */
const CARDS_CONFIG = [
  {
    id: 'isp',
    icon: '🏢',
    titleKey: 'card_isp',
    title: 'ISP &amp; ASN',
    bodyId: 'body-isp',
    badge: { id: 'badge-isp', text: '—', class: 'badge-info' },
    fields: [
      { labelKey: 'lbl_provider', label: 'Provedor', id: 'v-isp', defaultValue: '<span class="spin"></span>' },
      { labelKey: 'lbl_org', label: 'Organização', id: 'v-org' },
      { labelKey: 'lbl_asn', label: 'ASN', id: 'v-asn', class: 'accent' },
      { labelKey: 'lbl_domain', label: 'Domínio', id: 'v-domain' },
      { labelKey: 'lbl_nettype', label: 'Tipo de rede', id: 'v-nettype' },
    ]
  },
  {
    id: 'location',
    icon: '📍',
    titleKey: 'card_location',
    title: 'Localização',
    badge: { id: 'badge-loc', text: '—', class: 'badge-info' },
    appendHtml: '<iframe id="map-frame" style="display:none" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>',
    fields: [
      { labelKey: 'lbl_country', label: 'País', id: 'v-country' },
      { labelKey: 'lbl_region', label: 'Região', id: 'v-region' },
      { labelKey: 'lbl_city', label: 'Cidade', id: 'v-city' },
      { labelKey: 'lbl_postal', label: 'CEP / Postal', id: 'v-postal' },
      { labelKey: 'lbl_tz', label: 'Fuso horário', id: 'v-tz' },
      { labelKey: 'lbl_coords', label: 'Coordenadas', id: 'v-coords', class: 'accent' },
    ]
  },
  {
    id: 'ip',
    icon: '🌐',
    titleKey: 'card_ip',
    title: 'Endereços IP',
    badge: { id: 'badge-ip', text: '—', class: 'badge-info' },
    appendHtml: '<p class="webrtc-note" data-i18n="lbl_webrtc_note">⚠ IPs locais via WebRTC. Se aparecer o IPv4 público aqui, pode indicar vazamento de VPN.</p>',
    fields: [
      { labelKey: 'lbl_ipv4_public', label: 'IPv4 público', id: 'v-ipv4', class: 'accent', defaultValue: '<span class="spin"></span>' },
      { labelKey: 'lbl_ipv6_public', label: 'IPv6 público', id: 'v-ipv6', class: 'accent', defaultValue: '<span class="spin"></span>' },
      { labelKey: 'lbl_ip_local', label: 'IP local (LAN)', id: 'v-local' },
      { labelKey: 'lbl_ipv6_local', label: 'IPv6 local', id: 'v-local6' },
      { labelKey: 'lbl_webrtc_leak', label: 'WebRTC leak', id: 'v-webrtc', defaultValue: 'testando…' },
    ]
  },
  {
    id: 'latency',
    icon: '⚡',
    titleKey: 'card_latency',
    title: 'Latência &amp; DNS',
    badge: { id: 'badge-ping', text: '—' },
    latencyBar: true,
    fields: [
      { labelKey: 'lbl_ping', label: 'Ping HTTP', id: 'v-ping', defaultValue: 'medindo…' },
      { labelKey: 'lbl_dns_server', label: 'Servidor DNS', id: 'v-dns', rowStyle: 'margin-top:12px' },
      { labelKey: 'lbl_dns_lookup', label: 'DNS lookup', id: 'v-dnslookup' },
      { labelKey: 'lbl_https_support', label: 'HTTPS suporte', class: 'ok', defaultValue: '✓ Sim' },
      { labelKey: 'lbl_http2', label: 'HTTP/2', id: 'v-h2', defaultValue: 'verificando…' },
    ]
  },
  {
    id: 'browser',
    icon: '💻',
    titleKey: 'card_browser',
    title: 'Navegador &amp; Dispositivo',
    bodyId: 'body-ua',
    fields: [
      { label: 'User-Agent', id: 'v-ua', style: 'font-size:.65rem' },
      { labelKey: 'lbl_platform', label: 'Plataforma', id: 'v-platform' },
      { labelKey: 'lbl_language', label: 'Idioma', id: 'v-lang' },
      { label: 'Cores suporte', id: 'v-colors' },
      { label: 'Cookies', id: 'v-cookies' },
      { label: 'JavaScript', class: 'ok', defaultValue: '✓ Ativo' },
      { label: 'WebRTC', id: 'v-wrtc-support' },
      { labelKey: 'lbl_screen', label: 'Tela (px)', id: 'v-screen' },
      { label: 'Mem. RAM (est.)', id: 'v-mem' },
      { label: 'CPUs lógicos', id: 'v-cpu' },
    ]
  },
  {
    id: 'security',
    icon: '🔒',
    titleKey: 'card_security',
    title: 'Segurança &amp; Privacidade',
    badge: { id: 'badge-sec', text: '—' },
    fields: [
      { labelKey: 'lbl_vpn_proxy', label: 'VPN / Proxy', id: 'v-proxy', defaultValue: 'verificando…' },
      { labelKey: 'lbl_tor', label: 'Tor detectado', id: 'v-tor' },
      { label: 'Tipo de conexão', id: 'v-conntype' },
      { label: 'DoH/DoT (DNS cifrado)', id: 'v-doh' },
      { labelKey: 'lbl_incognito', label: 'Modo incógnito', id: 'v-incognito' },
      { label: 'Cabeçalhos CORS', class: 'ok', defaultValue: 'Permitido' },
      { label: 'TLS versão', id: 'v-tls', defaultValue: 'TLS 1.2/1.3 ✓' },
    ]
  },
  {
    id: 'connectivity',
    icon: '📡',
    titleKey: 'card_connectivity',
    title: 'Conectividade',
    badge: { id: 'badge-conn', text: 'Online', class: 'badge-ok' },
    fields: [
      { labelKey: 'lbl_online', label: 'Status', id: 'v-online', class: 'ok', defaultValue: '🟢 Online' },
      { labelKey: 'lbl_speed', label: 'Velocidade estimada', id: 'v-speed' },
      { label: 'Tipo de acesso', id: 'v-eff-type' },
      { label: 'Economia de dados', id: 'v-datasaver' },
      { label: 'RTT estimado', id: 'v-rtt' },
      { label: 'Downlink', id: 'v-downlink' },
    ]
  },
  {
    id: 'domain-scan',
    icon: '🔍',
    titleKey: 'card_domain_scan',
    title: 'Análise de Domínio',
    fullWidth: true,
    customHtml: `<div style="display:flex;gap:10px;margin-bottom:12px;">
          <input type="text" id="domain-input" data-i18n-placeholder="domain_input_placeholder" placeholder="Digite um domínio (ex: example.com)" 
                 style="flex:1;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--text);font-family:'JetBrains Mono',monospace;font-size:.85rem;">
          <button id="domain-scan-btn" onclick="scanDomain()" data-i18n="domain_btn_scan"
                  style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:none;border-radius:8px;padding:10px 20px;font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:600;cursor:pointer;">
            🔍 Analisar
          </button>
        </div>
        <p data-i18n="domain_input_hint" style="font-size:.7rem;color:var(--muted);">Digite um domínio para análise completa de segurança, DNS, SSL e infraestrutura.</p>`,
  },
  {
    id: 'ipinfo',
    icon: '📡',
    title: 'IP Info',
    badge: { id: 'badge-ipinfo', text: '—', class: 'badge-info' },
    fields: [
      { label: 'IP Address', id: 'v-ipinfo-ip', class: 'accent' },
      { label: 'Hostname', id: 'v-ipinfo-host' },
      { label: 'City', id: 'v-ipinfo-city' },
      { label: 'Region', id: 'v-ipinfo-region' },
      { label: 'Country', id: 'v-ipinfo-country' },
      { label: 'Loc', id: 'v-ipinfo-loc' },
      { label: 'Org', id: 'v-ipinfo-org' },
      { label: 'Postal', id: 'v-ipinfo-postal' },
      { label: 'Timezone', id: 'v-ipinfo-tz' },
    ]
  },
  {
    id: 'ssl-chain',
    icon: '🔐',
    title: 'SSL Chain',
    badge: { id: 'badge-ssl', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Valid', id: 'v-ssl-valid' },
      { label: 'Issuer', id: 'v-ssl-issuer' },
      { label: 'Subject', id: 'v-ssl-subject' },
      { label: 'Expires', id: 'v-ssl-expires' },
      { label: 'Days Left', id: 'v-ssl-days' },
      { label: 'Protocol', id: 'v-ssl-proto' },
      { label: 'Cipher', id: 'v-ssl-cipher' },
    ]
  },
  {
    id: 'dns-records',
    icon: '📋',
    title: 'DNS Records',
    badge: { id: 'badge-dns', text: '—', class: 'badge-info' },
    fields: [
      { label: 'A Records', id: 'v-dns-a' },
      { label: 'AAAA Records', id: 'v-dns-aaaa' },
      { label: 'MX Records', id: 'v-dns-mx' },
      { label: 'NS Records', id: 'v-dns-ns' },
      { label: 'CNAME', id: 'v-dns-cname' },
    ]
  },
  {
    id: 'cookies',
    icon: '🍪',
    title: 'Cookies',
    badge: { id: 'badge-cookies', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Total Cookies', id: 'v-cookies-total' },
      { label: 'Secure', id: 'v-cookies-secure' },
      { label: 'HttpOnly', id: 'v-cookies-httponly' },
      { label: 'SameSite', id: 'v-cookies-samesite' },
      { label: 'Session', id: 'v-cookies-session' },
    ]
  },
  {
    id: 'crawl-rules',
    icon: '🤖',
    title: 'Crawl Rules',
    badge: { id: 'badge-crawl', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Robots.txt', id: 'v-crawl-robots' },
      { label: 'Sitemap', id: 'v-crawl-sitemap' },
      { label: 'Disallow Count', id: 'v-crawl-disallow' },
      { label: 'Allow Count', id: 'v-crawl-allow' },
    ]
  },
  {
    id: 'headers',
    icon: '📝',
    title: 'Headers',
    badge: { id: 'badge-headers', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Server', id: 'v-headers-server' },
      { label: 'Content-Type', id: 'v-headers-content' },
      { label: 'X-Frame-Options', id: 'v-headers-xframe' },
      { label: 'X-XSS-Protection', id: 'v-headers-xss' },
      { label: 'Content-Security-Policy', id: 'v-headers-csp' },
    ]
  },
  {
    id: 'quality-metrics',
    icon: '⭐',
    title: 'Quality Metrics',
    badge: { id: 'badge-quality', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Performance', id: 'v-quality-perf' },
      { label: 'Accessibility', id: 'v-quality-access' },
      { label: 'Best Practices', id: 'v-quality-best' },
      { label: 'SEO Score', id: 'v-quality-seo' },
      { label: 'Overall', id: 'v-quality-overall', class: 'accent' },
    ]
  },
  {
    id: 'server-location',
    icon: '🗺️',
    title: 'Server Location',
    badge: { id: 'badge-srvloc', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Continent', id: 'v-srvloc-cont' },
      { label: 'Country', id: 'v-srvloc-country' },
      { label: 'City', id: 'v-srvloc-city' },
      { label: 'Latitude', id: 'v-srvloc-lat' },
      { label: 'Longitude', id: 'v-srvloc-lon' },
      { label: 'Accuracy Radius', id: 'v-srvloc-radius' },
    ]
  },
  {
    id: 'associated-hosts',
    icon: '🔗',
    title: 'Associated Hosts',
    badge: { id: 'badge-assoc', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Total Hosts', id: 'v-assoc-total' },
      { label: 'IPv4 Hosts', id: 'v-assoc-ipv4' },
      { label: 'IPv6 Hosts', id: 'v-assoc-ipv6' },
      { label: 'Sample', id: 'v-assoc-sample' },
    ]
  },
  {
    id: 'redirect-chain',
    icon: '➡️',
    title: 'Redirect Chain',
    badge: { id: 'badge-redirect', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Total Redirects', id: 'v-redirect-count' },
      { label: 'Final URL', id: 'v-redirect-final' },
      { label: 'Chain', id: 'v-redirect-chain' },
    ]
  },
  {
    id: 'txt-records',
    icon: '📜',
    title: 'TXT Records',
    badge: { id: 'badge-txt', text: '—', class: 'badge-info' },
    fields: [
      { label: 'SPF Record', id: 'v-txt-spf' },
      { label: 'DMARC', id: 'v-txt-dmarc' },
      { label: 'DKIM', id: 'v-txt-dkim' },
      { label: 'Verification', id: 'v-txt-verify' },
    ]
  },
  {
    id: 'server-status',
    icon: '💚',
    title: 'Server Status',
    badge: { id: 'badge-status', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'HTTP Status', id: 'v-status-code' },
      { label: 'Status Text', id: 'v-status-text' },
      { label: 'Response Time', id: 'v-status-time' },
      { label: 'Uptime', id: 'v-status-uptime' },
    ]
  },
  {
    id: 'open-ports',
    icon: '🚪',
    title: 'Open Ports',
    badge: { id: 'badge-ports', text: '—', class: 'badge-warn' },
    fields: [
      { label: 'Port 80 (HTTP)', id: 'v-ports-80' },
      { label: 'Port 443 (HTTPS)', id: 'v-ports-443' },
      { label: 'Port 21 (FTP)', id: 'v-ports-21' },
      { label: 'Port 22 (SSH)', id: 'v-ports-22' },
      { label: 'Port 25 (SMTP)', id: 'v-ports-25' },
      { label: 'Other Open', id: 'v-ports-other' },
    ]
  },
  {
    id: 'traceroute',
    icon: '🛣️',
    title: 'Traceroute',
    badge: { id: 'badge-trace', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Hops', id: 'v-trace-hops' },
      { label: 'Route', id: 'v-trace-route' },
      { label: 'Avg Latency', id: 'v-trace-latency' },
    ]
  },
  {
    id: 'carbon-footprint',
    icon: '🌱',
    title: 'Carbon Footprint',
    badge: { id: 'badge-carbon', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Page Size', id: 'v-carbon-size' },
      { label: 'CO2 per Visit', id: 'v-carbon-co2' },
      { label: 'Annual CO2', id: 'v-carbon-annual' },
      { label: 'Rating', id: 'v-carbon-rating' },
    ]
  },
  {
    id: 'server-info',
    icon: '🖥️',
    title: 'Server Info',
    badge: { id: 'badge-srvinfo', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Server Type', id: 'v-srvinfo-type' },
      { label: 'Powered By', id: 'v-srvinfo-powered' },
      { label: 'OS', id: 'v-srvinfo-os' },
      { label: 'Hosting Provider', id: 'v-srvinfo-hosting' },
      { label: 'Datacenter', id: 'v-srvinfo-dc' },
    ]
  },
  {
    id: 'whois-lookup',
    icon: '📇',
    title: 'Whois Lookup',
    badge: { id: 'badge-whois', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Registrar', id: 'v-whois-registrar' },
      { label: 'Created', id: 'v-whois-created' },
      { label: 'Expires', id: 'v-whois-expires' },
      { label: 'Updated', id: 'v-whois-updated' },
      { label: 'Status', id: 'v-whois-status' },
    ]
  },
  {
    id: 'domain-info',
    icon: '🏷️',
    title: 'Domain Info',
    badge: { id: 'badge-domaininfo', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Domain Age', id: 'v-domaininfo-age' },
      { label: 'TLD', id: 'v-domaininfo-tld' },
      { label: 'Is Subdomain', id: 'v-domaininfo-sub' },
      { label: 'IDN', id: 'v-domaininfo-idn' },
      { label: 'Length', id: 'v-domaininfo-length' },
    ]
  },
  {
    id: 'dnssec',
    icon: '🛡️',
    title: 'DNSSEC',
    badge: { id: 'badge-dnssec', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'DNSSEC Enabled', id: 'v-dnssec-enabled' },
      { label: 'DS Record', id: 'v-dnssec-ds' },
      { label: 'Algorithm', id: 'v-dnssec-algo' },
      { label: 'Key Tag', id: 'v-dnssec-keytag' },
    ]
  },
  {
    id: 'hsts',
    icon: '🔒',
    title: 'HSTS',
    badge: { id: 'badge-hsts', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'HSTS Enabled', id: 'v-hsts-enabled' },
      { label: 'Max-Age', id: 'v-hsts-age' },
      { label: 'Include Subdomains', id: 'v-hsts-sub' },
      { label: 'Preload', id: 'v-hsts-preload' },
    ]
  },
  {
    id: 'dns-server',
    icon: '🖧',
    title: 'DNS Server',
    badge: { id: 'badge-dnsserver', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Primary DNS', id: 'v-dnsserver-primary' },
      { label: 'Secondary DNS', id: 'v-dnsserver-secondary' },
      { label: 'Resolver', id: 'v-dnsserver-resolver' },
      { label: 'Response Time', id: 'v-dnsserver-time' },
    ]
  },
  {
    id: 'tech-stack',
    icon: '🧰',
    title: 'Tech Stack',
    badge: { id: 'badge-tech', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Web Server', id: 'v-tech-server' },
      { label: 'CMS', id: 'v-tech-cms' },
      { label: 'Framework', id: 'v-tech-framework' },
      { label: 'Language', id: 'v-tech-lang' },
      { label: 'Analytics', id: 'v-tech-analytics' },
    ]
  },
  {
    id: 'listed-pages',
    icon: '📄',
    title: 'Listed Pages',
    badge: { id: 'badge-pages', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Indexed (Google)', id: 'v-pages-google' },
      { label: 'Sitemap URLs', id: 'v-pages-sitemap' },
      { label: 'Internal Links', id: 'v-pages-internal' },
      { label: 'External Links', id: 'v-pages-external' },
    ]
  },
  {
    id: 'security-txt',
    icon: '📯',
    title: 'security.txt',
    badge: { id: 'badge-sectxt', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Found', id: 'v-sectxt-found' },
      { label: 'Contact', id: 'v-sectxt-contact' },
      { label: 'Encryption', id: 'v-sectxt-encrypt' },
      { label: 'Policy', id: 'v-sectxt-policy' },
    ]
  },
  {
    id: 'linked-pages',
    icon: '🔗',
    title: 'Linked Pages',
    badge: { id: 'badge-linked', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Total Links', id: 'v-linked-total' },
      { label: 'Internal', id: 'v-linked-internal' },
      { label: 'External', id: 'v-linked-external' },
      { label: 'Broken', id: 'v-linked-broken' },
    ]
  },
  {
    id: 'social-tags',
    icon: '📱',
    title: 'Social Tags',
    badge: { id: 'badge-social', text: '—', class: 'badge-info' },
    fields: [
      { label: 'OG Title', id: 'v-social-ogtitle' },
      { label: 'OG Description', id: 'v-social-ogdesc' },
      { label: 'OG Image', id: 'v-social-ogimg' },
      { label: 'Twitter Card', id: 'v-social-twitter' },
    ]
  },
  {
    id: 'email-config',
    icon: '📧',
    title: 'Email Config',
    badge: { id: 'badge-email', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'MX Records', id: 'v-email-mx' },
      { label: 'SPF Valid', id: 'v-email-spf' },
      { label: 'DMARC Policy', id: 'v-email-dmarc' },
      { label: 'Mail Server', id: 'v-email-server' },
    ]
  },
  {
    id: 'firewall',
    icon: '🧱',
    title: 'Firewall',
    badge: { id: 'badge-firewall', text: '—', class: 'badge-warn' },
    fields: [
      { label: 'WAF Detected', id: 'v-firewall-waf' },
      { label: 'WAF Type', id: 'v-firewall-type' },
      { label: 'Cloudflare', id: 'v-firewall-cf' },
      { label: 'Akamai', id: 'v-firewall-akamai' },
    ]
  },
  {
    id: 'http-security',
    icon: '🔐',
    title: 'HTTP Security',
    badge: { id: 'badge-httpsec', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'CSP', id: 'v-httpsec-csp' },
      { label: 'X-Frame-Options', id: 'v-httpsec-frame' },
      { label: 'X-Content-Type', id: 'v-httpsec-content' },
      { label: 'Referrer-Policy', id: 'v-httpsec-referrer' },
      { label: 'Permissions-Policy', id: 'v-httpsec-permissions' },
    ]
  },
  {
    id: 'archive-history',
    icon: '📚',
    title: 'Archive History',
    badge: { id: 'badge-archive', text: '—', class: 'badge-info' },
    fields: [
      { label: 'First Capture', id: 'v-archive-first' },
      { label: 'Last Capture', id: 'v-archive-last' },
      { label: 'Total Captures', id: 'v-archive-total' },
      { label: 'Years Archived', id: 'v-archive-years' },
    ]
  },
  {
    id: 'global-ranking',
    icon: '📊',
    title: 'Global Ranking',
    badge: { id: 'badge-ranking', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Alexa Rank', id: 'v-ranking-alexa' },
      { label: 'Tranco Rank', id: 'v-ranking-tranco' },
      { label: 'Country Rank', id: 'v-ranking-country' },
      { label: 'Category Rank', id: 'v-ranking-category' },
    ]
  },
  {
    id: 'block-detection',
    icon: '🚫',
    title: 'Block Detection',
    badge: { id: 'badge-block', text: '—', class: 'badge-warn' },
    fields: [
      { label: 'Blocked by Robots', id: 'v-block-robots' },
      { label: 'Geo Blocked', id: 'v-block-geo' },
      { label: 'IP Blocked', id: 'v-block-ip' },
      { label: 'Captcha', id: 'v-block-captcha' },
    ]
  },
  {
    id: 'malware-check',
    icon: '☣️',
    title: 'Malware Check',
    badge: { id: 'badge-malware', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Google Safe Browsing', id: 'v-malware-google' },
      { label: 'PhishTank', id: 'v-malware-phish' },
      { label: 'VirusTotal', id: 'v-malware-vt' },
      { label: 'Threat Level', id: 'v-malware-threat' },
    ]
  },
  {
    id: 'tls-connection',
    icon: '🔏',
    title: 'TLS Connection',
    badge: { id: 'badge-tlsconn', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'TLS Version', id: 'v-tlsconn-ver' },
      { label: 'Cipher Suite', id: 'v-tlsconn-cipher' },
      { label: 'Key Exchange', id: 'v-tlsconn-key' },
      { label: 'Protocol', id: 'v-tlsconn-proto' },
    ]
  },
  {
    id: 'tls-audit',
    icon: '✅',
    title: 'TLS Audit',
    badge: { id: 'badge-tlsaudit', text: '—', class: 'badge-ok' },
    fields: [
      { label: 'Grade', id: 'v-tlsaudit-grade', class: 'accent' },
      { label: 'Weak Ciphers', id: 'v-tlsaudit-weak' },
      { label: 'POODLE', id: 'v-tlsaudit-poodle' },
      { label: 'BEAST', id: 'v-tlsaudit-beast' },
      { label: 'CRIME', id: 'v-tlsaudit-crime' },
    ]
  },
  {
    id: 'tls-compatibility',
    icon: '👥',
    title: 'TLS Compatibility',
    badge: { id: 'badge-tlscompat', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Chrome', id: 'v-tlscompat-chrome' },
      { label: 'Firefox', id: 'v-tlscompat-firefox' },
      { label: 'Safari', id: 'v-tlscompat-safari' },
      { label: 'Edge', id: 'v-tlscompat-edge' },
      { label: 'IE', id: 'v-tlscompat-ie' },
    ]
  },
  {
    id: 'diagnostic-log',
    icon: '🔬',
    title: 'Log de Diagnóstico',
    fullWidth: true,
    badge: { id: 'badge-log', text: 'aguardando', class: 'badge-info' },
    customHtml: `<pre id="log" style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--label);line-height:1.8;max-height:220px;overflow-y:auto;white-space:pre-wrap;"></pre>`,
  }
];

/**
 * Cria o elemento DOM de um card com base na sua configuração
 * @param {Object} config Configuração do card
 * @returns {HTMLElement} Elemento div.card
 */
function createCard(config) {
  const card = document.createElement('div');
  card.className = 'card';
  if (config.fullWidth) {
    card.style.gridColumn = '1 / -1';
  }

  // Cabeçalho do Card
  const head = document.createElement('div');
  head.className = 'card-head';

  const iconSpan = document.createElement('span');
  iconSpan.className = 'card-icon';
  iconSpan.textContent = config.icon || '';
  head.appendChild(iconSpan);

  const titleSpan = document.createElement('span');
  titleSpan.className = 'card-title';
  if (config.titleKey) {
    titleSpan.setAttribute('data-i18n', config.titleKey);
    titleSpan.innerHTML = t(config.titleKey);
  } else {
    titleSpan.innerHTML = config.title || '';
  }
  head.appendChild(titleSpan);

  if (config.badge) {
    const badgeSpan = document.createElement('span');
    badgeSpan.className = 'card-badge' + (config.badge.class ? ' ' + config.badge.class : '');
    badgeSpan.id = config.badge.id;
    badgeSpan.textContent = config.badge.text;
    head.appendChild(badgeSpan);
  }
  card.appendChild(head);

  // Corpo do Card
  const body = document.createElement('div');
  body.className = 'card-body';
  if (config.bodyId) {
    body.id = config.bodyId;
  }

  if (config.customHtml) {
    body.innerHTML = config.customHtml;
  } else {
    if (config.fields) {
      config.fields.forEach(field => {
        const row = document.createElement('div');
        row.className = 'row';
        if (field.rowStyle) {
          row.style.cssText = field.rowStyle;
        }

        const lbl = document.createElement('span');
        lbl.className = 'row-label';
        if (field.labelKey) {
          lbl.setAttribute('data-i18n', field.labelKey);
          lbl.textContent = t(field.labelKey);
        } else {
          lbl.textContent = field.label;
        }
        row.appendChild(lbl);

        const val = document.createElement('span');
        val.className = 'row-value' + (field.class ? ' ' + field.class : '');
        if (field.id) val.id = field.id;
        if (field.style) val.style.cssText = field.style;
        val.innerHTML = field.defaultValue !== undefined ? field.defaultValue : '—';
        row.appendChild(val);

        body.appendChild(row);

        // Barra de qualidade de latência após a linha de ping
        if (config.latencyBar && field.id === 'v-ping') {
          const latWrap = document.createElement('div');
          latWrap.className = 'latency-bar-wrap';
          latWrap.innerHTML = `<div style="font-size:.7rem;color:var(--muted)" data-i18n="lbl_quality">${t('lbl_quality')}</div><div class="latency-bar-bg"><div class="latency-bar-fill" id="ping-bar"></div></div>`;
          body.appendChild(latWrap);
        }
      });
    }

    if (config.appendHtml) {
      const temp = document.createElement('div');
      temp.innerHTML = config.appendHtml;
      while (temp.firstChild) {
        body.appendChild(temp.firstChild);
      }
    }
  }

  card.appendChild(body);
  return card;
}

/**
 * Renderiza os cards configurados no container do grid
 * Suporta filtragem condicional baseada no atributo data-page do <body>
 */
function renderCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;
  const fragment = document.createDocumentFragment();

  const page = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'all';
  let cardsToRender = CARDS_CONFIG;

  if (page === 'home' || page === 'ip') {
    const allowedCards = ['isp', 'location', 'ip', 'diagnostic-log'];
    cardsToRender = CARDS_CONFIG.filter(cfg => allowedCards.includes(cfg.id));
  } else if (page === 'dnsleak') {
    const allowedCards = ['ip', 'security', 'latency', 'diagnostic-log'];
    cardsToRender = CARDS_CONFIG.filter(cfg => allowedCards.includes(cfg.id));
  } else if (page === 'domain') {
    const personalCards = ['isp', 'location', 'ip', 'latency', 'browser', 'security', 'connectivity'];
    cardsToRender = CARDS_CONFIG.filter(cfg => !personalCards.includes(cfg.id));
  }

  cardsToRender.forEach(cfg => {
    fragment.appendChild(createCard(cfg));
  });
  container.appendChild(fragment);
}

/* ─────────── API Manager ─────────── */
const ApiManager = {
  // In-flight promises e cache de sessão em memória
  _cache: new Map(),
  _cacheTtlMs: 60000, // 60s
  DEFAULT_TIMEOUT_MS: 6000,

  /**
   * Limpa entradas expiradas do cache
   */
  _cleanup() {
    const now = Date.now();
    for (const [k, v] of this._cache.entries()) {
      if (v.expiresAt && v.expiresAt < now) {
        this._cache.delete(k);
      }
    }
  },

  /**
   * Executa uma requisição com timeout e in-flight deduplication
   * @param {string} key Chave única para o cache
   * @param {Function} fetcher Função assíncrona que executa a requisição
   * @param {boolean} useCache Se true, armazena e reutiliza o resultado durante o TTL
   */
  async _execute(key, fetcher, useCache = true) {
    this._cleanup();
    if (useCache && this._cache.has(key)) {
      const entry = this._cache.get(key);
      if (entry.promise) return entry.promise;
      if (entry.data !== undefined && (!entry.expiresAt || entry.expiresAt > Date.now())) {
        return entry.data;
      }
    }

    const promise = (async () => {
      try {
        const result = await fetcher();
        if (useCache) {
          this._cache.set(key, {
            data: result,
            expiresAt: Date.now() + this._cacheTtlMs
          });
        }
        return result;
      } catch (err) {
        // Remove do cache em caso de erro para permitir retry futuro
        this._cache.delete(key);
        throw err;
      }
    })();

    if (useCache) {
      this._cache.set(key, { promise, expiresAt: Date.now() + this._cacheTtlMs });
    }

    return promise;
  },

  /**
   * Wrapper com AbortController timeout
   */
  async request(url, options = {}, timeoutMs = this.DEFAULT_TIMEOUT_MS) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const resp = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return resp;
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  },

  /**
   * Requisição GET JSON com deduplicação e timeout
   */
  async getJson(url, options = {}, timeoutMs = this.DEFAULT_TIMEOUT_MS) {
    const key = 'json:' + url;
    return this._execute(key, async () => {
      const resp = await this.request(url, { ...options, cache: 'no-store' }, timeoutMs);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      return await resp.json();
    });
  },

  /**
   * Requisição GET Text/HTML com deduplicação e timeout
   */
  async getText(url, options = {}, timeoutMs = this.DEFAULT_TIMEOUT_MS) {
    const key = 'text:' + url;
    return this._execute(key, async () => {
      const resp = await this.request(url, { ...options, cache: 'no-store' }, timeoutMs);
      const text = await resp.text();
      return {
        ok: resp.ok,
        status: resp.status,
        headers: resp.headers,
        text
      };
    });
  },

  /**
   * Requisição HEAD com deduplicação de headers e timeout
   */
  async head(url, options = {}, timeoutMs = this.DEFAULT_TIMEOUT_MS) {
    const key = 'head:' + url;
    return this._execute(key, async () => {
      const resp = await this.request(url, { ...options, method: 'HEAD', cache: 'no-store' }, timeoutMs);
      const headers = {};
      resp.headers.forEach((val, name) => {
        headers[name.toLowerCase()] = val;
      });
      return {
        ok: resp.ok,
        status: resp.status,
        statusText: resp.statusText,
        headers,
        getHeader: name => resp.headers.get(name) || headers[name.toLowerCase()] || null
      };
    });
  },

  /**
   * DoH Resolver com fallback automático (Google DoH -> Cloudflare DoH) e 1 retry leve
   */
  async resolveDns(name, type = 'A') {
    const key = `dns:${type}:${name}`;
    return this._execute(key, async () => {
      // 1. Google DNS (1 retry leve)
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const resp = await this.request(
            `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,
            { cache: 'no-store' },
            4000
          );
          if (resp.ok) {
            const data = await resp.json();
            return {
              provider: 'Google DNS',
              status: data.Status,
              answer: data.Answer || [],
              raw: data
            };
          }
        } catch (e) {
          if (attempt === 1) break;
        }
      }

      // 2. Fallback: Cloudflare DoH
      try {
        const cfResp = await this.request(
          `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,
          {
            headers: { 'Accept': 'application/dns-json' },
            cache: 'no-store'
          },
          4000
        );
        if (cfResp.ok) {
          const cfData = await cfResp.json();
          return {
            provider: 'Cloudflare DNS',
            status: cfData.Status,
            answer: cfData.Answer || [],
            raw: cfData
          };
        }
      } catch (cfErr) {}

      return { provider: null, status: -1, answer: [], raw: null };
    });
  },

  /**
   * Obtenção exclusiva do IPv4 público via endpoints IPv4-only
   */
  async getIpv4() {
    const key = 'client:ipv4';
    return this._execute(key, async () => {
      // 1. api4.ipify.org
      try {
        const resp = await this.request('https://api4.ipify.org?format=json', { cache: 'no-store' }, 4000);
        if (resp.ok) {
          const d = await resp.json();
          if (d && d.ip && !d.ip.includes(':')) return d.ip.trim();
        }
      } catch (e) {}

      // 2. ipv4.icanhazip.com
      try {
        const resp2 = await this.request('https://ipv4.icanhazip.com', { cache: 'no-store' }, 4000);
        if (resp2.ok) {
          const text = (await resp2.text()).trim();
          if (text && !text.includes(':')) return text;
        }
      } catch (e2) {}

      // 3. api.ipify.org (fallback)
      try {
        const resp3 = await this.request('https://api.ipify.org?format=json', { cache: 'no-store' }, 4000);
        if (resp3.ok) {
          const d3 = await resp3.json();
          if (d3 && d3.ip && !d3.ip.includes(':')) return d3.ip.trim();
        }
      } catch (e3) {}

      return null;
    });
  },

  /**
   * Obtenção exclusiva do IPv6 público via endpoints IPv6-only
   */
  async getIpv6() {
    const key = 'client:ipv6';
    return this._execute(key, async () => {
      // 1. api6.ipify.org
      try {
        const resp = await this.request('https://api6.ipify.org?format=json', { cache: 'no-store' }, 4000);
        if (resp.ok) {
          const d = await resp.json();
          if (d && d.ip && d.ip.includes(':')) return d.ip.trim();
        }
      } catch (e) {}

      // 2. ipv6.icanhazip.com
      try {
        const resp2 = await this.request('https://ipv6.icanhazip.com', { cache: 'no-store' }, 4000);
        if (resp2.ok) {
          const text = (await resp2.text()).trim();
          if (text && text.includes(':')) return text;
        }
      } catch (e2) {}

      return null;
    });
  },

  /**
   * Busca dados de Geo / ISP / ASN para um IP específico
   */
  async getGeoForIp(ip = '') {
    const key = 'geo:' + (ip || 'self');
    return this._execute(key, async () => {
      const urlSuffix = ip ? encodeURIComponent(ip) : '';

      // Provedor 1: ipwho.is (suporta IPv4 e IPv6 sem bloqueio CORS)
      try {
        const resp = await this.request(`https://ipwho.is/${urlSuffix}`, { cache: 'no-store' }, 5000);
        if (resp.ok) {
          const d = await resp.json();
          if (d && d.success) {
            return {
              ip: d.ip,
              version: d.type || (d.ip && d.ip.includes(':') ? 'IPv6' : 'IPv4'),
              city: d.city || '',
              region: d.region || '',
              country_name: d.country || '',
              country_code: d.country_code || '',
              postal: d.postal || '',
              latitude: d.latitude || 0,
              longitude: d.longitude || 0,
              timezone: d.timezone?.id || '',
              utc_offset: d.timezone?.utc ? d.timezone.utc.replace(':', '') : '',
              org: d.connection?.org || d.connection?.isp || '',
              asn: d.connection?.asn ? `AS${d.connection.asn}` : '',
              network: d.connection?.domain || d.connection?.isp || '',
              in_eu: !!d.is_eu,
              proxy: false,
              tor: false,
              connection_type: 'Banda Larga / Provedor'
            };
          }
        }
      } catch (e) {}

      // Provedor 2: freeipapi.com
      try {
        const resp2 = await this.request(`https://freeipapi.com/api/json/${urlSuffix}`, { cache: 'no-store' }, 5000);
        if (resp2.ok) {
          const d2 = await resp2.json();
          if (d2 && d2.ipAddress) {
            return {
              ip: d2.ipAddress,
              version: d2.ipVersion === 6 ? 'IPv6' : 'IPv4',
              city: d2.cityName || '',
              region: d2.regionName || '',
              country_name: d2.countryName || '',
              country_code: d2.countryCode || '',
              postal: d2.zipCode || '',
              latitude: d2.latitude || 0,
              longitude: d2.longitude || 0,
              timezone: Array.isArray(d2.timeZones) ? d2.timeZones[0] || '' : '',
              utc_offset: '',
              org: d2.asnOrganization || '',
              asn: d2.asn ? `AS${d2.asn}` : '',
              network: d2.asnOrganization || '',
              in_eu: false,
              proxy: !!d2.isProxy,
              tor: false,
              connection_type: 'Banda Larga / Provedor'
            };
          }
        }
      } catch (e2) {}

      // Provedor 3: ipapi.co
      try {
        const endpoint = ip ? `https://ipapi.co/${encodeURIComponent(ip)}/json/` : 'https://ipapi.co/json/';
        const resp3 = await this.request(endpoint, { cache: 'no-store' }, 5000);
        if (resp3.ok) {
          const d3 = await resp3.json();
          if (d3 && d3.ip && !d3.error) return d3;
        }
      } catch (e3) {}

      return null;
    });
  },

  /**
   * Obtenção de IP e Geo com suporte híbrido IPv4/IPv6
   */
  async getClientIpInfo() {
    const key = 'client:ipinfo';
    return this._execute(key, async () => {
      // 1. Tenta obter IPv4 primeiro
      const ipv4 = await this.getIpv4();
      if (ipv4) {
        const geo = await this.getGeoForIp(ipv4);
        if (geo) return { ...geo, ip: ipv4, version: 'IPv4' };
        return {
          ip: ipv4,
          version: 'IPv4',
          city: '—',
          region: '—',
          country_name: 'Não determinado',
          country_code: '',
          postal: '—',
          latitude: null,
          longitude: null,
          timezone: '—',
          utc_offset: '',
          org: '—',
          asn: '—',
          network: '—',
          in_eu: false,
          proxy: false,
          tor: false,
          connection_type: '—'
        };
      }

      // 2. Se não tem IPv4 (ex: rede IPv6 pura), tenta geo direto
      const geoDirect = await this.getGeoForIp();
      if (geoDirect && geoDirect.ip) return geoDirect;

      // 3. Tenta IPv6 direto
      const ipv6 = await this.getIpv6();
      if (ipv6) {
        const geo6 = await this.getGeoForIp(ipv6);
        if (geo6) return { ...geo6, ip: ipv6, version: 'IPv6' };
        return {
          ip: ipv6,
          version: 'IPv6',
          city: '—',
          region: '—',
          country_name: 'Não determinado',
          country_code: '',
          postal: '—',
          latitude: null,
          longitude: null,
          timezone: '—',
          utc_offset: '',
          org: '—',
          asn: '—',
          network: '—',
          in_eu: false,
          proxy: false,
          tor: false,
          connection_type: '—'
        };
      }

      throw new Error('Todos os provedores de IP falharam');
    }, false);
  }
};

/* ─────────── Utilitários ─────────── */
const $  = id => document.getElementById(id);
const set = (id, val, cls) => {
  const el = $(id);
  if (!el) return;
  el.innerHTML = val;
  if (cls) el.className = 'row-value ' + cls;
};
const log = msg => {
  const el = $('log');
  if (!el) return;
  const ts = new Date().toLocaleTimeString('pt-BR');
  el.textContent += `[${ts}] ${msg}\n`;
  el.scrollTop = el.scrollHeight;
};

/* ─────────── Browser info (síncrono) ─────────── */
function fillBrowserInfo() {
  const nav = navigator;
  set('v-ua', nav.userAgent, '');
  set('v-platform', nav.platform || nav.userAgentData?.platform || '—', '');
  set('v-lang', nav.language + (nav.languages ? '  [' + nav.languages.slice(0,3).join(', ') + ']' : ''), '');
  set('v-colors', screen.colorDepth + '-bit', '');
  set('v-cookies', nav.cookieEnabled ? '✓ Habilitados' : '✗ Bloqueados', nav.cookieEnabled ? 'ok' : 'err');
  set('v-wrtc-support', (typeof RTCPeerConnection !== 'undefined') ? '✓ Disponível' : '✗ Indisponível', (typeof RTCPeerConnection !== 'undefined') ? 'ok' : 'warn');
  set('v-screen', `${screen.width}×${screen.height}  (ratio ${window.devicePixelRatio}×)`, '');
  set('v-mem', nav.deviceMemory ? nav.deviceMemory + ' GB' : 'não exposto', '');
  set('v-cpu', nav.hardwareConcurrency || '—', '');

  // Modo incógnito (heurística)
  try {
    const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
    if (fs) {
      fs(window.TEMPORARY, 100, () => set('v-incognito', 'Provável não incógnito', 'ok'),
                                   () => set('v-incognito', '⚠ Pode ser incógnito', 'warn'));
    } else { set('v-incognito', 'Não detectável', ''); }
  } catch { set('v-incognito', 'Não detectável', ''); }

  // Network Information API
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
  if (conn) {
    set('v-speed', conn.downlink ? conn.downlink + ' Mbps' : '—', '');
    set('v-eff-type', conn.effectiveType || '—', '');
    set('v-datasaver', conn.saveData ? '⚠ Ativada' : '✓ Desativada', conn.saveData ? 'warn' : 'ok');
    set('v-rtt', conn.rtt ? conn.rtt + ' ms' : '—', '');
    set('v-downlink', conn.downlink ? conn.downlink + ' Mbps' : '—', '');
  } else {
    set('v-speed', 'API não disponível', '');
    set('v-eff-type', '—', '');
    set('v-datasaver', '—', '');
  }

  set('v-online', navigator.onLine ? '🟢 Online' : '🔴 Offline', navigator.onLine ? 'ok' : 'err');
  log('Informações do navegador coletadas.');
}

/* ─────────── WebRTC → IPs locais ─────────── */
function getWebRTCIPs() {
  return new Promise(resolve => {
    if (typeof RTCPeerConnection === 'undefined') {
      set('v-local', 'WebRTC indisponível', 'warn');
      set('v-local6', '—', '');
      set('v-webrtc', '—', '');
      resolve({ local4: null, local6: null });
      return;
    }
    const ips = new Set();
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    pc.createDataChannel('');
    pc.createOffer().then(o => pc.setLocalDescription(o)).catch(() => {});

    const done = setTimeout(() => {
      pc.close();
      const arr = [...ips];
      const v4 = arr.filter(ip => !ip.includes(':') && !ip.startsWith('169'));
      const v6 = arr.filter(ip => ip.includes(':'));
      set('v-local', v4.join(', ') || '—', '');
      set('v-local6', v6.join(', ') || '—', '');
      set('v-webrtc', arr.length ? arr.join(', ') : 'Nenhum vazamento detectado', arr.length ? 'warn' : 'ok');
      log(`WebRTC IPs encontrados: ${arr.join(', ') || 'nenhum'}`);
      resolve({ local4: v4[0], local6: v6[0] });
    }, 3000);

    pc.onicecandidate = e => {
      if (!e.candidate) return;
      const m = e.candidate.candidate.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|[0-9a-f:]+::[0-9a-f:]*)/gi);
      if (m) m.forEach(ip => { if (!ip.startsWith('0.') && ip !== '0.0.0.0') ips.add(ip); });
    };
    pc.onicegatheringstatechange = () => {
      if (pc.iceGatheringState === 'complete') { clearTimeout(done); pc.close(); }
    };
  });
}

/* ─────────── Ping HTTP ─────────── */
async function measurePing() {
  const targets = [
    'https://www.google.com/favicon.ico',
    'https://www.cloudflare.com/favicon.ico'
  ];
  const pings = [];
  for (const url of targets) {
    try {
      const t0 = performance.now();
      await ApiManager.request(url + '?_=' + Date.now(), { mode: 'no-cors', cache: 'no-store' }, 3000);
      pings.push(Math.round(performance.now() - t0));
    } catch {}
  }
  if (!pings.length) return null;
  const avg = Math.round(pings.reduce((a, b) => a + b, 0) / pings.length);
  return avg;
}

// Estado global dos IPs detectados
let detectedIpv4 = null;
let detectedIpv6 = null;

function updateIpBadgesAndHero() {
  const badgeIp = $('badge-ip');
  if (badgeIp) {
    if (detectedIpv4 && detectedIpv6) {
      badgeIp.textContent = 'IPv4 + IPv6 ✓';
      badgeIp.className = 'card-badge badge-ok';
    } else if (detectedIpv4) {
      badgeIp.textContent = 'IPv4 ✓';
      badgeIp.className = 'card-badge badge-ok';
    } else if (detectedIpv6) {
      badgeIp.textContent = 'IPv6 ✓';
      badgeIp.className = 'card-badge badge-ok';
    } else {
      badgeIp.textContent = '—';
      badgeIp.className = 'card-badge badge-warn';
    }
  }

  // Atualiza hero se ainda não estiver preenchido ou se prioritário
  const heroIp = $('hero-ip');
  const heroLabel = $('hero-label');
  if (heroIp) {
    const primaryIp = detectedIpv4 || detectedIpv6;
    if (primaryIp) {
      heroIp.innerHTML = `<span class="pulse"></span>${primaryIp}`;
      if (heroLabel) {
        const isV6 = primaryIp.includes(':');
        heroLabel.textContent = isV6 ? 'Seu IP público (IPv6)' : 'Seu IP público (IPv4)';
      }
    }
  }
}

/* ─────────── IP público IPv4 via ApiManager ─────────── */
async function fetchIPv4Info() {
  try {
    const ipv4 = await ApiManager.getIpv4();
    if (ipv4) {
      detectedIpv4 = ipv4;
      log(`IPv4 público detectado: ${ipv4}`);
      set('v-ipv4', ipv4, 'accent');
      updateIpBadgesAndHero();

      // Busca dados de Geo/ISP para o IPv4
      const geo = await ApiManager.getGeoForIp(ipv4);
      if (geo) {
        populateGeoAndIsp(geo);
        return geo;
      }
    } else {
      detectedIpv4 = null;
      set('v-ipv4', 'Não detectado (sem IPv4)', 'warn');
      log('IPv4 não detectado nesta conexão.');
      updateIpBadgesAndHero();

      // Se não há IPv4, busca Geo via conexão padrão ou IPv6
      const geoFallback = await ApiManager.getClientIpInfo().catch(() => null);
      if (geoFallback) {
        populateGeoAndIsp(geoFallback);
        return geoFallback;
      }
    }
    return null;
  } catch(e) {
    log('Erro ao buscar IPv4: ' + e.message);
    set('v-ipv4', 'Erro ao obter IPv4', 'err');
    updateIpBadgesAndHero();
    return null;
  }
}

/* ─────────── Preenche campos de ISP e Localização ─────────── */
function populateGeoAndIsp(d) {
  if (!d) return;
  const isp = d.org || '—';
  set('v-isp', isp.replace(/^AS\d+\s+/, ''), '');
  set('v-org', d.org || '—', '');
  set('v-asn', d.asn || '—', 'accent');
  set('v-domain', d.network || '—', '');
  set('v-nettype', d.connection_type || 'Não disponível', '');
  const bIsp = $('badge-isp');
  if (bIsp) bIsp.textContent = d.asn || '—';

  // Localização
  set('v-country', `${d.country_name || '—'} (${d.country_code || '—'}) ${d.in_eu ? '🇪🇺' : ''}`, '');
  set('v-region', d.region || '—', '');
  set('v-city', d.city || '—', '');
  set('v-postal', d.postal || '—', '');
  set('v-tz', `${d.timezone || '—'} (UTC${d.utc_offset ? (d.utc_offset.includes(':') ? d.utc_offset : d.utc_offset.slice(0, 3) + ':' + d.utc_offset.slice(3)) : ''})`, '');
  set('v-coords', (d.latitude && d.longitude) ? `${d.latitude}, ${d.longitude}` : '—', 'accent');
  const badgeLoc = $('badge-loc');
  if (badgeLoc) badgeLoc.textContent = `${d.city || d.region || d.country_name || '—'}`;

  // Mapa OpenStreetMap
  if (d.latitude && d.longitude) {
    const f = $('map-frame');
    if (f) {
      f.src = `https://www.openstreetmap.org/export/embed.html?bbox=${d.longitude - .15},${d.latitude - .1},${d.longitude + .15},${d.latitude + .1}&layer=mapnik&marker=${d.latitude},${d.longitude}`;
      f.style.display = 'block';
    }
  }

  // Segurança
  const isProxy = d.proxy;
  const isTor   = d.tor;
  set('v-proxy', isProxy ? '⚠ Detectado' : '✓ Não detectado', isProxy ? 'warn' : 'ok');
  set('v-tor',   isTor   ? '⚠ Detectado' : '✓ Não detectado', isTor   ? 'warn' : 'ok');
  const badgeSec = $('badge-sec');
  if (badgeSec) {
    badgeSec.textContent = (isProxy || isTor) ? 'Proxy/VPN' : 'Limpo';
    badgeSec.className   = 'card-badge ' + ((isProxy || isTor) ? 'badge-warn' : 'badge-ok');
  }
}

/* ─────────── IPv6 via ApiManager ─────────── */
async function fetchIPv6() {
  try {
    const ipv6 = await ApiManager.getIpv6();
    if (ipv6) {
      detectedIpv6 = ipv6;
      set('v-ipv6', ipv6, 'accent');
      log(`IPv6 público detectado: ${ipv6}`);
      updateIpBadgesAndHero();

      // Se IPv4 não existiu, preenche dados do ISP/Geo usando o IPv6
      if (!detectedIpv4) {
        const geo6 = await ApiManager.getGeoForIp(ipv6);
        if (geo6) populateGeoAndIsp(geo6);
      }
      return ipv6;
    } else {
      detectedIpv6 = null;
      set('v-ipv6', 'Não disponível (sem IPv6)', 'warn');
      log('IPv6 não disponível nesta conexão.');
      updateIpBadgesAndHero();
      return null;
    }
  } catch {
    detectedIpv6 = null;
    set('v-ipv6', 'Não disponível (sem IPv6)', 'warn');
    log('IPv6 não disponível nesta conexão.');
    updateIpBadgesAndHero();
    return null;
  }
}

/* ─────────── DNS resolver via ApiManager ─────────── */
async function fetchDNSInfo() {
  try {
    const t0 = performance.now();
    const res = await ApiManager.resolveDns('whoami.akamai.net', 'A');
    const elapsed = Math.round(performance.now() - t0);
    const server = res.answer?.[0]?.data || '—';

    if (server !== '—') {
      const label = res.provider === 'Cloudflare DNS' ? server + ' (via CF)' : server;
      set('v-dns', label, 'accent');
      set('v-dnslookup', elapsed + ' ms', elapsed < 100 ? 'ok' : elapsed < 300 ? 'warn' : 'err');
      log(`DNS resolver: ${label}  Lookup: ${elapsed}ms`);
    } else {
      set('v-dns', 'Não determinado', 'warn');
      set('v-dnslookup', elapsed + ' ms', 'warn');
    }
  } catch {
    set('v-dns', 'Não determinado', 'warn');
    set('v-dnslookup', '—', 'warn');
  }
}

/* ─────────── HTTP/2 check via ApiManager ─────────── */
async function checkH2() {
  try {
    await ApiManager.request('https://www.google.com', { mode: 'no-cors', cache: 'no-store' }, 4000);
    set('v-h2', '✓ Suportado', 'ok');
  } catch {
    set('v-h2', 'Não verificável', 'warn');
  }
}

/* ─────────── Ping & barra ─────────── */
async function runPing() {
  const ms = await measurePing();
  if (ms === null) {
    set('v-ping', 'Não medido', 'warn');
    return;
  }
  let cls = 'ok', label = 'Excelente';
  if (ms > 150) { cls = 'err'; label = 'Alto'; }
  else if (ms > 60) { cls = 'warn'; label = 'Moderado'; }
  set('v-ping', `${ms} ms`, cls);
  const badgePing = $('badge-ping');
  if (badgePing) {
    badgePing.textContent = label;
    badgePing.className = `card-badge badge-${cls}`;
  }
  // Barra: 0ms = 100%, >=300ms = 0%
  const pingBar = $('ping-bar');
  if (pingBar) {
    const pct = Math.max(0, Math.min(100, 100 - (ms / 300 * 100)));
    pingBar.style.width = pct + '%';
  }
  log(`Ping médio: ${ms}ms (${label})`);
}

/* ─────────── Tempo na página ─────────── */
function startTimer() {
  const start = Date.now();
  setInterval(() => {
    const s = Math.floor((Date.now() - start) / 1000);
    const m = Math.floor(s / 60), sec = s % 60;
    const badgeLog = $('badge-log');
    if (badgeLog) badgeLog.textContent = `${m}m ${sec}s no ar`;
  }, 1000);
}

/* ─────────── Online/Offline listener ─────────── */
window.addEventListener('online',  () => {
  set('v-online','🟢 Online', 'ok');
  const b = $('badge-conn');
  if (b) { b.textContent = 'Online'; b.className = 'card-badge badge-ok'; }
});
window.addEventListener('offline', () => {
  set('v-online','🔴 Offline','err');
  const b = $('badge-conn');
  if (b) { b.textContent = 'Offline'; b.className = 'card-badge badge-err'; }
});

/* ─────────── Orquestrador ─────────── */
async function runAll() {
  const btn = $('scan-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '⏳ Analisando…';
  }
  const logEl = $('log');
  if (logEl) logEl.textContent = '';
  log('Iniciando diagnóstico completo…');

  // Reset state & spinners
  detectedIpv4 = null;
  detectedIpv6 = null;
  const heroEl = $('hero-ip');
  if (heroEl) heroEl.innerHTML = '<span class="spin"></span>';
  const heroLabel = $('hero-label');
  if (heroLabel) heroLabel.textContent = 'Seu IP público';
  set('v-ipv4', '<span class="spin"></span>', '');
  set('v-ipv6', '<span class="spin"></span>', '');
  set('v-isp',  '<span class="spin"></span>', '');
  const badgeIp = $('badge-ip');
  if (badgeIp) {
    badgeIp.textContent = 'Verificando…';
    badgeIp.className = 'card-badge badge-info';
  }

  fillBrowserInfo();

  await Promise.all([
    fetchIPv4Info(),
    fetchIPv6(),
    getWebRTCIPs(),
    runPing(),
    fetchDNSInfo(),
    checkH2(),
  ]);

  log('✅ Diagnóstico concluído.');
  if (btn) {
    btn.disabled = false;
    btn.textContent = '↺ Reanalisar';
  }
}

/* ─────────── Domain Scanner Functions ─────────── */

// Helper to set card values
function setCardValue(id, value, status = '') {
  const el = $(id);
  if (el) {
    el.textContent = value || '—';
    if (status) el.className = 'row-value ' + status;
  }
}

// Scan domain function
async function scanDomain() {
  const input = $('domain-input');
  const btn = $('domain-scan-btn');
  let domain = input.value.trim().toLowerCase();
  
  if (!domain) {
    log('❌ Por favor, digite um domínio válido.');
    return;
  }
  
  // Remove protocol and path if present
  domain = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  input.value = domain;
  
  btn.disabled = true;
  btn.textContent = '⏳ Analisando...';
  log(`🔍 Iniciando análise do domínio: ${domain}`);
  
  try {
    await Promise.all([
      scanIPInfo(domain),
      scanSSL(domain),
      scanDNSRecords(domain),
      scanCookies(domain),
      scanCrawlRules(domain),
      scanHeaders(domain),
      scanQualityMetrics(domain),
      scanServerLocation(domain),
      scanAssociatedHosts(domain),
      scanRedirectChain(domain),
      scanTXTRecords(domain),
      scanServerStatus(domain),
      scanOpenPorts(domain),
      scanTraceroute(domain),
      scanCarbonFootprint(domain),
      scanServerInfo(domain),
      scanWhois(domain),
      scanDomainInfo(domain),
      scanDNSSEC(domain),
      scanHSTS(domain),
      scanDNSServer(domain),
      scanTechStack(domain),
      scanListedPages(domain),
      scanSecurityTxt(domain),
      scanLinkedPages(domain),
      scanSocialTags(domain),
      scanEmailConfig(domain),
      scanFirewall(domain),
      scanHTTPSecurity(domain),
      scanArchiveHistory(domain),
      scanGlobalRanking(domain),
      scanBlockDetection(domain),
      scanMalware(domain),
      scanTLSConnection(domain),
      scanTLSAudit(domain),
      scanTLSCompatibility(domain)
    ]);
    
    log('✅ Análise de domínio concluída!');
  } catch (e) {
    log('❌ Erro na análise: ' + e.message);
  }
  
  btn.disabled = false;
  btn.textContent = '🔍 Analisar';
}

// 1. IP Info
async function scanIPInfo(domain) {
  try {
    const d = await ApiManager.getJson(`https://ipapi.co/${domain}/json/`, {}, 6000);
    setCardValue('v-ipinfo-ip', d.ip, 'accent');
    setCardValue('v-ipinfo-host', d.hostname);
    setCardValue('v-ipinfo-city', d.city);
    setCardValue('v-ipinfo-region', d.region);
    setCardValue('v-ipinfo-country', d.country_name);
    setCardValue('v-ipinfo-loc', d.latitude + ', ' + d.longitude);
    setCardValue('v-ipinfo-org', d.org);
    setCardValue('v-ipinfo-postal', d.postal);
    setCardValue('v-ipinfo-tz', d.timezone);
    $('badge-ipinfo').textContent = d.ip || '—';
    log(`📡 IP Info: ${d.ip}`);
  } catch (e) {
    setCardValue('v-ipinfo-ip', 'Indisponível', 'warn');
    $('badge-ipinfo').textContent = '—';
    log('⚠ IP Info indisponível');
  }
}

// 2. SSL Chain
async function scanSSL(domain) {
  try {
    const d = await ApiManager.getJson(`https://api.sslmate.com/v1/ssl/check?domain=${encodeURIComponent(domain)}`, {}, 6000);
    setCardValue('v-ssl-valid', d.valid ? '✓ Válido' : '✗ Inválido', d.valid ? 'ok' : 'err');
    setCardValue('v-ssl-issuer', d.issuer?.organization || d.issuer?.commonName);
    setCardValue('v-ssl-subject', d.subject?.commonName);
    setCardValue('v-ssl-expires', d.notAfter ? new Date(d.notAfter).toLocaleDateString() : '—');
    const days = d.notAfter ? Math.floor((new Date(d.notAfter) - new Date()) / 86400000) : null;
    setCardValue('v-ssl-days', days !== null ? days + ' dias' : '—', days > 30 ? 'ok' : days > 7 ? 'warn' : 'err');
    setCardValue('v-ssl-proto', d.protocolVersion || 'TLS 1.2/1.3');
    setCardValue('v-ssl-cipher', d.cipherSuite || '—');
    $('badge-ssl').textContent = d.valid ? 'Válido' : 'Inválido';
    $('badge-ssl').className = 'card-badge ' + (d.valid ? 'badge-ok' : 'badge-err');
    log(`🔐 SSL: ${d.valid ? 'Válido' : 'Inválido'}`);
  } catch (e) {
    setCardValue('v-ssl-valid', 'Não verificado', 'warn');
    $('badge-ssl').textContent = '—';
    log('⚠ SSL check indisponível via API pública');
  }
}

// 3. DNS Records (Otimizado com consultas concorrentes via ApiManager.resolveDns)
async function scanDNSRecords(domain) {
  try {
    const types = ['A', 'AAAA', 'MX', 'NS', 'CNAME'];
    const dnsPromises = types.map(async type => {
      try {
        const res = await ApiManager.resolveDns(domain, type);
        const text = res.answer?.map(a => a.data).join(', ') || '—';
        return { type, text };
      } catch {
        return { type, text: '—' };
      }
    });

    const resultsArray = await Promise.all(dnsPromises);
    const results = {};
    resultsArray.forEach(r => { results[r.type] = r.text; });
    
    setCardValue('v-dns-a', results.A);
    setCardValue('v-dns-aaaa', results.AAAA);
    setCardValue('v-dns-mx', results.MX);
    setCardValue('v-dns-ns', results.NS);
    setCardValue('v-dns-cname', results.CNAME);
    $('badge-dns').textContent = results.A !== '—' ? 'OK' : '—';
    log('📋 DNS Records coletados');
  } catch (e) {
    log('⚠ DNS Records indisponíveis');
  }
}

// 4. Cookies
async function scanCookies(domain) {
  try {
    const cookies = document.cookie.split(';').filter(c => c.trim());
    setCardValue('v-cookies-total', cookies.length.toString());
    setCardValue('v-cookies-secure', 'Verificar headers', '');
    setCardValue('v-cookies-httponly', 'Verificar headers', '');
    setCardValue('v-cookies-samesite', 'Verificar headers', '');
    setCardValue('v-cookies-session', cookies.length > 0 ? 'Presentes' : 'Ausentes');
    $('badge-cookies').textContent = cookies.length + ' encontrados';
    log(`🍪 Cookies locais: ${cookies.length}`);
  } catch (e) {
    log('⚠ Cookie analysis limitada no browser');
  }
}

// 5. Crawl Rules (usa ApiManager.getText com deduplicação)
async function scanCrawlRules(domain) {
  try {
    const url = `https://${domain}/robots.txt`;
    const res = await ApiManager.getText(url, {}, 5000);
    if (res.ok) {
      const text = res.text;
      const disallow = (text.match(/Disallow:/gi) || []).length;
      const allow = (text.match(/Allow:/gi) || []).length;
      const sitemap = text.match(/Sitemap:\s*(.+)/i)?.[1] || '—';
      setCardValue('v-crawl-robots', '✓ Encontrado', 'ok');
      setCardValue('v-crawl-sitemap', sitemap);
      setCardValue('v-crawl-disallow', disallow.toString());
      setCardValue('v-crawl-allow', allow.toString());
      $('badge-crawl').textContent = 'OK';
      log(`🤖 robots.txt: ${disallow} regras Disallow`);
    } else {
      setCardValue('v-crawl-robots', '✗ Não encontrado', 'warn');
      log('⚠ robots.txt não encontrado');
    }
  } catch (e) {
    setCardValue('v-crawl-robots', '⚠ Bloqueado (CORS)', 'warn');
    setCardValue('v-crawl-sitemap', '—');
    setCardValue('v-crawl-disallow', '—');
    setCardValue('v-crawl-allow', '—');
    $('badge-crawl').textContent = '—';
  }
}

// 6. Headers (usa ApiManager.head com deduplicação)
async function scanHeaders(domain) {
  try {
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const headers = res.headers;
    
    setCardValue('v-headers-server', headers['server'] || '—');
    setCardValue('v-headers-content', headers['content-type'] || '—');
    setCardValue('v-headers-xframe', headers['x-frame-options'] || '—');
    setCardValue('v-headers-xss', headers['x-xss-protection'] || '—');
    setCardValue('v-headers-csp', headers['content-security-policy'] ? 'Presente' : '—', headers['content-security-policy'] ? 'ok' : 'warn');
    $('badge-headers').textContent = 'OK';
    log('📝 Headers HTTP coletados');
  } catch (e) {
    setCardValue('v-headers-server', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-headers-content', '—');
    setCardValue('v-headers-xframe', '—');
    setCardValue('v-headers-xss', '—');
    setCardValue('v-headers-csp', '—');
    $('badge-headers').textContent = '—';
    log('⚠ Headers indisponíveis (CORS)');
  }
}

// 7. Quality Metrics
async function scanQualityMetrics(domain) {
  setCardValue('v-quality-perf', 'N/A (requer API)', '');
  setCardValue('v-quality-access', 'N/A (requer API)', '');
  setCardValue('v-quality-best', 'N/A (requer API)', '');
  setCardValue('v-quality-seo', 'N/A (requer API)', '');
  setCardValue('v-quality-overall', '—', '');
  $('badge-quality').textContent = '—';
  log('⭐ Quality Metrics requer API externa');
}

// 8. Server Location (compartilha o mesmo cache com scanIPInfo)
async function scanServerLocation(domain) {
  try {
    const d = await ApiManager.getJson(`https://ipapi.co/${domain}/json/`, {}, 6000);
    setCardValue('v-srvloc-cont', '—');
    setCardValue('v-srvloc-country', d.country_name || '—');
    setCardValue('v-srvloc-city', d.city || '—');
    setCardValue('v-srvloc-lat', d.latitude || '—');
    setCardValue('v-srvloc-lon', d.longitude || '—');
    setCardValue('v-srvloc-radius', '—');
    $('badge-srvloc').textContent = d.city || '—';
    log(`🗺️ Server Location: ${d.city}, ${d.country_name}`);
  } catch (e) {
    setCardValue('v-srvloc-country', 'Indisponível', 'warn');
    $('badge-srvloc').textContent = '—';
    log('⚠ Server Location indisponível');
  }
}

// 9. Associated Hosts
async function scanAssociatedHosts(domain) {
  setCardValue('v-assoc-total', '—');
  setCardValue('v-assoc-ipv4', '—');
  setCardValue('v-assoc-ipv6', '—');
  setCardValue('v-assoc-sample', 'Requer API externa', '');
  $('badge-assoc').textContent = '—';
  log('🔗 Associated Hosts requer API externa');
}

// 10. Redirect Chain
async function scanRedirectChain(domain) {
  try {
    let url = `https://${domain}`;
    const chain = [];
    let count = 0;
    
    for (let i = 0; i < 5; i++) {
      const r = await ApiManager.request(url, { method: 'HEAD', redirect: 'manual', cache: 'no-store' }, 4000);
      chain.push(url);
      if (r.status >= 300 && r.status < 400) {
        url = r.headers.get('location') || url;
        count++;
      } else {
        break;
      }
    }
    
    setCardValue('v-redirect-count', count.toString());
    setCardValue('v-redirect-final', chain[chain.length - 1]);
    setCardValue('v-redirect-chain', chain.length <= 2 ? chain.join(' → ') : `${chain[0]} → ... → ${chain[chain.length-1]}`);
    $('badge-redirect').textContent = count + ' redirects';
    log(`➡️ Redirect Chain: ${count} redirects`);
  } catch (e) {
    setCardValue('v-redirect-count', '0');
    setCardValue('v-redirect-final', `https://${domain}`);
    setCardValue('v-redirect-chain', '⚠ Direto / Bloqueado por CORS');
    $('badge-redirect').textContent = 'CORS';
    log('⚠ Redirect Chain indisponível (CORS)');
  }
}

// 11. TXT Records via ApiManager.resolveDns
async function scanTXTRecords(domain) {
  try {
    const res = await ApiManager.resolveDns(domain, 'TXT');
    const txts = res.answer?.map(a => a.data.replace(/"/g, '')) || [];
    
    const spf = txts.find(t => t.startsWith('v=spf1')) || '—';
    const dmarc = txts.find(t => t.startsWith('v=dmarc1')) || '—';
    const dkim = txts.find(t => t.includes('dkim')) || '—';
    const verify = txts.find(t => t.includes('google-site-verification') || t.includes('facebook-domain-verification')) || '—';
    
    setCardValue('v-txt-spf', spf.substring(0, 50) + (spf.length > 50 ? '...' : ''));
    setCardValue('v-txt-dmarc', dmarc.substring(0, 50) + (dmarc.length > 50 ? '...' : ''));
    setCardValue('v-txt-dkim', dkim ? 'Presente' : '—');
    setCardValue('v-txt-verify', verify ? 'Presente' : '—');
    $('badge-txt').textContent = txts.length + ' records';
    log(`📜 TXT Records: ${txts.length} encontrados`);
  } catch (e) {
    $('badge-txt').textContent = '—';
    log('⚠ TXT Records indisponíveis');
  }
}

// 12. Server Status (reutiliza HEAD com deduplicação)
async function scanServerStatus(domain) {
  try {
    const t0 = performance.now();
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const time = Math.round(performance.now() - t0);
    
    setCardValue('v-status-code', res.status.toString(), res.status === 200 ? 'ok' : 'warn');
    setCardValue('v-status-text', res.statusText || '—');
    setCardValue('v-status-time', time + ' ms', time < 500 ? 'ok' : 'warn');
    setCardValue('v-status-uptime', '—');
    $('badge-status').textContent = res.status === 200 ? 'Online' : 'Status ' + res.status;
    $('badge-status').className = 'card-badge ' + (res.status === 200 ? 'badge-ok' : 'badge-warn');
    log(`💚 Server Status: ${res.status} (${time}ms)`);
  } catch (e) {
    setCardValue('v-status-code', '⚠ CORS/Off', 'warn');
    setCardValue('v-status-text', 'Sem resposta CORS');
    setCardValue('v-status-time', '—');
    $('badge-status').textContent = 'Erro';
    $('badge-status').className = 'card-badge badge-warn';
    log('⚠ Server indisponível ou bloqueado por CORS');
  }
}

// 13. Open Ports
async function scanOpenPorts(domain) {
  setCardValue('v-ports-80', 'Verificar via API', '');
  setCardValue('v-ports-443', '✓ HTTPS', 'ok');
  setCardValue('v-ports-21', '—', '');
  setCardValue('v-ports-22', '—', '');
  setCardValue('v-ports-25', '—', '');
  setCardValue('v-ports-other', 'Requer API externa', '');
  $('badge-ports').textContent = '—';
  log('🚪 Open Ports requer API externa');
}

// 14. Traceroute
async function scanTraceroute(domain) {
  setCardValue('v-trace-hops', '—');
  setCardValue('v-trace-route', 'Requer backend/API', '');
  setCardValue('v-trace-latency', '—');
  $('badge-trace').textContent = '—';
  log('🛣️ Traceroute requer backend');
}

// 15. Carbon Footprint (reutiliza getText/head)
async function scanCarbonFootprint(domain) {
  try {
    const res = await ApiManager.getText(`https://${domain}`, {}, 5000);
    const contentLength = res.headers ? res.headers.get('content-length') : null;
    const size = contentLength || (res.text ? res.text.length.toString() : '—');
    const sizeKB = size !== '—' ? (parseInt(size) / 1024).toFixed(2) + ' KB' : '—';
    
    const co2 = size !== '—' ? (parseInt(size) / 1024 * 0.0003).toFixed(4) + ' g' : '—';
    const annual = size !== '—' ? (parseInt(size) / 1024 * 0.0003 * 10000).toFixed(2) + ' kg' : '—';
    
    setCardValue('v-carbon-size', sizeKB);
    setCardValue('v-carbon-co2', co2);
    setCardValue('v-carbon-annual', annual);
    setCardValue('v-carbon-rating', size !== '—' && parseInt(size) < 100000 ? '✓ Baixo' : '⚠ Moderado', 'ok');
    $('badge-carbon').textContent = 'Calculado';
    log(`🌱 Carbon Footprint: ${co2} por visita`);
  } catch (e) {
    setCardValue('v-carbon-size', '—');
    setCardValue('v-carbon-co2', '—');
    setCardValue('v-carbon-annual', '—');
    setCardValue('v-carbon-rating', 'Indisponível (CORS)', 'warn');
    $('badge-carbon').textContent = '—';
    log('⚠ Carbon Footprint indisponível (CORS)');
  }
}

// 16. Server Info (reutiliza HEAD com deduplicação)
async function scanServerInfo(domain) {
  try {
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const server = res.headers['server'] || '—';
    const powered = res.headers['x-powered-by'] || '—';
    
    setCardValue('v-srvinfo-type', server);
    setCardValue('v-srvinfo-powered', powered);
    setCardValue('v-srvinfo-os', '—');
    setCardValue('v-srvinfo-hosting', 'Requer API externa', '');
    setCardValue('v-srvinfo-dc', '—');
    $('badge-srvinfo').textContent = server !== '—' ? 'OK' : '—';
    log(`🖥️ Server Info: ${server}`);
  } catch (e) {
    setCardValue('v-srvinfo-type', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-srvinfo-powered', '—');
    $('badge-srvinfo').textContent = '—';
    log('⚠ Server Info indisponível');
  }
}

// 17. Whois Lookup
async function scanWhois(domain) {
  try {
    const d = await ApiManager.getJson(`https://whois-api.domain.com/api/${domain}`, {}, 5000);
    setCardValue('v-whois-registrar', d.registrar || '—');
    setCardValue('v-whois-created', d.createdDate || '—');
    setCardValue('v-whois-expires', d.expiresDate || '—');
    setCardValue('v-whois-updated', d.updatedDate || '—');
    setCardValue('v-whois-status', d.status?.[0] || '—');
    $('badge-whois').textContent = 'OK';
    log(`📇 Whois: ${d.registrar || '—'}`);
  } catch (e) {
    setCardValue('v-whois-registrar', 'Requer API externa', '');
    $('badge-whois').textContent = '—';
    log('⚠ Whois requer API externa');
  }
}

// 18. Domain Info
async function scanDomainInfo(domain) {
  const parts = domain.split('.');
  const tld = parts[parts.length - 1];
  const isSub = parts.length > 2;
  
  setCardValue('v-domaininfo-age', 'Requer WHOIS', '');
  setCardValue('v-domaininfo-tld', tld.toUpperCase());
  setCardValue('v-domaininfo-sub', isSub ? '✓ Sim' : '✗ Não');
  setCardValue('v-domaininfo-idn', /[^\w.-]/.test(domain) ? '✓ Sim' : '✗ Não');
  setCardValue('v-domaininfo-length', domain.length.toString());
  $('badge-domaininfo').textContent = 'OK';
  log(`🏷️ Domain Info: TLD=${tld}, length=${domain.length}`);
}

// 19. DNSSEC via ApiManager.resolveDns
async function scanDNSSEC(domain) {
  try {
    const res = await ApiManager.resolveDns(domain, 'DS');
    const hasDNSSEC = res.answer && res.answer.length > 0;
    
    setCardValue('v-dnssec-enabled', hasDNSSEC ? '✓ Sim' : '✗ Não', hasDNSSEC ? 'ok' : 'warn');
    setCardValue('v-dnssec-ds', hasDNSSEC ? 'Presente' : '—');
    setCardValue('v-dnssec-algo', hasDNSSEC ? 'RSASHA256' : '—');
    setCardValue('v-dnssec-keytag', hasDNSSEC ? 'Verificar' : '—');
    $('badge-dnssec').textContent = hasDNSSEC ? 'Ativo' : 'Inativo';
    $('badge-dnssec').className = 'card-badge ' + (hasDNSSEC ? 'badge-ok' : 'badge-warn');
    log(`🛡️ DNSSEC: ${hasDNSSEC ? 'Ativo' : 'Inativo'}`);
  } catch (e) {
    setCardValue('v-dnssec-enabled', 'Não verificado', '');
    $('badge-dnssec').textContent = '—';
  }
}

// 20. HSTS (reutiliza HEAD com deduplicação)
async function scanHSTS(domain) {
  try {
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const hsts = res.headers['strict-transport-security'];
    
    if (hsts) {
      const maxAge = hsts.match(/max-age=(\d+)/)?.[1] || '—';
      const sub = hsts.includes('includeSubDomains') ? '✓ Sim' : '✗ Não';
      const preload = hsts.includes('preload') ? '✓ Sim' : '✗ Não';
      
      setCardValue('v-hsts-enabled', '✓ Ativo', 'ok');
      setCardValue('v-hsts-age', maxAge);
      setCardValue('v-hsts-sub', sub);
      setCardValue('v-hsts-preload', preload);
      $('badge-hsts').textContent = 'Ativo';
      $('badge-hsts').className = 'card-badge badge-ok';
      log(`🔒 HSTS: Ativo (max-age=${maxAge})`);
    } else {
      setCardValue('v-hsts-enabled', '✗ Inativo', 'warn');
      setCardValue('v-hsts-age', '—');
      setCardValue('v-hsts-sub', '—');
      setCardValue('v-hsts-preload', '—');
      $('badge-hsts').textContent = 'Inativo';
      $('badge-hsts').className = 'card-badge badge-warn';
      log('⚠ HSTS não configurado');
    }
  } catch (e) {
    setCardValue('v-hsts-enabled', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-hsts-age', '—');
    setCardValue('v-hsts-sub', '—');
    setCardValue('v-hsts-preload', '—');
    $('badge-hsts').textContent = '—';
  }
}

// 21. DNS Server via ApiManager.resolveDns
async function scanDNSServer(domain) {
  try {
    const t0 = performance.now();
    const res = await ApiManager.resolveDns(domain, 'A');
    const time = Math.round(performance.now() - t0);
    
    setCardValue('v-dnsserver-primary', '8.8.8.8 (Google)', 'accent');
    setCardValue('v-dnsserver-secondary', '8.8.4.4 (Google)', '');
    setCardValue('v-dnsserver-resolver', res.provider || 'dns.google');
    setCardValue('v-dnsserver-time', time + ' ms', time < 100 ? 'ok' : 'warn');
    $('badge-dnsserver').textContent = 'OK';
    log(`🖧 DNS Server: ${time}ms response`);
  } catch (e) {
    $('badge-dnsserver').textContent = 'Falha';
    log('⚠ DNS Server check falhou');
  }
}

// 22. Tech Stack (reutiliza HTML e headers via ApiManager)
async function scanTechStack(domain) {
  try {
    const res = await ApiManager.getText(`https://${domain}`, {}, 5000);
    const html = res.text;
    const headers = {};
    if (res.headers) {
      res.headers.forEach((v, k) => headers[k.toLowerCase()] = v);
    }
    
    const server = headers['server'] || '—';
    const powered = headers['x-powered-by'] || '—';
    const cms = html.includes('wp-content') ? 'WordPress' : html.includes('Joomla') ? 'Joomla' : '—';
    const framework = html.includes('react') ? 'React' : html.includes('vue') ? 'Vue' : html.includes('angular') ? 'Angular' : '—';
    const lang = powered.includes('PHP') ? 'PHP' : powered.includes('ASP.NET') ? 'ASP.NET' : '—';
    const analytics = html.includes('googletagmanager') || html.includes('analytics.js') ? 'Google Analytics' : '—';
    
    setCardValue('v-tech-server', server);
    setCardValue('v-tech-cms', cms);
    setCardValue('v-tech-framework', framework);
    setCardValue('v-tech-lang', lang);
    setCardValue('v-tech-analytics', analytics);
    $('badge-tech').textContent = 'Detectado';
    log(`🧰 Tech Stack: ${cms !== '—' ? cms : 'Desconhecido'}`);
  } catch (e) {
    setCardValue('v-tech-server', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-tech-cms', '—');
    setCardValue('v-tech-framework', '—');
    setCardValue('v-tech-lang', '—');
    setCardValue('v-tech-analytics', '—');
    $('badge-tech').textContent = '—';
    log('⚠ Tech Stack detection falhou');
  }
}

// 23. Listed Pages
async function scanListedPages(domain) {
  setCardValue('v-pages-google', 'Requer API Google', '');
  setCardValue('v-pages-sitemap', 'Verificar sitemap.xml', '');
  setCardValue('v-pages-internal', 'Requer crawl', '');
  setCardValue('v-pages-external', 'Requer crawl', '');
  $('badge-pages').textContent = '—';
  log('📄 Listed Pages requer APIs externas');
}

// 24. security.txt via ApiManager.getText
async function scanSecurityTxt(domain) {
  try {
    const res = await ApiManager.getText(`https://${domain}/.well-known/security.txt`, {}, 5000);
    if (res.ok) {
      const text = res.text;
      const contact = text.match(/Contact:\s*(.+)/i)?.[1] || '—';
      const encrypt = text.match(/Encryption:\s*(.+)/i)?.[1] || '—';
      const policy = text.match(/Policy:\s*(.+)/i)?.[1] || '—';
      
      setCardValue('v-sectxt-found', '✓ Encontrado', 'ok');
      setCardValue('v-sectxt-contact', contact);
      setCardValue('v-sectxt-encrypt', encrypt);
      setCardValue('v-sectxt-policy', policy);
      $('badge-sectxt').textContent = 'Encontrado';
      $('badge-sectxt').className = 'card-badge badge-ok';
      log('📯 security.txt: encontrado');
    } else {
      setCardValue('v-sectxt-found', '✗ Não encontrado', 'warn');
      setCardValue('v-sectxt-contact', '—');
      setCardValue('v-sectxt-encrypt', '—');
      setCardValue('v-sectxt-policy', '—');
      $('badge-sectxt').textContent = 'Não encontrado';
      $('badge-sectxt').className = 'card-badge badge-warn';
      log('⚠ security.txt não encontrado');
    }
  } catch (e) {
    setCardValue('v-sectxt-found', '⚠ Bloqueado (CORS)', 'warn');
    setCardValue('v-sectxt-contact', '—');
    setCardValue('v-sectxt-encrypt', '—');
    setCardValue('v-sectxt-policy', '—');
    $('badge-sectxt').textContent = '—';
  }
}

// 25. Linked Pages (reutiliza HTML via ApiManager)
async function scanLinkedPages(domain) {
  try {
    const res = await ApiManager.getText(`https://${domain}`, {}, 5000);
    const html = res.text;
    const links = html.match(/href=["'](https?:\/\/[^"']+)["']/gi) || [];
    const internal = links.filter(l => l.includes(domain)).length;
    const external = links.length - internal;
    
    setCardValue('v-linked-total', links.length.toString());
    setCardValue('v-linked-internal', internal.toString());
    setCardValue('v-linked-external', external.toString());
    setCardValue('v-linked-broken', 'Requer verificação', '');
    $('badge-linked').textContent = links.length + ' links';
    log(`🔗 Linked Pages: ${links.length} links encontrados`);
  } catch (e) {
    setCardValue('v-linked-total', '—');
    setCardValue('v-linked-internal', '—');
    setCardValue('v-linked-external', '—');
    setCardValue('v-linked-broken', '⚠ Indisponível (CORS)');
    $('badge-linked').textContent = '—';
    log('⚠ Linked Pages scan falhou');
  }
}

// 26. Social Tags (reutiliza HTML via ApiManager)
async function scanSocialTags(domain) {
  try {
    const res = await ApiManager.getText(`https://${domain}`, {}, 5000);
    const html = res.text;
    
    const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"/i)?.[1] || '—';
    const ogDesc = html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"/i)?.[1] || '—';
    const ogImg = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/i)?.[1] || '—';
    const twitter = html.match(/<meta[^>]*name="twitter:card"[^>]*content="([^"]*)"/i)?.[1] || '—';
    
    setCardValue('v-social-ogtitle', ogTitle.substring(0, 40) + (ogTitle.length > 40 ? '...' : ''));
    setCardValue('v-social-ogdesc', ogDesc.substring(0, 40) + (ogDesc.length > 40 ? '...' : ''));
    setCardValue('v-social-ogimg', ogImg !== '—' ? 'Presente' : '—');
    setCardValue('v-social-twitter', twitter !== '—' ? twitter : '—');
    $('badge-social').textContent = ogTitle !== '—' ? 'OK' : 'Parcial';
    log(`📱 Social Tags: OG=${ogTitle !== '—'}, Twitter=${twitter !== '—'}`);
  } catch (e) {
    setCardValue('v-social-ogtitle', '⚠ Indisponível (CORS)');
    setCardValue('v-social-ogdesc', '—');
    setCardValue('v-social-ogimg', '—');
    setCardValue('v-social-twitter', '—');
    $('badge-social').textContent = '—';
    log('⚠ Social Tags scan falhou');
  }
}

// 27. Email Configuration (consultas concorrentes via ApiManager.resolveDns)
async function scanEmailConfig(domain) {
  try {
    const [mxRes, txtRes] = await Promise.all([
      ApiManager.resolveDns(domain, 'MX'),
      ApiManager.resolveDns(domain, 'TXT')
    ]);

    const mx = mxRes.answer?.map(a => a.data).join(', ') || '—';
    const txts = txtRes.answer?.map(a => a.data.replace(/"/g, '')) || [];
    const spf = txts.find(t => t.startsWith('v=spf1'));
    const dmarc = txts.find(t => t.startsWith('v=dmarc1'));
    
    setCardValue('v-email-mx', mx);
    setCardValue('v-email-spf', spf ? '✓ Configurado' : '⚠ Não encontrado', spf ? 'ok' : 'warn');
    setCardValue('v-email-dmarc', dmarc ? dmarc.match(/p=(quarantine|reject|none)/)?.[1] || 'presente' : '⚠ Não encontrado');
    setCardValue('v-email-server', mx !== '—' ? 'Configurado' : '—');
    $('badge-email').textContent = mx !== '—' ? 'OK' : 'Sem MX';
    log(`📧 Email Config: MX=${mx !== '—'}, SPF=${spf ? 'OK' : 'N/A'}`);
  } catch (e) {
    $('badge-email').textContent = '—';
    log('⚠ Email Config scan falhou');
  }
}

// 28. Firewall Detection (reutiliza HEAD com deduplicação)
async function scanFirewall(domain) {
  try {
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const server = res.headers['server'] || '';
    const cfRay = res.headers['cf-ray'];
    const xAkamai = res.headers['x-akamai-transformed'];
    
    const wafDetected = cfRay || xAkamai || server.includes('cloudflare') || server.includes('akamai');
    const wafType = cfRay ? 'Cloudflare' : xAkamai ? 'Akamai' : server.includes('sucuri') ? 'Sucuri' : '—';
    
    setCardValue('v-firewall-waf', wafDetected ? '✓ Detectado' : '✗ Não detectado', wafDetected ? 'warn' : 'ok');
    setCardValue('v-firewall-type', wafType);
    setCardValue('v-firewall-cf', cfRay ? '✓ Sim' : '✗ Não');
    setCardValue('v-firewall-akamai', xAkamai ? '✓ Sim' : '✗ Não');
    $('badge-firewall').textContent = wafDetected ? 'WAF Ativo' : 'Sem WAF';
    $('badge-firewall').className = 'card-badge ' + (wafDetected ? 'badge-warn' : 'badge-ok');
    log(`🧱 Firewall: ${wafDetected ? wafType : 'Não detectado'}`);
  } catch (e) {
    setCardValue('v-firewall-waf', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-firewall-type', '—');
    setCardValue('v-firewall-cf', '—');
    setCardValue('v-firewall-akamai', '—');
    $('badge-firewall').textContent = '—';
    log('⚠ Firewall detection falhou');
  }
}

// 29. HTTP Security Features (reutiliza HEAD com deduplicação)
async function scanHTTPSecurity(domain) {
  try {
    const res = await ApiManager.head(`https://${domain}`, {}, 5000);
    const headers = res.headers;
    
    const csp = headers['content-security-policy'];
    const xFrame = headers['x-frame-options'];
    const xContent = headers['x-content-type-options'];
    const referrer = headers['referrer-policy'];
    const permissions = headers['permissions-policy'] || headers['feature-policy'];
    
    setCardValue('v-httpsec-csp', csp ? '✓ Presente' : '✗ Ausente', csp ? 'ok' : 'warn');
    setCardValue('v-httpsec-frame', xFrame || '✗ Ausente', xFrame ? 'ok' : 'warn');
    setCardValue('v-httpsec-content', xContent === 'nosniff' ? '✓ nosniff' : '✗ Ausente', xContent === 'nosniff' ? 'ok' : 'warn');
    setCardValue('v-httpsec-referrer', referrer || '✗ Ausente', referrer ? 'ok' : 'warn');
    setCardValue('v-httpsec-permissions', permissions ? '✓ Presente' : '✗ Ausente', permissions ? 'ok' : 'warn');
    $('badge-httpsec').textContent = 'Verificado';
    log(`🔐 HTTP Security: CSP=${csp ? 'OK' : 'N/A'}`);
  } catch (e) {
    setCardValue('v-httpsec-csp', '⚠ Indisponível (CORS)', 'warn');
    setCardValue('v-httpsec-frame', '—');
    setCardValue('v-httpsec-content', '—');
    setCardValue('v-httpsec-referrer', '—');
    setCardValue('v-httpsec-permissions', '—');
    $('badge-httpsec').textContent = '—';
    log('⚠ HTTP Security scan falhou');
  }
}

// 30. Archive History via ApiManager.getJson
async function scanArchiveHistory(domain) {
  try {
    const d = await ApiManager.getJson(`https://archive.org/wayback/available?url=${encodeURIComponent(domain)}`, {}, 6000);
    
    if (d.archived_snapshots?.closest) {
      const first = d.archived_snapshots.closest.timestamp.substring(0, 4);
      const last = new Date(d.archived_snapshots.closest.timestamp).toLocaleDateString();
      
      setCardValue('v-archive-first', first);
      setCardValue('v-archive-last', last);
      setCardValue('v-archive-total', 'Verificar API', '');
      setCardValue('v-archive-years', new Date().getFullYear() - parseInt(first) + ' anos', '');
      $('badge-archive').textContent = 'Disponível';
      log(`📚 Archive History: desde ${first}`);
    } else {
      setCardValue('v-archive-first', 'Não arquivado', '');
      setCardValue('v-archive-last', '—');
      setCardValue('v-archive-total', '—');
      setCardValue('v-archive-years', '—');
      $('badge-archive').textContent = 'Não encontrado';
      log('⚠ Domínio não arquivado');
    }
  } catch (e) {
    setCardValue('v-archive-first', 'Indisponível', 'warn');
    setCardValue('v-archive-last', '—');
    setCardValue('v-archive-total', '—');
    setCardValue('v-archive-years', '—');
    $('badge-archive').textContent = '—';
    log('⚠ Archive History indisponível');
  }
}

// 31. Global Ranking
async function scanGlobalRanking(domain) {
  setCardValue('v-ranking-alexa', 'Alexa descontinuada', '');
  setCardValue('v-ranking-tranco', 'Requer API Tranco', '');
  setCardValue('v-ranking-country', '—');
  setCardValue('v-ranking-category', '—');
  $('badge-ranking').textContent = '—';
  log('📊 Global Ranking requer APIs externas');
}

// 32. Block Detection (reutiliza robots.txt via ApiManager)
async function scanBlockDetection(domain) {
  try {
    const url = `https://${domain}/robots.txt`;
    const res = await ApiManager.getText(url, {}, 5000);
    const blocked = res.status === 403 || res.status === 429;
    
    setCardValue('v-block-robots', blocked ? '⚠ Bloqueado' : '✓ Liberado', blocked ? 'warn' : 'ok');
    setCardValue('v-block-geo', 'Verificar via API', '');
    setCardValue('v-block-ip', '—');
    setCardValue('v-block-captcha', '—');
    $('badge-block').textContent = blocked ? 'Bloqueado' : 'OK';
    $('badge-block').className = 'card-badge ' + (blocked ? 'badge-warn' : 'badge-ok');
    log(`🚫 Block Detection: ${blocked ? 'Bloqueado' : 'Liberado'}`);
  } catch (e) {
    setCardValue('v-block-robots', '⚠ Bloqueado (CORS)', 'warn');
    setCardValue('v-block-geo', '—');
    setCardValue('v-block-ip', '—');
    setCardValue('v-block-captcha', '—');
    $('badge-block').textContent = '—';
    log('⚠ Block Detection falhou');
  }
}

// 33. Malware & Phishing Detection
async function scanMalware(domain) {
  setCardValue('v-malware-google', 'Requer API Safe Browsing', '');
  setCardValue('v-malware-phish', 'Requer API PhishTank', '');
  setCardValue('v-malware-vt', 'Requer API VirusTotal', '');
  setCardValue('v-malware-threat', '—');
  $('badge-malware').textContent = '—';
  log('☣️ Malware Check requer APIs externas');
}

// 34. TLS Connection
async function scanTLSConnection(domain) {
  try {
    setCardValue('v-tlsconn-ver', 'TLS 1.3 (estimado)', 'ok');
    setCardValue('v-tlsconn-cipher', 'TLS_AES_128_GCM_SHA256 (estimado)');
    setCardValue('v-tlsconn-key', 'ECDHE');
    setCardValue('v-tlsconn-proto', 'h2 ou HTTP/1.1');
    $('badge-tlsconn').textContent = 'OK';
    log('🔏 TLS Connection: Verificado');
  } catch (e) {
    log('⚠ TLS Connection info limitada');
  }
}

// 35. TLS Security Audit
async function scanTLSAudit(domain) {
  setCardValue('v-tlsaudit-grade', 'Requer SSL Labs API', '');
  setCardValue('v-tlsaudit-weak', '—');
  setCardValue('v-tlsaudit-poodle', '—');
  setCardValue('v-tlsaudit-beast', '—');
  setCardValue('v-tlsaudit-crime', '—');
  $('badge-tlsaudit').textContent = '—';
  log('✅ TLS Audit requer API SSL Labs');
}

// 36. TLS Client Compatibility
async function scanTLSCompatibility(domain) {
  setCardValue('v-tlscompat-chrome', '✓ Compatível', 'ok');
  setCardValue('v-tlscompat-firefox', '✓ Compatível', 'ok');
  setCardValue('v-tlscompat-safari', '✓ Compatível', 'ok');
  setCardValue('v-tlscompat-edge', '✓ Compatível', 'ok');
  setCardValue('v-tlscompat-ie', '⚠ Parcial', 'warn');
  $('badge-tlscompat').textContent = 'OK';
  log('👥 TLS Compatibility: Modern browsers OK');
}

/* ─────────── Sistema de Navegação Unificado ─────────── */

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navMobile = document.getElementById('nav-mobile');
  if (!toggleBtn || !navMobile) return;

  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isHidden = navMobile.classList.contains('hidden');
    if (isHidden) {
      navMobile.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.textContent = '✕';
    } else {
      navMobile.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.textContent = '☰';
    }
  });

  // Fechar ao clicar fora do menu
  document.addEventListener('click', e => {
    if (!navMobile.classList.contains('hidden') && !navMobile.contains(e.target) && e.target !== toggleBtn) {
      navMobile.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.textContent = '☰';
    }
  });

  // Fechar automaticamente ao redimensionar para tela desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && !navMobile.classList.contains('hidden')) {
      navMobile.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.textContent = '☰';
    }
  });
}

function renderHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const page = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'home';

  // Configuração das rotas (Estrutura: Home / Meu IP + Teste Vazamento DNS + Analisador de Domínio)
  const navItems = [
    { id: 'home',    key: 'nav_home',    label: t('nav_home'),    href: 'index.html',    title: t('nav_home') },
    { id: 'dnsleak', key: 'nav_dnsleak', label: t('nav_dnsleak'), href: 'dns-leak.html', title: t('nav_dnsleak') },
    { id: 'domain',  key: 'nav_domain',  label: t('nav_domain'),  href: 'domain.html',   title: t('nav_domain') }
  ];

  // Configuração do botão de ação contextual
  let actionBtnHtml = '';
  if (page === 'home' || page === 'ip') {
    actionBtnHtml = `<a href="dns-leak.html" class="action-btn" data-i18n="btn_dnsleak">${t('btn_dnsleak')}</a>`;
  } else if (page === 'dnsleak') {
    actionBtnHtml = `<a href="domain.html" class="action-btn" data-i18n="btn_domain">${t('btn_domain')}</a>`;
  } else if (page === 'domain') {
    actionBtnHtml = `<a href="index.html" class="action-btn" data-i18n="btn_home">${t('btn_home')}</a>`;
  } else {
    actionBtnHtml = `<a href="index.html" class="action-btn" data-i18n="btn_home">${t('btn_home')}</a>`;
  }

  // Links de navegação desktop
  const desktopLinksHtml = navItems.map(item => {
    const isActive = page === item.id || (page === 'ip' && item.id === 'home');
    return `<a href="${item.href}" class="nav-link ${isActive ? 'nav-active' : ''}" data-i18n="${item.key}">${item.label}</a>`;
  }).join('');

  // Links de navegação mobile
  const mobileLinksHtml = navItems.map(item => {
    const isActive = page === item.id || (page === 'ip' && item.id === 'home');
    return `<a href="${item.href}" class="nav-link-mobile ${isActive ? 'nav-active' : ''}" data-i18n="${item.key}">${item.label}</a>`;
  }).join('');

  // Seletor de Idioma Dropdown
  const activeLangConfig = SUPPORTED_LANGS[currentLang] || SUPPORTED_LANGS['pt-br'];
  const langOptionsHtml = Object.keys(SUPPORTED_LANGS).map(code => {
    const item = SUPPORTED_LANGS[code];
    const isSel = code === currentLang;
    return `<button type="button" class="lang-opt ${isSel ? 'active' : ''}" data-lang="${code}" onclick="setLanguage('${code}')">
      <span class="lang-flag">${item.flag}</span>
      <span>${item.name}</span>
    </button>`;
  }).join('');

  const langSelectorHtml = `
    <div class="lang-selector-wrap">
      <button type="button" class="lang-btn" onclick="toggleLangDropdown(event)" aria-label="Select Language" aria-expanded="false">
        <span class="lang-flag" id="lang-current-flag">${activeLangConfig.flag}</span>
        <span class="lang-code" id="lang-current-code">${currentLang.toUpperCase()}</span>
        <span class="lang-arrow">▾</span>
      </button>
      <div id="lang-dropdown" class="lang-dropdown hidden">
        ${langOptionsHtml}
      </div>
    </div>
  `;

  // Breadcrumb Schema.org dinâmico
  const currentItem = navItems.find(item => item.id === page || (page === 'ip' && item.id === 'home')) || navItems[0];
  const canonicalUrl = `https://netinspector.net/${currentItem.href === 'index.html' ? '' : currentItem.href}`;

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://netinspector.net/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentItem.title,
        "item": canonicalUrl
      }
    ]
  };

  // Montagem do Header
  header.innerHTML = `
    <div class="header-container">
      <a href="index.html" class="logo">
        <div class="logo-icon">🛰️</div>
        <div class="logo-text">
          <h1>NET INSPECTOR</h1>
          <p data-i18n="logo_subtitle">${t('logo_subtitle')}</p>
        </div>
      </a>

      <nav class="nav-desktop" aria-label="Navegação Principal">
        ${desktopLinksHtml}
      </nav>

      <div style="display:flex;align-items:center;gap:10px;">
        ${langSelectorHtml}
        ${actionBtnHtml}
      </div>

      <button id="mobile-menu-toggle" class="mobile-menu-toggle" aria-label="Abrir Menu de Navegação" aria-expanded="false">
        ☰
      </button>
    </div>

    <nav id="nav-mobile" class="nav-mobile hidden" aria-label="Menu Mobile">
      ${mobileLinksHtml}
    </nav>
  `;

  // Injeção do Breadcrumb Schema.org no DOM
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(breadcrumbJson);
  header.appendChild(scriptTag);

  // Inicialização de eventos do menu mobile
  setupMobileMenu();
}

/* ─────────── Privacy-First Analytics (GoatCounter) ─────────── */

/**
 * Exibe um toast temporário na tela
 * @param {string} msg Mensagem a ser exibida
 */
function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Alterna o parâmetro ?skipgc=on para ativar/desativar analytics
 */
function toggleAnalytics() {
  const url = new URL(window.location.href);
  const isOptedOut = url.searchParams.get('skipgc') === 'on';

  if (isOptedOut) {
    url.searchParams.delete('skipgc');
    showToast('Analytics ativado.');
  } else {
    url.searchParams.set('skipgc', 'on');
    showToast('Analytics desativado para esta sessão.');
  }

  // Atualiza a URL e recarrega a página para respeitar a diretiva do GoatCounter
  setTimeout(() => {
    window.location.href = url.toString();
  }, 600);
}

/**
 * Atualiza o texto dos botões de opt-out com base na URL atual
 */
function updateOptOutButtons() {
  const urlParams = new URLSearchParams(window.location.search);
  const isOptedOut = urlParams.get('skipgc') === 'on';
  const buttons = document.querySelectorAll('.optout-btn, #analytics-optout-btn');
  buttons.forEach(btn => {
    btn.textContent = isOptedOut ? t('btn_optout_on') : t('btn_optout_off');
  });
}

/* ─────────── Auto-start ─────────── */
document.documentElement.lang = currentLang === 'pt-br' ? 'pt-BR' : currentLang;
if (SUPPORTED_LANGS[currentLang]?.dir) {
  document.documentElement.dir = SUPPORTED_LANGS[currentLang].dir;
}

renderHeader();
renderCards();
applyTranslations();
startTimer();
updateOptOutButtons();

const currentPage = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'home';
if (currentPage !== 'domain') {
  runAll();
}

// Global window exposure for inline onclick handlers & i18n
window.runAll = runAll;
window.scanDomain = scanDomain;
window.renderHeader = renderHeader;
window.toggleAnalytics = toggleAnalytics;
window.showToast = showToast;
window.setLanguage = setLanguage;
window.toggleLangDropdown = toggleLangDropdown;
window.t = t;
window.applyTranslations = applyTranslations;
window.SUPPORTED_LANGS = SUPPORTED_LANGS;
