import Image from 'next/image';
import React from 'react';
import Img1 from '../images/download/appstore.svg';
import Img2 from '../images/download/googleapp.svg';
import bg02 from '../images/banners/bg02.png';

const Download = () => {
  return (
    <>
      <section className='pt-10 pb-16'>
        <div className='w-9/12 mx-auto relative '>
          <div className='w-1/2 h-full absolute top-16 space-y-3'>
            <p className='md:text-4xl text-5xl font-extrabold'>
              We are still working on our app to get most out of it
            </p>
            <p className='text-black/70 lg:block hidden'>
              {' '}
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className='flex flex-row gap-x-9'>
              <div>
                <Image src={Img2} width={140} height={70} />
              </div>
              <div>
                <Image src={Img1} width={140} height={70} />
              </div>
            </div>
          </div>
          <div className='md:block hidden'>
            <Image src={bg02} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;