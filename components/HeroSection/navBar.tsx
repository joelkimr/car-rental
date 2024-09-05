import Image from 'next/image';
import { Link } from 'react-scroll';
import React from 'react';
import Logo from '../../images/logo/logo.png';
import { MdPersonPin } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';

const NavBar = () => {
  return (
    <div className='w-9/12 flex lg:justify-between lg:items-center lg:space-x-6 xl:space-x-24 mx-auto mt-3'>
      <div>
        <Link to='hero'>
          <Image
            src={Logo}
            alt='logo-img'
            width={170}
            height={60}
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='flex items-center justify-center space-x-1'>
        <div>
          <HiMenuAlt4 className='text-2xl' />
        </div>
        <div>
          <MdPersonPin className=' text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
