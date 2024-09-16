import React, { useState } from 'react';
import { LogoSlider } from './Logos';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Booking = () => {
  const [dates, setDates] = useState([]);
  return (
    <>
      <section className='mt-9'>
        <div className='w-9/12 mx-auto'>
          <div className=''>
            <p className='font-extrabold md:text-2xl text-4xl mb-6'>
              Book a Car
            </p>
          </div>
          <div>
            <RangePicker
              className='w-96'
              onChange={(values) => {
                setDates(values);
              }}
            />
          </div>
        </div>
        <div className='py-36 w-9/12 mx-auto'>
          <div className='relative h-12 min-h-12 overflow-x-hidden'>
            <div className="before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[30%] before:bg-gradient-to-r before:from-orange-200 before:content-['']"></div>
            <div className="after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[30%] after:bg-gradient-to-l after:from-orange-200 after:content-['']"></div>
            <div className='flex h-full items-center justify-center'>
              <LogoSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
