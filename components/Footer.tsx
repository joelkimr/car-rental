import React from 'react'

const Footer = () => {
    return (
        <>
            <section>
                <div className='md:min-w-[100%] min-w-[150%] flex md:flex-row flex-col justify-center  xl:gap-x-44 gap-x-20 md:p-9 p-28 font-semibold md:text-left text-center space-y-9 md:space-y-0 mt-56 md:mt-auto'>
                    <div className='md:w-1/6 w-full'>
                        <h2 className='md:text-xl text-4xl'><span className='font-extrabold'>CAR</span> Rental</h2>
                        <p className='text-black/60 mt-4 mb-4 md:text-base text-2xl'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                        <p className='font-bold md:text-base text-2xl'>xxx-xxx-xxx</p>
                        <p className='font-bold md:text-base text-2xl'>carrental.47@gmail.com</p>
                    </div>
                    <div className='space-y-1 md:text-base text-2xl'>
                        <h2 className='md:text-xl text-4xl font-extrabold'>COMPANY</h2>
                        <p>Location</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                        <p>Blog</p>
                        <p>Blog</p>
                        <p>How we work</p>
                    </div>      
                    <div className='space-y-1 md:text-base text-2xl'>
                        <h2 className='md:text-xl text-4xl font-extrabold'>WORKING HOURS</h2>
                        <p>Mon - Fri: 9:00AM - 9:00PM</p>
                        <p>Sat: 9:00AM - 11:00PM</p>
                        <p>Sun: Closed</p>
                    </div>
                    <div className='md:w-1/6 w-full space-y-1'>
                        <h2 className='md:text-xl text-4xl font-extrabold'>SUBSCRIPTION</h2>
                        <p className=' md:text-base text-2xl text-black/75'>Subscribe your Email address for latest news & updates.</p>
                        <form action="#" className='flex flex-col gap-y-4 pt-5'>
                            <input type="text" placeholder='Enter Email Address' className='text-center md:h-9 h-16 border-2 focus:outline-none bg-transparent  md:text-xs lg:text-base text-2xl' />
                            <button type='submit' className='w-full md:h-11 h-16 bg-primary text-white font-bold rounded-md hover:bg-primary/70 transition ease-out duration-300  md:text-base text-2xl'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer