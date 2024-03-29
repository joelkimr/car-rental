import React from 'react';

const Planning = () => {
  return (
    <section className='md:min-w-full min-w-[140%] mt-56 md:mt-0'>
      <div className='flex flex-col justify-center items-center gap-y-3 '>
          <p className='text-2xl font-bold'>Plan your trip now</p>
          <p className='text-4xl font-extrabold'>Quick & easy car rental</p>
        <div className='lg:w-3/5 w-full lg:space-x-32 space-x-3 flex md:flex-row flex-col lg:m-28 lg:p-0 p-9'>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon1.png?updatedAt=1697709103482' />
            <p className='md:text-2xl text-4xl font-extrabold'>Select Car</p>
            <p className='text-black/60 md:text-[18px] text-2xl mt-3'>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon2.png?updatedAt=1697709103311' />
            <p className='md:text-2xl text-4xl font-extrabold'>Contact Operator</p>
            <p className='text-black/60 md:text-[18px] text-2xl mt-3'>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src='https://ik.imagekit.io/joel/icon3.png?updatedAt=1697709103320' />
            <p className='md:text-2xl text-4xl font-extrabold mt-2'>Let us Drive</p>
            <p className='text-black/60 md:text-[18px] text-2xl mt-3'>
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
