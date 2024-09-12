import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo/logo.png';
import { MdPersonPin } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';
import DropDownProfile from './dropDownProfile';
import { UserMenuButton } from './user-menu-button';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

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
      className={`w-full flex mx-auto justify-around p-3 space-x-[33rem] border-[1px] border-b-black/10 header bg-white/70 fixed z-50 ${
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
      <div className='inline-flex z-50'>
        <UserMenuButton />
      </div>
      {/* <div
        className='flex items-center justify-center relative'
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        <div>
          <HiMenuAlt4 className='text-xl  cursor-pointer' />
        </div>
        <div>
          <MdPersonPin className=' text-3xl cursor-pointer' />
        </div>
        {openProfile && <DropDownProfile />}
      </div> */}
    </div>
  );
};

export default NavBar;
