import React from 'react';
import Image from 'next/image';
import Plan1 from '../images/plan/icon1.png';
import Plan2 from '../images/plan/icon2.png';
import Plan3 from '../images/plan/icon3.png';

const Planning = () => {
  return (
    <>
      <section>
        <div className='flex flex-col justify-center items-center gap-y-3'>
          <p className='text-2xl font-bold'>Plan your trip now</p>
          <p className='text-4xl font-extrabold'>Quick & easy car rental</p>
          <div className='w-3/5 space-x-32 flex flex-row m-28'>
            <div className='flex flex-col justify-center items-center'>
              <Image src={Plan1} />
              <p className=' text-2xl font-extrabold'>Select Car</p>
              <p className='text-black/60 text-[16px] mt-3'>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image src={Plan2} />
              <p className=' text-2xl font-extrabold'>Contact Operator</p>
              <p className='text-black/60 text-[16px] mt-3'>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image src={Plan3} />
              <p className=' text-2xl font-extrabold mt-2'>Let's Drive</p>
              <p className='text-black/60 text-[16px] mt-3'>
                Wheter you are hitting the open road. We have got you covered
                with our wide range of cars{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planning;
