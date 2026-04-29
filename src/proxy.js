import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
// Import your auth instance (example: Better Auth or Lucia)
// import { auth } from "@/lib/auth"; 

export async function proxy(request) {
    // 1. In Middleware, we use request.headers, not the 'next/headers' function
    const session = await auth.api.getSession({
        headers: await headers() 
    })

    console.log(session)

    // 2. Check if the session exists
    if (!session) {
        // Redirect to login if no session is found
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // 3. Continue to the requested page if authenticated
    return NextResponse.next()
}

export const config = {
    // These routes will trigger the middleware
    matcher: ['/about', '/news/:path*'],
}