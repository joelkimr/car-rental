import React from 'react';
import Image from 'next/image';
import Ban from '../images/chooseUs/main.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import Icon1 from '../images/chooseUs/icon1.png';
import Icon2 from '../images/chooseUs/icon2.png';
import Icon3 from '../images/chooseUs/icon3.png';

const ChooseUs = () => {
  return (
    <>
      <section>
        <div className='text-center m-9 md:block hidden'>
          <Image alt='profile' src={Ban} />
        </div>
        <div className='md:w-9/12 flex lg:flex-row flex-col justify-center items-center space-x-16 md:p-0 mx-auto'>
          <div className='w-full space-y-2'>
            <h4 className='md:text-xl text-3xl font-extrabold'>
              Why Choose Us
            </h4>
            <h2 className='md:text-4xl text-5xl font-extrabold'>
              Best valued deals you will ever find
            </h2>
            <p className='text-black/60 md:text-base text-[23px]'>
              Discover the best deals you{`'`}ll ever find with our unbeatable
              offers. We{`'`}re dedicated to providing you with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so do not miss out on your chance to
              save big.
            </p>
            <div className='banner-btn'>
              <a href='#'>
                <div className='flex flex-row'>
                  <span></span>
                  <p>
                    <b> Find Details</b>
                  </p>
                  <p className='mt-1 ml-2 text-xl'>
                    <RiArrowRightSLine />
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='w-full space-y-8 lg:mt-0 mt-20'>
            <div className='flex flex-row items-center gap-6'>
              <div>
                <Image alt='profile' src={Icon1} width={200} height={200} />
              </div>
              <div>
                <h4 className='md:text-2xl text-4xl font-extrabold'>
                  Cross Country Drive
                </h4>
                <p className='text-black/60 md:text-base text-[22px]'>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center gap-6'>
                <div>
                  <Image alt='profile' src={Icon2} width={200} height={200} />
                </div>
                <div>
                  <h4 className='md:text-2xl text-4xl font-extrabold'>
                    All Inclusive Pricing
                  </h4>
                  <p className='text-black/60 md:text-base text-[22px]'>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center gap-6'>
                <div>
                  <Image alt='profile' src={Icon3} width={200} height={200} />
                </div>
                <div>
                  <h4 className='md:text-2xl text-4xl font-extrabold'>
                    No Hidden Charges
                  </h4>
                  <p className='text-black/60 md:text-base text-[22px]'>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-20' />
      </section>
    </>
  );
};

export default ChooseUs;
