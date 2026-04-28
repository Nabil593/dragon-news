"use client"
import Link from 'next/link';
import React, { use } from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client';

const Navber = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(isPending)

    return (
        <div className='container mx-auto flex justify-between'>
            <div></div>
            <ul className='flex justify-between items-center gap-2 mt-6'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/Carerr'}>Carerr</NavLink></li>
            </ul>

            {isPending ? <p>Loading...</p>
                : user
                    ? <div className='flex items-center gap-4'>
                        <h2>Hello, {user.name}</h2>
                        <Image
                            src={user?.image || userAvatar}
                            width={50}
                            height={0}
                            alt="Logo"
                            className='rounded-full'
                        />
                        <button onClick={async() => await authClient.signOut()} className='btn'>Logout</button>
                    </div> :
                    <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Log in</Link></button>
            }
        </div >
    );
};

export default Navber;