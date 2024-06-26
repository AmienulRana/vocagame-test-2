// middleware.js

import { NextResponse } from 'next/server';

export default function middleware(req) {
  let loggedin = req.cookies.get('userSession');
  const { pathname } = req.nextUrl;

  if (loggedin && pathname === '/') {
    return NextResponse.redirect(new URL('/profile', req.url));
  }
  if (!loggedin && pathname === '/profile') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};