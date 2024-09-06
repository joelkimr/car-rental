import React from 'react';
import Image from 'next/image';
import MainCar from '../../images/hero/main-car.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MdVerified } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <section className='w-9/12 h-auto mx-auto'>
        <div className='relative'>
          <div className='h-screen flex justify-center items-center mt-24 md:mt-0 mb-20 md:mb-9 ml-6 md:ml-0'>
            <div className='space-y-9'>
              <div className='space-y-4'>
                <p className='md:text-2xl text-4xl font-extrabold'>
                  Plan your trip now
                </p>
                <p className='md:text-[45px] text-6xl font-extrabold'>
                  Save <span className='text-orange-600'>big </span>with our
                  <br /> car rental
                </p>
                <p className='md:text-sm text-lg text-black/50'>
                  Rent the car of your dream. Unbeatable prices.
                  <br /> Unlimited miles. <br /> Flexible pick-up options and
                  much more
                </p>
              </div>
              <div className='banner-btn'>
                <a href='#'>
                  <div className='flex flex-row items-center'>
                    <span></span>
                    <p className='text-sm'>
                      {' '}
                      <b> Book Ride</b>
                    </p>
                    <h1 className='mt-1 ml-4 text-xl'>
                      <MdVerified />
                    </h1>
                  </div>
                </a>
                <a href='#'>
                  <div className='flex flex-row items-center'>
                    <span></span>
                    <p className='text-sm'>
                      {' '}
                      <b> Learn More</b>
                    </p>
                    <p className='mt-1 ml-4 text-xl'>
                      <RiArrowRightSLine />
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className='xl:w-[39rem] xl:h-[33rem] w-[31rem] h-[25rem] lg:block hidden mt-24'>
              <Image alt='maincar_image' src={MainCar} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
