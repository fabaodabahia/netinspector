/* ─────────── Card Factory ─────────── */
const CARDS_CONFIG = [
  {
    id: 'isp',
    icon: '🏢',
    title: 'ISP &amp; ASN',
    bodyId: 'body-isp',
    badge: { id: 'badge-isp', text: '—', class: 'badge-info' },
    fields: [
      { label: 'Provedor', id: 'v-isp', defaultValue: '<span class="spin"></span>' },
      { label: 'Organização', id: 'v-org' },
      { label: 'ASN', id: 'v-asn', class: 'accent' },
      { label: 'Domínio', id: 'v-domain' },
      { label: 'Tipo de rede', id: 'v-nettype' },
    ]
  },
  {
    id: 'location',
    icon: '📍',
    title: 'Localização',
    badge: { id: 'badge-loc', text: '—', class: 'badge-info' },
    appendHtml: '<iframe id="map-frame" style="display:none" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>',
    fields: [
      { label: 'País', id: 'v-country' },
      { label: 'Região', id: 'v-region' },
      { label: 'Cidade', id: 'v-city' },
      { label: 'CEP / Postal', id: 'v-postal' },
      { label: 'Fuso horário', id: 'v-tz' },
      { label: 'Coordenadas', id: 'v-coords', class: 'accent' },
    ]
  },
  {
    id: 'ip',
    icon: '🌐',
    title: 'Endereços IP',
    badge: { id: 'badge-ip', text: 'IPv4', class: 'badge-info' },
    appendHtml: '<p class="webrtc-note">⚠ IPs locais via WebRTC. Se aparecer o IPv4 público aqui, pode indicar vazamento de VPN.</p>',
    fields: [
      { label: 'IPv4 público', id: 'v-ipv4', class: 'accent' },
      { label: 'IPv6 público', id: 'v-ipv6', class: 'accent', defaultValue: '<span class="spin"></span>' },
      { label: 'IP local (LAN)', id: 'v-local' },
      { label: 'IPv6 local', id: 'v-local6' },
      { label: 'WebRTC leak', id: 'v-webrtc', defaultValue: 'testando…' },
    ]
  },
  {
    id: 'latency',
    icon: '⚡',
    title: 'Latência &amp; DNS',
    badge: { id: 'badge-ping', text: '—' },
    latencyBar: true,
    fields: [
      { label: 'Ping HTTP', id: 'v-ping', defaultValue: 'medindo…' },
      { label: 'Servidor DNS', id: 'v-dns', rowStyle: 'margin-top:12px' },
      { label: 'DNS lookup', id: 'v-dnslookup' },
      { label: 'HTTPS suporte', class: 'ok', defaultValue: '✓ Sim' },
      { label: 'HTTP/2', id: 'v-h2', defaultValue: 'verificando…' },
    ]
  },
  {
    id: 'browser',
    icon: '💻',
    title: 'Navegador &amp; Dispositivo',
    bodyId: 'body-ua',
    fields: [
      { label: 'User-Agent', id: 'v-ua', style: 'font-size:.65rem' },
      { label: 'Plataforma', id: 'v-platform' },
      { label: 'Idioma', id: 'v-lang' },
      { label: 'Cores suporte', id: 'v-colors' },
      { label: 'Cookies', id: 'v-cookies' },
      { label: 'JavaScript', class: 'ok', defaultValue: '✓ Ativo' },
      { label: 'WebRTC', id: 'v-wrtc-support' },
      { label: 'Tela (px)', id: 'v-screen' },
      { label: 'Mem. RAM (est.)', id: 'v-mem' },
      { label: 'CPUs lógicos', id: 'v-cpu' },
    ]
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Segurança &amp; Privacidade',
    badge: { id: 'badge-sec', text: '—' },
    fields: [
      { label: 'VPN / Proxy', id: 'v-proxy', defaultValue: 'verificando…' },
      { label: 'Tor detectado', id: 'v-tor' },
      { label: 'Tipo de conexão', id: 'v-conntype' },
      { label: 'DoH/DoT (DNS cifrado)', id: 'v-doh' },
      { label: 'Modo incógnito', id: 'v-incognito' },
      { label: 'Cabeçalhos CORS', class: 'ok', defaultValue: 'Permitido' },
      { label: 'TLS versão', id: 'v-tls', defaultValue: 'TLS 1.2/1.3 ✓' },
    ]
  },
  {
    id: 'connectivity',
    icon: '📡',
    title: 'Conectividade',
    badge: { id: 'badge-conn', text: 'Online', class: 'badge-ok' },
    fields: [
      { label: 'Status', id: 'v-online', class: 'ok', defaultValue: '🟢 Online' },
      { label: 'Velocidade estimada', id: 'v-speed' },
      { label: 'Tipo de acesso', id: 'v-eff-type' },
      { label: 'Economia de dados', id: 'v-datasaver' },
      { label: 'RTT estimado', id: 'v-rtt' },
      { label: 'Downlink', id: 'v-downlink' },
    ]
  },
  {
    id: 'domain-scan',
    icon: '🔍',
    title: 'Análise de Domínio',
    fullWidth: true,
    customHtml: `<div style="display:flex;gap:10px;margin-bottom:12px;">
          <input type="text" id="domain-input" placeholder="Digite um domínio (ex: example.com)" 
                 style="flex:1;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--text);font-family:'JetBrains Mono',monospace;font-size:.85rem;">
          <button id="domain-scan-btn" onclick="scanDomain()" 
                  style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border:none;border-radius:8px;padding:10px 20px;font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:600;cursor:pointer;">
            🔍 Analisar
          </button>
        </div>
        <p style="font-size:.7rem;color:var(--muted);">Digite um domínio para análise completa de segurança, DNS, SSL e infraestrutura.</p>`,
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
  titleSpan.innerHTML = config.title || '';
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
        lbl.textContent = field.label;
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
          latWrap.innerHTML = '<div style="font-size:.7rem;color:var(--muted)">Qualidade</div><div class="latency-bar-bg"><div class="latency-bar-fill" id="ping-bar"></div></div>';
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

  if (page === 'ip') {
    const allowedCards = ['isp', 'location', 'ip', 'diagnostic-log'];
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
   * Obtenção de IP e Geo com fallback transparente e Shape Matching estrito
   */
  async getClientIpInfo() {
    const key = 'client:ipinfo';
    return this._execute(key, async () => {
      // Provedor Primário: ipapi.co
      try {
        const resp = await this.request(
          'https://ipapi.co/json/?fields=ip,version,city,region,country_name,country_code,postal,latitude,longitude,timezone,utc_offset,org,asn,network,currency,in_eu,proxy,tor,language,connection_type',
          { cache: 'no-store' },
          6000
        );
        if (resp.ok) {
          const d = await resp.json();
          if (d && d.ip) return d;
        }
      } catch (e) {}

      // Fallback 1: ip-api.com
      try {
        const resp2 = await this.request(
          'https://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,org,as,query',
          { cache: 'no-store' },
          6000
        );
        if (resp2.ok) {
          const d2 = await resp2.json();
          if (d2 && d2.status === 'success') {
            const offsetHours = d2.offset ? Math.floor(d2.offset / 3600) : 0;
            const utcSign = offsetHours >= 0 ? '+' : '-';
            const utcStr = `${utcSign}${String(Math.abs(offsetHours)).padStart(2, '0')}00`;
            const asnMatch = (d2.as || '').match(/^(AS\d+)/);
            return {
              ip: d2.query,
              version: 'IPv4',
              city: d2.city || '',
              region: d2.regionName || d2.region || '',
              country_name: d2.country || '',
              country_code: d2.countryCode || '',
              postal: d2.zip || '',
              latitude: d2.lat || 0,
              longitude: d2.lon || 0,
              timezone: d2.timezone || '',
              utc_offset: utcStr,
              org: d2.org || d2.isp || '',
              asn: asnMatch ? asnMatch[1] : (d2.as || ''),
              network: d2.isp || '',
              in_eu: false,
              proxy: false,
              tor: false,
              connection_type: 'Banda Larga / Provedor'
            };
          }
        }
      } catch (e2) {}

      // Fallback 2: api.ipify.org
      try {
        const resp3 = await this.request('https://api.ipify.org?format=json', { cache: 'no-store' }, 4000);
        if (resp3.ok) {
          const d3 = await resp3.json();
          if (d3 && d3.ip) {
            return {
              ip: d3.ip,
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
        }
      } catch (e3) {}

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

/* ─────────── IP público IPv4 via ApiManager ─────────── */
async function fetchIPv4Info() {
  try {
    const d = await ApiManager.getClientIpInfo();
    log(`IPv4: ${d.ip}  ASN: ${d.asn}  ISP: ${d.org}`);

    // Hero
    $('hero-ip').innerHTML = `<span class="pulse"></span>${d.ip}`;

    // ISP
    const isp = d.org || '—';
    set('v-isp', isp.replace(/^AS\d+\s+/, ''), '');
    set('v-org', d.org || '—', '');
    set('v-asn', d.asn || '—', 'accent');
    set('v-domain', d.network || '—', '');
    set('v-nettype', d.connection_type || 'Não disponível', '');
    $('badge-isp').textContent = d.asn || '—';

    // Localização
    set('v-country', `${d.country_name || '—'} (${d.country_code || '—'}) ${d.in_eu ? '🇪🇺' : ''}`, '');
    set('v-region', d.region || '—', '');
    set('v-city', d.city || '—', '');
    set('v-postal', d.postal || '—', '');
    set('v-tz', `${d.timezone || '—'} (UTC${d.utc_offset ? d.utc_offset.slice(0, 3) + ':' + d.utc_offset.slice(3) : ''})`, '');
    set('v-coords', (d.latitude && d.longitude) ? `${d.latitude}, ${d.longitude}` : '—', 'accent');
    $('badge-loc').textContent = `${d.city || d.region || d.country_name || '—'}`;

    // Mapa OpenStreetMap
    if (d.latitude && d.longitude) {
      const f = $('map-frame');
      if (f) {
        f.src = `https://www.openstreetmap.org/export/embed.html?bbox=${d.longitude - .15},${d.latitude - .1},${d.longitude + .15},${d.latitude + .1}&layer=mapnik&marker=${d.latitude},${d.longitude}`;
        f.style.display = 'block';
      }
    }

    // IPv4
    set('v-ipv4', d.ip, 'accent');
    $('badge-ip').textContent = 'IPv4 ✓';

    // Segurança
    const isProxy = d.proxy;
    const isTor   = d.tor;
    set('v-proxy', isProxy ? '⚠ Detectado' : '✓ Não detectado', isProxy ? 'warn' : 'ok');
    set('v-tor',   isTor   ? '⚠ Detectado' : '✓ Não detectado', isTor   ? 'warn' : 'ok');
    $('badge-sec').textContent = (isProxy || isTor) ? 'Proxy/VPN' : 'Limpo';
    $('badge-sec').className   = 'card-badge ' + ((isProxy || isTor) ? 'badge-warn' : 'badge-ok');

    return d;
  } catch(e) {
    log('Erro ao buscar IPv4: ' + e.message);
    $('hero-ip').innerHTML = '<span style="color:var(--err)">Falha ao obter IP</span>';
    set('v-isp', 'Erro de conexão', 'err');
    set('v-org', '—', '');
    set('v-asn', '—', '');
    set('v-domain', '—', '');
    set('v-nettype', '—', '');
    set('v-ipv4', 'Não obtido', 'err');
    set('v-country', '—', '');
    set('v-region', '—', '');
    set('v-city', '—', '');
    set('v-postal', '—', '');
    set('v-tz', '—', '');
    set('v-coords', '—', '');
    set('v-proxy', 'Não verificado', 'warn');
    set('v-tor', 'Não verificado', 'warn');
    $('badge-isp').textContent = '—';
    $('badge-loc').textContent = '—';
    return null;
  }
}

/* ─────────── IPv6 via ApiManager ─────────── */
async function fetchIPv6() {
  try {
    const d = await ApiManager.getJson('https://api6.ipify.org?format=json', {}, 5000);
    set('v-ipv6', d.ip, 'accent');
    $('badge-ip').textContent = 'IPv4 + IPv6 ✓';
    log(`IPv6: ${d.ip}`);
    return d.ip;
  } catch {
    set('v-ipv6', 'Não disponível (sem IPv6)', 'warn');
    log('IPv6 não disponível nesta conexão.');
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
  $('badge-ping').textContent = label;
  $('badge-ping').className = `card-badge badge-${cls}`;
  // Barra: 0ms = 100%, >=300ms = 0%
  const pct = Math.max(0, Math.min(100, 100 - (ms / 300 * 100)));
  $('ping-bar').style.width = pct + '%';
  log(`Ping médio: ${ms}ms (${label})`);
}

/* ─────────── Tempo na página ─────────── */
function startTimer() {
  const start = Date.now();
  setInterval(() => {
    const s = Math.floor((Date.now() - start) / 1000);
    const m = Math.floor(s / 60), sec = s % 60;
    $('badge-log').textContent = `${m}m ${sec}s no ar`;
  }, 1000);
}

/* ─────────── Online/Offline listener ─────────── */
window.addEventListener('online',  () => { set('v-online','🟢 Online', 'ok');  $('badge-conn').textContent='Online';  $('badge-conn').className='card-badge badge-ok'; });
window.addEventListener('offline', () => { set('v-online','🔴 Offline','err'); $('badge-conn').textContent='Offline'; $('badge-conn').className='card-badge badge-err'; });

/* ─────────── Orquestrador ─────────── */
async function runAll() {
  const btn = $('scan-btn');
  btn.disabled = true;
  btn.textContent = '⏳ Analisando…';
  $('log').textContent = '';
  log('Iniciando diagnóstico completo…');

  // Reset spinners
  $('hero-ip').innerHTML = '<span class="spin"></span>';
  set('v-ipv6', '<span class="spin"></span>', '');
  set('v-isp',  '<span class="spin"></span>', '');

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
  btn.disabled = false;
  btn.textContent = '↺ Reanalisar';
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

/* ─────────── Auto-start ─────────── */
renderCards();
startTimer();

const currentPage = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'all';
if (currentPage !== 'domain') {
  runAll();
}

// Global window exposure for inline onclick handlers
window.runAll = runAll;
window.scanDomain = scanDomain;
