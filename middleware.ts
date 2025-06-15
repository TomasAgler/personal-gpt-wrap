import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const passkey = request.cookies.get('ai-passkey')?.value;

  if (!passkey) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (passkey !== process.env.PASSKEY) {
    return NextResponse.redirect(new URL('/auth/error', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/interview-prep/:path*',
};
