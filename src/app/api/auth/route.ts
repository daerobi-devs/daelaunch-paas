import { NextRequest, NextResponse } from 'next/server';
import { queryDb } from '@/lib/db';
import * as bcrypt from 'bcryptjs';
import { signToken, getSessionFromRequest } from '@/lib/auth';

// POST /api/auth (action: login | register)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, username, email, password } = body;

    if (action === 'register') {
      if (!username || !email || !password) {
        return NextResponse.json({ error: 'Data registrasi tidak lengkap' }, { status: 400 });
      }

      // Check existing
      const existing = await queryDb('SELECT id FROM dl_users WHERE username = $1 OR email = $2', [username, email]);
      if (existing.rows.length > 0) {
        return NextResponse.json({ error: 'Username atau Email sudah terdaftar' }, { status: 400 });
      }

      // First user becomes admin automatically (or if username is lxion/daerobi)
      const totalUsers = await queryDb('SELECT COUNT(*) FROM dl_users');
      const isFirst = parseInt(totalUsers.rows[0].count, 10) === 0;
      const role = (isFirst || username.toLowerCase() === 'lxion' || username.toLowerCase() === 'daerobi') ? 'admin' : 'user';

      const passwordHash = await bcrypt.hash(password, 10);
      const inserted = await queryDb(
        'INSERT INTO dl_users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role, max_apps',
        [username, email, passwordHash, role]
      );

      const user = inserted.rows[0];
      const token = signToken(user);

      const res = NextResponse.json({ success: true, user, token });
      res.cookies.set('dl_token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 });
      return res;
    }

    if (action === 'login') {
      if (!username || !password) {
        return NextResponse.json({ error: 'Username dan Password wajib diisi' }, { status: 400 });
      }

      const found = await queryDb('SELECT * FROM dl_users WHERE username = $1 OR email = $1', [username]);
      if (found.rows.length === 0) {
        return NextResponse.json({ error: 'Akun tidak ditemukan' }, { status: 401 });
      }

      const user = found.rows[0];
      const isValid = await bcrypt.compare(password, user.password_hash);
      if (!isValid) {
        return NextResponse.json({ error: 'Password salah' }, { status: 401 });
      }

      const sessionUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        max_apps: user.max_apps,
      };

      const token = signToken(sessionUser);
      const res = NextResponse.json({ success: true, user: sessionUser, token });
      res.cookies.set('dl_token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 });
      return res;
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err: any) {
    console.error('Auth error:', err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

// GET /api/auth (check current session)
export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: session });
}
