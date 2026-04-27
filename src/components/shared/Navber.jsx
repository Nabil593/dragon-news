import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink'

const Navber = () => {
    return (
        <div className='container mx-auto flex justify-between'>
            <div></div>
            <ul className='flex justify-between items-center gap-2 mt-6'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/Carerr'}>Carerr</NavLink></li>
            </ul>

            <div className='flex items-center gap-4'>
                <Image src={userAvatar} width={60} height={60} alt='Use Avatar'></Image>
                <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Log in</Link></button>
            </div>
        </div>
    );
};

export default Navber;