import React, { useState } from 'react';

const Model = () => {
  const [selected, setSelected] = useState(0);
  const cars = [
    {
      Type: 'Audi A4 S-Line',
      details: [
        {
          price: '$55',
        },
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
      details: [
        {
          price: '$48',
        },
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
          car: 'Automatic',
        },
        {
          carmode: 'Fuel',
          car: 'Hybrid',
        },
      ],
    },
    {
      Type: 'Toyota Hilux',
      details: [
        {
          price: '$55',
        },
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
      Type: 'BMW 320 ModernLine',
      details: [
        {
          price: '$55',
        },
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
      Type: 'Mercedes-Benz GLE',
      details: [
        {
          price: '$55',
        },
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
      Type: 'VW Passo',
      details: [
        {
          price: '$55',
        },
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
          car: 'Yes',
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
      <section>
        <div className='flex flex-col justify-center items-center gap-y-3 m-16'>
          <p className='text-2xl font-bold'>Vehicle Models</p>
          <p className='text-4xl font-extrabold'>Our rental fleet</p>
          <p className='text-black/60 text-[16px] '>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            {cars.map((models, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelected(key);
                  }}
                  className={`w-44 h-10 inline-flex items-center justify-center text-center text-[16px] border border-solid border-[#dee2e6] font-medium rounded-md ease-in duration-200 hover:bg-primary hover:text-white ${
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
          <div>
            <RowOne data={cars[selected]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Model;

const RowOne = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <div className=''>
        {data.details.map((detail: any, key: number) => {
          return (
            <div key={key}>
              <div>
                <p>{detail.price}</p>
              </div>
              <div className='flex flex-row'>
                <div>
                  <p>{detail.carmode}</p>
                </div>
                <div>
                  <p>{detail.car}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
