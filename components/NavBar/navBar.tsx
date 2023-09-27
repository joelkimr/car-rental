import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../images/logo/logo.png';

const NavBar = () => {
  const CustomLink = ({ href = '', title = '' }) => {
    return (
      <>
        <Link
          href={href}
          className=' hover:text-orange-500 transition duration-300'
        >
          {title}
        </Link>
      </>
    );
  };
  return (
    <>
      <nav>
        <div className='flex justify-around items-center m-6'>
          <div>
            <Link href='#' onClick={() => window.scrollTo(0, 0)}>
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
              <CustomLink href='#' title='Home' />
              <CustomLink href='#' title='About' />
              <CustomLink href='#' title='Vehicle Models' />
              <CustomLink href='#' title='Testimonials' />
              <CustomLink href='#' title='Our Team' />
              <CustomLink href='#' title='Contact' />
            </ul>
          </div>
          <div className='flex items-center justify-center font-bold space-x-2 text-lg'>
            <div className='w-28 h-12 hover:bg-orange-100 flex items-center justify-center rounded-md transition duration-300'>
              <Link className='' href='/'>
                Sign In
              </Link>
            </div>
            <div className='w-28 h-12 bg-orange-500 flex items-center justify-center text-white rounded-md'>
              <Link href='/'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
