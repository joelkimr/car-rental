import React from 'react';
import Image from 'next/image';
import Ban from '../images/chooseUs/main.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import Icon1 from '../images/chooseUs/icon1.png';

const ChooseUs = () => {
  return (
    <>
      <section>
              <div className='text-center m-9'>
                  <Image src={ Ban } />
              </div>
        <div className='flex flex-row'>
          <div>
            <h4 className='text-xl font-extrabold'>Why Choose Us</h4>
            <h2 className='text-3xl font-extrabold'>
              Best valued deals you will ever find
            </h2>
            <p>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <div className='banner'>
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
          <div>
            <div className='flex flex-row'>
                          <div>
                              <Image src={ Icon1 } />
                          </div>
              <div>
                <h4>Cross Country Drive</h4>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
