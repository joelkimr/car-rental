import React from 'react';
import NavBar from './NavBar/navBar';
import Image from 'next/image';
import Background from '../images/hero/hero-bg.png';
import MainCar from '../images/hero/main-car.png';

const Hero = () => {
  return (
    <>
      <section className='w-full h-auto'>
        <NavBar />
        <div>
          <div className='relative'>
            <div className='w-full text-end absolute'>
              <Image src={Background} width={600} height={550} />
            </div>
            <div className='w-full h-screen flex justify-center items-center absolute -mt-14'>
              <div className='space-y-9'>
                <div className='space-y-4'>
                  <p className='text-2xl font-extrabold'>Plan your trip now</p>
                  <p className='text-6xl font-bold'>
                    Save <span className='text-orange-600'>big </span>with our{' '}
                    <br /> car rental
                  </p>
                  <p className='text-sm text-black/50'>
                    Rent the car of your dreams. Unbeatable prices. Unlimited
                    miles. <br /> Flexible pick-up options and much more
                  </p>
                </div>
                <div className='banner-btn'>
                  <a href='#'>
                    <span></span>
                    <b>Book Ride</b>
                  </a>
                  <a href='#'>
                    <span></span> <b> Learn More</b>
                  </a>
                </div>
              </div>
              <div>
                <Image src={MainCar} width={650} height={380} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
