import React, { useState } from 'react';

const Model = () => {
  const [selected, setSelected] = useState(0);
  const cars = [
    {
      Type: 'Audi A4 S-Line',
      price: '$55',
      photo: 'https://ik.imagekit.io/joel/audia1.jpg?updatedAt=1697711751386',
      details: [
        {
          carmode: 'Model',
          car: 'Audi',
        },
        {
          carmode: 'Mark',
          car: 'A4',
        },
        {
          carmode: 'Year',
          car: '2012',
        },
        {
          carmode: 'Doors',
          car: '4/5',
        },
        {
          carmode: 'AC',
          car: 'Yes',
        },
        {
          carmode: 'Transmission',
          car: 'Automatic',
        },
        {
          carmode: 'Fuel',
          car: 'Gasoline',
        },
      ],
    },
    {
      Type: 'VW Golf 6',
      price: '$48',
      photo: 'https://ik.imagekit.io/joel/golf6.jpg?updatedAt=1697711751455',
      details: [
        {
          carmode: 'Model',
          car: 'Golf',
        },
        {
          carmode: 'Mark',
          car: 'Volkswagen',
        },
        {
          carmode: 'Year',
          car: '2008',
        },
        {
          carmode: 'Doors',
          car: '4/5',
        },
        {
          carmode: 'AC',
          car: 'Yes',
        },
        {
          carmode: 'Transmission',
          car: 'Manuel',
        },
        {
          carmode: 'Fuel',
          car: 'Hybrid',
        },
      ],
    },
    {
      Type: 'Mercedes-Benz GLE',
      price: '$97',
      photo: 'https://ik.imagekit.io/joel/benz.jpg?updatedAt=1697711751259',
      details: [
        {
          carmode: 'Model',
          car: 'Benz GLE',
        },
        {
          carmode: 'Mark',
          car: 'Mercedes',
        },
        {
          carmode: 'Year',
          car: '2009',
        },
        {
          carmode: 'Doors',
          car: '4/5',
        },
        {
          carmode: 'AC',
          car: 'Yes',
        },
        {
          carmode: 'Transmission',
          car: 'Automatic',
        },
        {
          carmode: 'Fuel',
          car: 'Gasoline',
        },
      ],
    },
    {
      Type: 'BMW 320 ModernLine',
      price: '$80',
      photo: 'https://ik.imagekit.io/joel/bmw320.jpg?updatedAt=1697711609015',
      details: [
        {
          carmode: 'Model',
          car: '320',
        },
        {
          carmode: 'Mark',
          car: 'BMW',
        },
        {
          carmode: 'Year',
          car: '2014',
        },
        {
          carmode: 'Doors',
          car: '4/5',
        },
        {
          carmode: 'AC',
          car: 'Yes',
        },
        {
          carmode: 'Transmission',
          car: 'Manuel',
        },
        {
          carmode: 'Fuel',
          car: 'Diesel',
        },
      ],
    },
    {
      Type: 'Toyota Hilux',
      price: '$60',
      photo: 'https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718',
      details: [
        {
          carmode: 'Model',
          car: 'Hilux',
        },
        {
          carmode: 'Mark',
          car: 'Toyota',
        },
        {
          carmode: 'Year',
          car: '2006',
        },
        {
          carmode: 'Doors',
          car: '4',
        },
        {
          carmode: 'AC',
          car: 'Yes',
        },
        {
          carmode: 'Transmission',
          car: 'Automatic',
        },
        {
          carmode: 'Fuel',
          car: 'Diesel',
        },
      ],
    },
    {
      Type: 'VW Passo',
      price: '$30',
      photo: 'https://ik.imagekit.io/joel/toyotacamry.jpg?updatedAt=1697711886811',
      details: [
        {
          carmode: 'Model',
          car: 'Passo',
        },
        {
          carmode: 'Mark',
          car: 'Toyota',
        },
        {
          carmode: 'Year',
          car: '2006',
        },
        {
          carmode: 'Doors',
          car: '4/5',
        },
        {
          carmode: 'AC',
          car: '??',
        },
        {
          carmode: 'Transmission',
          car: 'Automatic',
        },
        {
          carmode: 'Fuel',
          car: 'Hybrid',
        },
      ],
    },
  ];

  return (
    <>
      <section className='mt-36 lg:mt-0'>
        <div className='md:min-w-fit min-w-[140%] flex flex-col justify-center items-center gap-y-3 m-9'>
          <p className='md:text-2xl text-3xl font-bold'>Vehicle Models</p>
          <p className='md:text-4xl text-5xl font-extrabold'>Our rental fleet</p>
          <p className='text-black/70 text-center md:text-[16px] text-[22px]'>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip below
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-center items-center space-y-9 pb-9 m-9'>
          <div className='w-1/4 flex flex-col'>
            {cars.map((models, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelected(key);
                  }}
                  className={ `xl:w-64 xl:h-12 md:w-44 w-80 md:h-10 h-16 inline-flex items-center justify-center text-center xl:text-[19px] md:text-[16px] text-[25px] border-b  border-[#b8b8b8] font-bold rounded-md ease-in duration-200 hover:bg-primary hover:text-white mb-2 ${
                    selected === key
                      ? 'bg-primary text-white'
                      : 'bg-none text-black'
                  }`}
                >
                  {models.Type}
                </button>
              );
            })}
          </div>
          <div className='xl:w-1/3 md:w-1/2 w-full md:ml-0 ml-56'>
            <img src={ cars[selected]?.photo } alt="" className="" />
          </div>
          <div className='w-1/4 lg:ml-12'>
            <RowOne data={cars[selected]} />
            <div>
              <button className='md:w-60 w-80 h-12 bg-primary text-white hover:bg-primary/80 transform ease-out duration-300 font-bold text-[19px] mt-3'>
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Model;

const RowOne = ({ data }: { data: any }) => {
  return (
    <table>
      <thead>
        <tr className='bg-primary text-white'>
          <td className='text-center p-2'>
            <p className='text-[26px] font-extrabold'>{ data?.price }<span className='md:text-[18px] text-[30px] font-bold'> / price per day</span></p>
          </td>
        </tr>
      </thead>
      <tbody>
        { data.details.map((detail: any, key: number) => (
          <tr key={ key } className='md:w-60 w-80 h-9 flex justify-between border-b border-r border-l text-center md:text-[16px] text-[20px]'>
            <td className='grid grid-cols-3 w-full py-1'>
              <p>{ detail?.carmode }</p><p> - </p><p>{ detail?.car }</p>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
};
