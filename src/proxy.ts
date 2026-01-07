import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


/*
const isPublicRoute = createRouteMatcher([
  "/api/inngest(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)){
    await auth.protect();
  }
});*/     /* This above can be used isntead of the bleow one line-15 if i want to redirect the user directly to the sign in page if the user is not loged in yet */

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};