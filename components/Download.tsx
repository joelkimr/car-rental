import Image from 'next/image'
import React from 'react'
import Img1 from '../images/download/appstore.svg';
import Img2 from '../images/download/googleapp.svg';
import bg02 from '../images/banners/bg02.png'

const Download = () => {
    return (
        <>
            <section className='pt-20'>
                <div className='md:w-1/3 w-full space-y-5 absolute xl:left-80 left-28 xl:mt-32'>
                    <p className='md:text-4xl text-5xl font-extrabold'>Download our app to get most out of it</p>
                    <p className='text-black/70 lg:block hidden'> Thrown shy denote ten ladies though ask saw. Or by to he going
                        think order event music. Incommode so intention defective at
                        convinced. Led income months itself and houses you.
                    </p>
                    <div className='flex flex-row gap-x-9'>
                        <div>
                            <Image src={ Img2 } width={ 200 } height={ 80 } />
                        </div>
                        <div>
                            <Image src={ Img1 } width={ 200 } height={ 80 } />
                        </div>
                    </div>
                </div>
                <div className='relative md:block hidden'>
                    <Image src={ bg02 } />
                </div>
            </section>
        </>
    )
}

export default Download