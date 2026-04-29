"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });

    console.log(data)
}

const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
    });

    console.log(data)
}

const RightSidebar = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleSignIn} className='btn'><FaGoogle /> Login with Google</button>
                <button onClick={handleGithubSignIn} className='btn'><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;