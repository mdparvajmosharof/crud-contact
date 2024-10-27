import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  

  if (!token) {
    return NextResponse.redirect(new URL(`/signup`, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/contacts/:path*", "/addcontacts/:path*",],
};