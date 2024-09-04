import Link from 'next/link';
import React from 'react';

const Cars = () => {
  return (
    <div className='w-9/12 mx-auto flex flex-row justify-between items-center p-8 mt-14 mb-32'>
      <div className='text-3xl font-extrabold'>
        <p>Ready to Hit the Road?</p>
        <p> Start Your Adventure Today!</p>
      </div>
      <div className='bg-primary text-white w-auto p-3 font-semibold rounded-md hover:bg-primary/80 ease-in-out duration-300'>
        <Link href='/cars'>Explore Our Cars</Link>
      </div>
    </div>
  );
};

export default Cars;
