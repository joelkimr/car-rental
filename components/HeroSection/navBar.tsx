import Image from 'next/image';
import { Link } from 'react-scroll';
import React from 'react';
import Logo from '../../images/logo/logo.png';

const NavBar = () => {
  return (

    <div className='md:min-w-full min-w-[140%] mt-6 flex lg:justify-center lg:items-center lg:space-x-6 xl:space-x-24 justify-around'>
      <div>
        <Link to='hero'>
          <Image
            src={ Logo }
            alt='logo-img'
            width={ 170 }
            height={ 60 }
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='lg:block hidden'>
        <ul className='flex font-bold text-lg space-x-4'>
          <Link
            to='hero'
            spy={ true }
            smooth={ true }
            offset={ 0 }
            duration={ 900 }
            className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
            Home

          </Link>
          <Link
            to='chooseus'
            spy={ true }
            smooth={ true }
            offset={ 300 }
            duration={ 900 }
            className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
            About

          </Link>
          <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
            Vehicles Models
          </li>
          <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
            { ' ' }
            Testimanials
          </li>
          <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
            Contact
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center font-bold md:text-lg text-2xl md:space-x-2 space-x-9'>
        <div className='w-28 h-12 hover:bg-orange-100 flex items-center justify-center rounded-md transition duration-300'>
          <Link className='' to='#'>
            Sign In
          </Link>
        </div>
        <div className='md:w-28 w-36 md:h-12 h-16 bg-orange-500 flex items-center justify-center text-white rounded-md'>
          <Link to=''>Register</Link>
        </div>
      </div>
    </div>

  );
};

export default NavBar;
