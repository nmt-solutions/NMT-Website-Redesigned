import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import routes, { Routes } from "./routes/routes";
import { Roles } from "./lib/enums";

const adminRoutes = routes
  .filter((route) => route.isAdminRoute)
  .map((route) => route.path);

export default clerkMiddleware((auth, req) => {
  const user = auth();
  const isAdmin = user.sessionClaims?.metadata?.role === Roles.Admin;

  if (adminRoutes.includes(req.nextUrl.pathname as Routes)) {
    if (!isAdmin) {
      const url = req.nextUrl.clone();
      url.pathname = Routes.NotAuthorized;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
