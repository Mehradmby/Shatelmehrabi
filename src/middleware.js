import { NextResponse } from "next/server";
export async function middleware(req, res) {
  const isLoggedIn = req.cookies.get("userInfo");
  console.log(isLoggedIn)
  const locale = req.nextUrl.locale;
  if (isLoggedIn.value.name) {
    return NextResponse.next();
  } else {
    const signInUrl = new URL(`/signin`, req.nextUrl);
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
  matcher: [`/Profile`],
};
