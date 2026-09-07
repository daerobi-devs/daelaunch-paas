import { Client } from 'pg';
import { SocksClient } from 'socks';

export async function getDbClient() {
  const isDirect = process.env.NODE_ENV === 'production' && !process.env.USE_SOCKS;

  if (isDirect) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL || 'postgres://aiadmin:AiAgent%402026%21SecureDB@ubcabqbrddazafangjuv5fd1:5432/ai_agent',
      ssl: false,
    });
    await client.connect();
    return client;
  }

  // Development / Tailscale proxy mode
  const info = await SocksClient.createConnection({
    proxy: {
      host: '127.0.0.1',
      port: 1055,
      type: 5,
    },
    command: 'connect',
    destination: {
      host: process.env.POSTGRES_HOST || '100.119.6.69',
      port: 5432,
    },
  });

  const client = new Client({
    user: process.env.POSTGRES_USER || 'aiadmin',
    password: process.env.POSTGRES_PASSWORD || 'AiAgent@2026!SecureDB',
    database: process.env.POSTGRES_DB || 'ai_agent',
    stream: () => info.socket,
  });

  await client.connect();
  return client;
}

export async function queryDb(text: string, params?: any[]) {
  const client = await getDbClient();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    await client.end();
  }
}
