import React from 'react';
import Image from 'next/image';
import user1 from '../images/testimonials/pfp1.jpg';
import user2 from '../images/testimonials/pfp2.jpg';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <>
            <section>
                <div className='space-y-28 mb-32'>
                    <div className='md:min-w-fit min-w-[150%] flex flex-col justify-center items-center space-y-3 mt-32'>
                        <p className='md:text-2xl text-3xl font-bold'>Reviewed by People</p>
                        <p className='md:text-4xl text-5xl font-extrabold'>Client's Testimonials</p>
                        <p className='w-5/6 text-black/70 text-center md:text-[16px] text-[22px]'> Discover the positive impact we've made on the our clients by
                            reading through their testimonials. Our clients have experienced
                            our service and results, and they're eager to share their
                            positive experiences with you.
                        </p>
                    </div>
                    <div className='md:min-w-fit min-w-[150%] flex md:flex-row flex-col items-center justify-center gap-x-32 gap-y-20'>
                        <div className='md:w-1/4 w-1/2'><p className='text-black font-bold md:text-xl text-3xl'>
                            "We rented a car from this website and had an amazing
                            experience! The booking was easy and the rental rates were
                            very affordable. "
                        </p>
                            <div className='w-80 md:w-60 flex flex-row justify-between items-center m-6'>
                                <div className='flex flex-row items-center gap-x-4 '>
                                    <div><Image src={ user1 } width={ 70 } height={ 70 } className='rounded-full' /></div>
                                    <div className='md:text-base text-[22px]'><p className='font-extrabold'>Johnny Beach</p>
                                        <p className='font-semibold'>Belgium</p>
                                    </div>
                                </div>
                                <div>
                                    <FaQuoteRight className='text-4xl text-primary' />
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/4 w-1/2'><p className='text-black font-bold md:text-xl text-3xl'>
                            "The car was in great condition and made our trip even better.
                            Highly recommend for this car rental website!"king was easy and the rental rates were
                            very affordable. "
                        </p>
                            <div className='w-80 md:w-60 flex flex-row justify-between items-center m-6'>
                                <div className='flex flex-row items-center gap-x-4'>
                                    <div><Image src={ user2 } width={ 70 } height={ 70 } className='rounded-full' /></div>
                                    <div className='md:text-base text-[22px]'><p className='font-extrabold'>Jean Pierre</p>
                                        <p className='font-semibold'>Brussels</p>
                                    </div>
                                </div>
                                <div>
                                    <FaQuoteRight className='text-4xl text-primary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials