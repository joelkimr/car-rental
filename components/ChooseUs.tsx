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
              <div className='text-center m-9'>
                  <Image src={ Ban } />
              </div>
        <div className='flex flex-row justify-center gap-x-32'>
          <div className='w-1/4 space-y-2'>
            <h4 className='text-xl font-extrabold'>Why Choose Us</h4>
            <h2 className='text-4xl font-extrabold'>
              Best valued deals you will ever find
            </h2>
            <p className='text-black/60'>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <div className='banner-btn'>
              <a href='#'>
                <div className='flex flex-row'>
                  <span></span>
                  <p>
                    <b> Find Details</b>
                  </p>
                  <p className='mt-1 ml-4 text-xl'>
                                      <RiArrowRightSLine />
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='w-1/4 space-y-8'>
            <div className='flex flex-row items-center gap-6'>
              <div>
                <Image src={ Icon1 } width={ 200 } height={ 200 } />
                          </div>
              <div>
                <h4 className='text-2xl font-extrabold'>Cross Country Drive</h4>
                <p className='text-black/60 '>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center gap-6'>
                <div>
                  <Image src={ Icon2 } width={ 200 } height={ 200 } />
                </div>
                <div>
                  <h4 className='text-2xl font-extrabold'>All Inclusive Pricing</h4>
                  <p className='text-black/60'>
                    Get everything you need in one convenient, transparent
                    price with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center gap-6'>
                <div>
                  <Image src={ Icon3 } width={ 200 } height={ 200 } />
                </div>
                <div>
                  <h4 className='text-2xl font-extrabold'>No Hidden Charges</h4>
                  <p className='text-black/60'>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
