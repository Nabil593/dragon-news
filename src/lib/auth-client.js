import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // ১. প্রোডাকশন ইউআরএল (URL-এর শেষে / দেবেন না)
    baseURL: "https://dragon-news-eight-sigma.vercel.app" 
})

// ২. আগে তৈরি করা 'authClient' থেকেই ফাংশনগুলো এক্সপোর্ট করুন
export const { signIn, signUp, useSession } = authClient;