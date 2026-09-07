import * as jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'daelaunch-super-secret-key-2026-lxion';

export interface UserSession {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
  max_apps: number;
}

export function signToken(user: UserSession) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): UserSession | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserSession;
  } catch (err) {
    return null;
  }
}

export function getSessionFromRequest(req: NextRequest): UserSession | null {
  const authHeader = req.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return verifyToken(authHeader.substring(7));
  }
  const cookie = req.cookies.get('dl_token');
  if (cookie) {
    return verifyToken(cookie.value);
  }
  return null;
}
