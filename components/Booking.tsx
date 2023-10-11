import React from 'react';

const Booking = () => {
  return (
    <>
      <section>
        <div className='w-full h-96'>
          <p>Book a Car</p>
          <div className='flex flex-row'>
            <div>
              <p>Select Your Car Type</p>
              <p>Pick-up</p>
            </div>
            <div>
              <p>Pick-up</p>
              <p>Drop-of</p>
            </div>
            <div>
              <p>Drop-of</p>
              <button className='w-72 h-12 border-2 bg-orange-600 text-white'>
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
