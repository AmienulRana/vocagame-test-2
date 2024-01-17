// middleware.js

import { NextResponse } from 'next/server';

export default function middleware(req) {
  let loggedin = req.cookies.get('userSession');
  console.log(loggedin);
  const { pathname } = req.nextUrl;

  if (loggedin && pathname === '/') {
    return NextResponse.redirect(new URL('/profile', req.url));
  }
  if (!loggedin && pathname === '/profile') {
    console.log('belum login');
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};