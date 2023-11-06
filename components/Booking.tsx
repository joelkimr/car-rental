import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CgAsterisk } from 'react-icons/cg';
import { BiCalendar } from 'react-icons/bi';

const Booking = () => {
  return (
    <>
      <section>
        <div className='md:min-w-full min-w-[140%] h-96 md:pl-0 pl-16'>
          <div className='flex md:flex-row flex-col justify-evenly'>
            <div className='md:space-y-3 space-y-2'>
              <div>
                <p className='font-extrabold md:text-2xl text-4xl mb-6'>Book a Car</p>
              </div>
              <div className='flex flex-row items-center'>
                <AiFillCar className='md:text-lg text-2xl text-primary mr-2' />
                <label htmlFor='vehicles' className='font-bold md:text-base text-2xl'>
                  Select Your Car Type
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='md:w-auto w-80 h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer text-xl'>
                <option value='audi'>Audi A4 S-Live</option>
                <option value='gold'>VW Golf 6</option>
                <option value='hilux'>Toyota Hilux</option>
                <option value='bmw'>BMW 320 ModernLive</option>
                <option value='benz'>Mercedes-Benz GLE</option>
                <option value='passo'>VW Passo CC</option>
              </select>
              <div className='flex flex-row'>
                <BiCalendar className='mt-1 md:text-lg text-2xl mr-2 text-primary' />
                <p className='font-bold  md:text-base text-2xl'>Pick-up</p>
                <CgAsterisk className='text-primary' />
              </div>
              <p className='md:text-[13px] text-lg text-gray-400'>mm / dd / yyyy</p>
            </div>
            <div className='space-y-3 md:mt-14 mt-3'>
              <div className='flex felx-row items-center'>
                <MdOutlineLocationOn className='text-lg text-primary mr-1' />
                <label htmlFor='vehicles' className='font-bold  md:text-base text-2xl'>
                  Pick-up
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='md:w-auto w-80 h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer text-xl'>
                <option value='location'>Your current location</option>
                <option value='town'>Downtown</option>
                <option value='street'>Elizabeth Street</option>
                <option value='restaurent'>KFC around</option>
                <option value='resto'>CAFE JAVA</option>
              </select>
              <div className='flex flex-row'>
                <BiCalendar className='mt-1 text-lg mr-2 text-primary' />
                <p className='font-bold  md:text-base text-2xl'>Drop-of</p>
                <CgAsterisk className='text-primary' />
              </div>
              <p className='md:text-[13px] text-lg text-gray-400'>mm / dd / yyyy</p>
            </div>
            <div className='space-y-3 md:mt-14  mt-3'>
              <div className='flex felx-row items-center'>
                <MdOutlineLocationOn className='text-lg text-primary mr-1' />
                <label htmlFor='vehicles' className='font-bold  md:text-base text-2xl'>
                  Drop-of
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='md:w-auto w-80 h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer text-xl'>
                <option value='town'>Downtown</option>
                <option value='street'>Elizabeth Street</option>
                <option value='restaurent'>KFC around</option>
                <option value='resto'>CAFE JAVA</option>
              </select>
              <br />
              <button className='md:w-72 w-80 h-12 border-2 bg-primary text-white font-bold rounded-md hover:bg-primary/70 transition ease-out duration-300'>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
