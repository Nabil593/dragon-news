import Navber from '@/components/shared/Navber';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navber />
            {children}
        </div>
    );
};

export default AuthLayout;