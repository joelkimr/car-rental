import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../images/logo/logo.png';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='flex justify-around items-center m-6'>
          <div>
            <Link href='#'>
              <Image
                src={Logo}
                alt='logo-img'
                width={170}
                height={60}
                className='cursor-pointer'
              />
            </Link>
          </div>
          <div>
            <ul className='flex space-x-11 font-bold text-lg'>
              <Link href='/'>
                <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                  Home
                </li>
              </Link>
              <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                About
              </li>
              <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                Vehicles Models
              </li>
              <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                {' '}
                Testimanials
              </li>
              <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                Our Team
              </li>
              <li className=' hover:text-orange-700 transition duration-400 cursor-pointer'>
                Contact
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-center font-bold space-x-2 text-lg'>
            <div className='w-28 h-12 hover:bg-orange-100 flex items-center justify-center rounded-md transition duration-300'>
              <Link className='' href='/'>
                Sign In
              </Link>
            </div>
            <div className='w-28 h-12 bg-orange-500 flex items-center justify-center text-white rounded-md shadow-inner'>
              <Link href='/'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
