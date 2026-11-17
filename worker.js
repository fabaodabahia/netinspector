/**
 * NET INSPECTOR — Cloudflare Worker Anti-CORS & Edge Inspector
 * Endpoint: GET /api/inspect?domain=example.com
 * Fallback: Serve arquivos estáticos via env.ASSETS
 */

const DOMAIN_REGEX = /^(?=.{3,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;
const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /\.local$/i,
  /\.internal$/i,
  /\.arpa$/i,
  /^\d{1,3}(\.\d{1,3}){3}$/
];

function isValidPublicDomain(raw) {
  if (!raw || typeof raw !== 'string') return false;
  const clean = raw.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  if (!DOMAIN_REGEX.test(clean)) return false;
  if (PRIVATE_HOST_PATTERNS.some(rx => rx.test(clean))) return false;
  return clean;
}

function jsonResponse(payload, status = 200, cacheSeconds = 60) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Cache-Control': cacheSeconds > 0 ? `public, max-age=${cacheSeconds}` : 'no-store'
    }
  });
}

function parseSetCookies(headers) {
  let rawCookies = [];
  if (typeof headers.getSetCookie === 'function') {
    rawCookies = headers.getSetCookie();
  } else {
    const sc = headers.get('set-cookie');
    if (sc) rawCookies = [sc];
  }
  const total = rawCookies.length;
  if (total === 0) {
    return { total: 0, allSecure: null, allHttpOnly: null, sameSite: 'Nenhum cookie' };
  }
  const secureCount = rawCookies.filter(c => /;\s*secure\b/i.test(c)).length;
  const httpOnlyCount = rawCookies.filter(c => /;\s*httponly\b/i.test(c)).length;
  const sameSiteMatch = rawCookies[0].match(/;\s*samesite=(strict|lax|none)/i);
  return {
    total,
    allSecure: secureCount === total,
    allHttpOnly: httpOnlyCount === total,
    sameSite: sameSiteMatch ? sameSiteMatch[1] : 'Não definido'
  };
}

function extractHtmlInsights(html, domain) {
  const sample = html.slice(0, 250000);
  const ogTitle = sample.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || sample.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '—';
  const ogDesc = sample.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i)?.[1]
    || sample.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] || '—';
  const ogImg = sample.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i)?.[1] || '—';
  const twitter = sample.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i)?.[1] || '—';

  const links = sample.match(/href=["'](https?:\/\/[^"']+)["']/gi) || [];
  const internal = links.filter(l => l.toLowerCase().includes(domain)).length;
  const external = links.length - internal;

  const cms = /wp-content|wp-includes/i.test(sample) ? 'WordPress'
    : /cdn\.shopify\.com/i.test(sample) ? 'Shopify'
    : /joomla/i.test(sample) ? 'Joomla'
    : '—';

  const framework = /__NEXT_DATA__|\/_next\//i.test(sample) ? 'Next.js'
    : /data-reactroot|react/i.test(sample) ? 'React'
    : /__NUXT__|vue/i.test(sample) ? 'Vue'
    : /ng-version|angular/i.test(sample) ? 'Angular'
    : '—';

  const analytics = /googletagmanager\.com|gtag\(|analytics\.js/i.test(sample) ? 'Google Analytics'
    : /goatcounter/i.test(sample) ? 'GoatCounter'
    : /cloudflareinsights/i.test(sample) ? 'Cloudflare Web Analytics'
    : '—';

  return {
    byteLength: html.length,
    ogTitle: ogTitle.trim(),
    ogDesc: ogDesc.trim(),
    ogImg: ogImg !== '—' ? 'Presente' : '—',
    twitter,
    linksTotal: links.length,
    linksInternal: internal,
    linksExternal: external,
    cms,
    framework,
    analytics
  };
}

async function inspectRedirects(domain) {
  let currentUrl = `http://${domain}`;
  const chain = [];
  let redirects = 0;

  for (let i = 0; i < 5; i++) {
    try {
      const resp = await fetch(currentUrl, {
        method: 'HEAD',
        redirect: 'manual',
        headers: { 'User-Agent': 'NetInspectorBot/1.0 (+https://netinspector.net)' },
        signal: AbortSignal.timeout(3500)
      });
      chain.push(currentUrl);
      if (resp.status >= 300 && resp.status < 400) {
        const loc = resp.headers.get('location');
        if (!loc) break;
        currentUrl = new URL(loc, currentUrl).toString();
        redirects++;
      } else {
        break;
      }
    } catch {
      if (chain.length === 0) chain.push(`https://${domain}`);
      break;
    }
  }

  return {
    count: redirects,
    finalUrl: chain[chain.length - 1] || `https://${domain}`,
    chain
  };
}

