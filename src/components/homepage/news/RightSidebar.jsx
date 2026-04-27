import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn'><FaGoogle /> Login with Google</button>
                <button className='btn'><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;