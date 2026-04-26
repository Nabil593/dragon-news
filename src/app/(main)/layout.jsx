import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navber from '@/components/shared/Navber';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
        <Header />
        <BreakingNews />
        <Navber />
        { children }
        </>
    );
};

export default MainLayout;