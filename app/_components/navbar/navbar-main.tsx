"use client"; 
import React from 'react';
import Navbar from '../navbar/navbar';

import { usePathname } from 'next/navigation';
import NavbarSecond from '../navbar/navbar-second';

const NavbarMain = () => {
  const pathname = usePathname(); 

  return (
    <>
      {pathname === '/login' && <NavbarSecond/>} 
      {pathname !== '/' && pathname !== '/login' && <Navbar />} 
    </>
  );
};

export default NavbarMain;