import Image from 'next/image';
import React from 'react';
import Logo from '../../images/logo/logo.png';
import { MdPersonPin } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='w-9/12 flex lg:justify-between lg:items-center lg:space-x-6 xl:space-x-24 mx-auto pt-6'>
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
