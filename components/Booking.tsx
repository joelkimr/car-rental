import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CgAsterisk } from 'react-icons/cg';
import { BiCalendar } from 'react-icons/bi';

const Booking = () => {
  return (
    <>
      <section>
        <div className='w-full h-96'>
          <div className='flex flex-row justify-evenly'>
            <div className='space-y-3'>
              <div>
                <p className='font-extrabold text-2xl mb-6'>Book a Car</p>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <AiFillCar className='text-lg text-primary mr-2' />
                <label htmlFor='vehicles' className='font-bold'>
                  Select Your Car Type
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='w-auto h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer'>
                <option value='audi'>Audi A4 S-Live</option>
                <option value='gold'>VW Golf 6</option>
                <option value='hilux'>Toyota Hilux</option>
                <option value='bmw'>BMW 320 ModernLive</option>
                <option value='benz'>Mercedes-Benz GLE</option>
                <option value='passo'>VW Passo CC</option>
                <option value='wish'>Wish 7 seats</option>
              </select>
              <div className='flex flex-row'>
                <BiCalendar className='mt-1 text-lg mr-2 text-primary' />
                <p className='font-bold'>Pick-up</p>
                <CgAsterisk className='text-primary' />
              </div>
              <p className='text-[13px] text-gray-400'>mm / dd / yyyy</p>
            </div>
            <div className='space-y-3 mt-14'>
              <div className='flex felx-row items-center'>
                <MdOutlineLocationOn className='text-lg text-primary mr-1' />
                <label htmlFor='vehicles' className='font-bold'>
                  Pick-up
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='w-auto h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer'>
                <option value='location'>Your current location</option>
                <option value='town'>Downtown</option>
                <option value='street'>Elizabeth Street</option>
                <option value='restaurent'>KFC around</option>
                <option value='resto'>CAFE JAVA</option>
              </select>
              <div className='flex flex-row'>
                <BiCalendar className='mt-1 text-lg mr-2 text-primary' />
                <p className='font-bold'>Drop-of</p>
                <CgAsterisk className='text-primary' />
              </div>
              <p className='text-[13px] text-gray-400'>mm / dd / yyyy</p>
            </div>
            <div className='space-y-3 mt-14'>
              <div className='flex felx-row items-center'>
                <MdOutlineLocationOn className='text-lg text-primary mr-1' />
                <label htmlFor='vehicles' className='font-bold'>
                  Drop-of
                </label>
                <CgAsterisk className='text-primary' />
              </div>
              <select className='w-auto h-9 border border-primary focus:outline-none bg-transparent text-gray-600 cursor-pointer'>
                <option value='town'>Downtown</option>
                <option value='street'>Elizabeth Street</option>
                <option value='restaurent'>KFC around</option>
                <option value='resto'>CAFE JAVA</option>
              </select>
              <br />
              <button className='w-72 h-12 border-2 bg-primary text-white font-bold rounded-md hover:bg-primary/70 transition ease-out duration-300'>
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
