import { NextResponse, type NextRequest } from "next/server";
import { SITE_OFFLINE } from "@/lib/site-status";

const PASSTHROUGH = new Set([
  "/offline",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/icon.svg",
]);

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production" || !SITE_OFFLINE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (PASSTHROUGH.has(pathname) || pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/offline", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
