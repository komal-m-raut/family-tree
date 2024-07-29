import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

interface CustomClerkMiddlewareOptions extends ClerkMiddlewareOptions {
  publicRoutes: string[];
}

export default clerkMiddleware({
  publicRoutes: ['/'] as string[]
} as CustomClerkMiddlewareOptions);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
