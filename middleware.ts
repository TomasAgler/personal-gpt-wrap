import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const passkey = request.cookies.get('ai-passkey')?.value;
  const { pathname } = new URL(request.url);
  console.log(pathname);
  if (!passkey) {
    return NextResponse.redirect(
      new URL(`/auth/login?redirectUri=${pathname}`, request.url),
    );
  }

  if (passkey !== process.env.PASSKEY) {
    return NextResponse.redirect(
      new URL(`/auth/error?redirectUri=${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/interview-prep/:path*',
};
