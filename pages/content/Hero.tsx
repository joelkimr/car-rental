import React from 'react';
import NavBar from './navBar';
import Image from 'next/image';
import Background from '../../images/hero/hero-bg.png';
import MainCar from '../../images/hero/main-car.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MdVerified } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <section className='w-full h-auto'>
        <NavBar />

        <div className='relative'>
          <div className='w-full text-end absolute lg:block hidden'>
            <Image src={ Background } width={ 600 } height={ 550 } />
          </div>
          <div className='md:min-w-full min-w-[140%] h-screen flex justify-center items-center mt-24 md:mt-0 mb-20 md:mb-0'>
            <div className='space-y-9'>
              <div className='space-y-4'>
                <p className='md:text-2xl text-4xl font-extrabold'>Plan your trip now</p>
                <p className='md:text-5xl text-6xl font-extrabold'>
                  Save <span className='text-orange-600'>big </span>with our
                  <br /> car rental
                </p>
                <p className='md:text-sm text-lg text-black/50 font-semibold'>
                  Rent the car of your dreams. Unbeatable prices. Unlimited
                  miles. <br /> Flexible pick-up options and much more
                </p>
              </div>
              <div className='banner-btn'>
                <a href='#'>
                  <div className='flex flex-row'>
                    <span></span>
                    <p>
                      { ' ' }
                      <b> Book Ride</b>
                    </p>
                    <p className='mt-1 ml-4 text-xl'>
                      <MdVerified />
                    </p>
                  </div>
                </a>
                <a href='#'>
                  <div className='flex flex-row'>
                    <span></span>
                    <p>
                      { ' ' }
                      <b> Learn More</b>
                    </p>
                    <p className='mt-1 ml-4 text-xl'>
                      <RiArrowRightSLine />
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className='xl:w-[39rem] xl:h-[33rem] w-[31rem] h-[25rem] lg:block hidden' >
              <Image src={ MainCar } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
