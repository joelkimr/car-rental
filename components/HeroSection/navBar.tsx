import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo/logo.png';
import { MdPersonPin } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex mx-auto justify-around p-3 space-x-[33rem] border-[1px] border-b-black/10 header bg-white/60 fixed z-50 ${
        sticky ? 'border-[1px] border-b-black/10 shadow-sm' : ''
      }`}
    >
      <div>
        <Link href='/'>
          <Image
            src={Logo}
            alt='logo-img'
            width={120}
            height={20}
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='flex items-center justify-center space-x-1'>
        <div>
          <HiMenuAlt4 className='text-xl' />
        </div>
        <div>
          <MdPersonPin className=' text-3xl' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
