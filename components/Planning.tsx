import React from 'react';

const Planning = () => {
  return (
      <section>
        <div className='flex flex-col justify-center items-center gap-y-3'>
          <p className='text-2xl font-bold'>Plan your trip now</p>
          <p className='text-4xl font-extrabold'>Quick & easy car rental</p>
          <div className='w-3/5 space-x-32 flex flex-row m-28'>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon1.png?updatedAt=1697709103482' />
              <p className=' text-2xl font-extrabold'>Select Car</p>
              <p className='text-black/60 text-[18px] mt-3'>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon2.png?updatedAt=1697709103311' />
              <p className=' text-2xl font-extrabold'>Contact Operator</p>
              <p className='text-black/60 text-[18px] mt-3'>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon3.png?updatedAt=1697709103320' />
              <p className=' text-2xl font-extrabold mt-2'>Let us Drive</p>
              <p className='text-black/60 text-[18px] mt-3'>
              Wheither you are hitting the open road. We have got you covered
                with our wide range of cars{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Planning;
