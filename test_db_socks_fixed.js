const { Client } = require('pg');
const { SocksClient } = require('socks');

async function getClient() {
  const info = await SocksClient.createConnection({
    proxy: {
      host: '127.0.0.1',
      port: 1055,
      type: 5
    },
    command: 'connect',
    destination: {
      host: '100.119.6.69',
      port: 5432
    }
  });

  const client = new Client({
    user: 'aiadmin',
    password: 'AiAgent@2026!SecureDB',
    database: 'ai_agent',
    stream: info.socket
  });

  await client.connect();
  return client;
}

async function main() {
  try {
    const client = await getClient();
    const res = await client.query('SELECT NOW()');
    console.log('PostgreSQL Connected via SOCKS5 successfully:', res.rows[0]);

    await client.query(`
      CREATE TABLE IF NOT EXISTS dl_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user',
        max_apps INT DEFAULT 2,
        max_ram_mb INT DEFAULT 512,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS dl_apps (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES dl_users(id) ON DELETE CASCADE,
        app_name VARCHAR(100) NOT NULL,
        subdomain VARCHAR(100) UNIQUE NOT NULL,
        git_repository VARCHAR(255) NOT NULL,
        git_branch VARCHAR(50) DEFAULT 'main',
        build_pack VARCHAR(50) DEFAULT 'nixpacks',
        coolify_project_uuid VARCHAR(100),
        coolify_app_uuid VARCHAR(100),
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS dl_audit_logs (
        id SERIAL PRIMARY KEY,
        user_id INT,
        action VARCHAR(100) NOT NULL,
        details JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('✓ Tables (dl_users, dl_apps, dl_audit_logs) created successfully!');
    await client.end();
  } catch (err) {
    console.error('DB Connection/Execution Error:', err);
  }
}

main();
