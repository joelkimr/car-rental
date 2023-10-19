import React from 'react'

const Footer = () => {
    return (
        <>
            <section>
                <div className='flex flex-row justify-center gap-x-44 m-9 font-semibold'>
                    <div className='w-1/6'>
                        <h2 className='text-xl'><span className='font-extrabold'>CAR</span> Rental</h2>
                        <p className='text-black/60 mt-4 mb-4'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                        <p className='font-bold'>xxx-xxx-xxx</p>
                        <p className='font-bold'>carrental.47@gmail.com</p>
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-xl font-extrabold'>COMPANY</h2>
                        <p>Location</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                        <p>Blog</p>
                        <p>Blog</p>
                        <p>How we work</p>
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-xl font-extrabold'>WORKING HOURS</h2>
                        <p>Mon - Fri: 9:00AM - 9:00PM</p>
                        <p>Sat: 9:00AM - 11:00PM</p>
                        <p>Sun: Closed</p>
                    </div>
                    <div className='w-1/6 space-y-1'>
                        <h2 className='text-xl font-extrabold'>SUBSCRIPTION</h2>
                        <p>Subscribe your Email address for latest news & updates.</p>
                        <form action="#" className='flex flex-col gap-y-4 pt-5'>
                            <input type="text" placeholder='Enter Email Address' className='text-center h-9 border-2 focus:outline-none bg-transparent' />
                            <button type='submit' className='w-full h-11 bg-primary text-white font-bold rounded-md hover:bg-primary/70 transition ease-out duration-300'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer