const { Pool } = require('pg');

const pool = new Pool({
  host: '100.119.6.69',
  port: 5432,
  user: 'aiadmin',
  password: 'AiAgent@2026!SecureDB',
  database: 'ai_agent',
  ssl: false
});

async function main() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('PostgreSQL Connected successfully:', res.rows[0]);
    
    // Create schema for daelaunch
    await pool.query(`
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
    console.log('Database tables created successfully!');
    await pool.end();
  } catch (err) {
    console.error('DB Error:', err);
  }
}

main();