async function handleInspect(domain) {
  const fetchHeaders = {
    'User-Agent': 'Mozilla/5.0 (compatible; NetInspector/1.0; +https://netinspector.net)',
    'Accept': 'text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8'
  };

  const t0 = Date.now();

  const [mainResult, robotsResult, secTxtResult, redirectInfo] = await Promise.allSettled([
    fetch(`https://${domain}`, { method: 'GET', redirect: 'follow', headers: fetchHeaders, signal: AbortSignal.timeout(5000) }),
    fetch(`https://${domain}/robots.txt`, { method: 'GET', redirect: 'follow', headers: fetchHeaders, signal: AbortSignal.timeout(3500) }),
    fetch(`https://${domain}/.well-known/security.txt`, { method: 'GET', redirect: 'follow', headers: fetchHeaders, signal: AbortSignal.timeout(3500) }),
    inspectRedirects(domain)
  ]);

  const responseTimeMs = Date.now() - t0;
  let status = 0;
  let statusText = 'Unavailable';
  const headersObj = {};
  let cookiesSummary = { total: 0, allSecure: null, allHttpOnly: null, sameSite: '—' };
  let htmlInsights = null;

  if (mainResult.status === 'fulfilled') {
    const resp = mainResult.value;
    status = resp.status;
    statusText = resp.statusText || (resp.ok ? 'OK' : `HTTP ${resp.status}`);
    resp.headers.forEach((v, k) => {
      headersObj[k.toLowerCase()] = v;
    });
    cookiesSummary = parseSetCookies(resp.headers);
    const contentType = headersObj['content-type'] || '';
    if (contentType.includes('text/html') || contentType.includes('xhtml') || !contentType) {
      try {
        const html = await resp.text();
        htmlInsights = extractHtmlInsights(html, domain);
      } catch {}
    }
  }

  let robotsTxt = { found: false, status: 0, disallow: 0, allow: 0, sitemap: '—', blocked: false };
  if (robotsResult.status === 'fulfilled') {
    const rr = robotsResult.value;
    robotsTxt.status = rr.status;
    robotsTxt.blocked = rr.status === 403 || rr.status === 429;
    if (rr.ok) {
      const txt = await rr.text();
      robotsTxt.found = true;
      robotsTxt.disallow = (txt.match(/Disallow:/gi) || []).length;
      robotsTxt.allow = (txt.match(/Allow:/gi) || []).length;
      robotsTxt.sitemap = txt.match(/Sitemap:\s*(.+)/i)?.[1]?.trim() || '—';
    }
  }

  let securityTxt = { found: false, contact: '—', encryption: '—', policy: '—' };
  if (secTxtResult.status === 'fulfilled' && secTxtResult.value.ok) {
    const st = await secTxtResult.value.text();
    if (/Contact:/i.test(st)) {
      securityTxt.found = true;
      securityTxt.contact = st.match(/Contact:\s*(.+)/i)?.[1]?.trim() || '—';
      securityTxt.encryption = st.match(/Encryption:\s*(.+)/i)?.[1]?.trim() || '—';
      securityTxt.policy = st.match(/Policy:\s*(.+)/i)?.[1]?.trim() || '—';
    }
  }

  return jsonResponse({
    ok: status > 0,
    domain,
    status,
    statusText,
    responseTimeMs,
    headers: headersObj,
    cookies: cookiesSummary,
    redirects: redirectInfo.status === 'fulfilled' ? redirectInfo.value : { count: 0, finalUrl: `https://${domain}`, chain: [`https://${domain}`] },
    html: htmlInsights,
    robotsTxt,
    securityTxt
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/inspect') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
      }

      if (request.method !== 'GET') {
        return jsonResponse({ ok: false, error: 'Method not allowed' }, 405, 0);
      }

      const validDomain = isValidPublicDomain(url.searchParams.get('domain'));
      if (!validDomain) {
        return jsonResponse({ ok: false, error: 'Invalid or private domain' }, 400, 0);
      }

      return await handleInspect(validDomain);
    }

    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};
