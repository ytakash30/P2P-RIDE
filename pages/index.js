import React from 'react';
import Image from 'next/image';
import Header1 from '@/components/Header1';
import Header2 from '@/components/Header2';
import avatar from '../temp/avatar.jpg'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'


const Navbar = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <div className="header mx-10 my-14">
        <Image src="/banner1.jpg" alt="Banner Image" width={1400} height={645} className="w-full" />
      </div>
    </div>

  );
  
};

export default Navbar;
