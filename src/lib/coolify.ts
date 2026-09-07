import { SocksProxyAgent } from 'socks-proxy-agent';

const COOLIFY_BASE_URL = process.env.COOLIFY_BASE_URL || 'http://100.119.6.69:8000';
const COOLIFY_API_TOKEN = process.env.COOLIFY_API_TOKEN || '4|MFHU4hCR24zEgy7LxpUSIIxd6rGbp5UulNvkQ6WDd5d762ae';
const SOCKS_PROXY = process.env.TAILSCALE_SOCKS5_PROXY || 'socks5://localhost:1055';

export async function coolifyFetch(path: string, options: RequestInit = {}) {
  const url = `${COOLIFY_BASE_URL}${path}`;
  const isServer = typeof window === 'undefined';
  
  // Custom fetch with proxy if needed
  const headers = {
    'Authorization': `Bearer ${COOLIFY_API_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(options.headers || {}),
  };

  // On Node.js, we use proxy agent if not in direct docker network
  let agent: any = undefined;
  if (isServer && (process.env.USE_SOCKS || process.env.NODE_ENV !== 'production')) {
    agent = new SocksProxyAgent(SOCKS_PROXY);
  }

  const res = await fetch(url, {
    ...options,
    headers,
    // @ts-ignore
    agent,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Coolify API Error (${res.status}): ${errorBody}`);
  }

  return res.json();
}
