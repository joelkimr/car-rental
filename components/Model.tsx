import React, { useState } from 'react';

const Model = () => {
  const [selected, setSelected] = useState(0);
  const cars = [
    {
      Type: 'Audi A4 S-Line',
      details: [
        {
          price: '$55 / rent per day',
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
          price: '$48 / rent per day',
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
          car: 'Manuel',
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
          price: '$60 / rent per day',
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
          price: '$80 / rent per day',
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
          price: '$97 / rent per day',
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
          price: '$30 / rent per day',
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
      <section className='m-32'>
        <div className='flex flex-col justify-center items-center gap-y-3 m-16'>
          <p className='text-2xl font-bold'>Vehicle Models</p>
          <p className='text-4xl font-extrabold'>Our rental fleet</p>
          <p className='text-black/90 text-[19px] '>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip below
          </p>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col'>
            {cars.map((models, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelected(key);
                  }}
                  className={`w-64 h-12 inline-flex items-center justify-center text-center text-[19px] border-b  border-[#b8b8b8] font-bold rounded-md ease-in duration-200 hover:bg-primary hover:text-white mb-2 ${
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
          <div></div>
          <div>
            <div></div>
            <RowOne data={cars[selected]} />
            <div>
              <button className='w-60 h-12 bg-primary text-white hover:bg-primary/80 transform ease-out duration-300 font-bold text-[19px] mt-3'>
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
    <>
      <div>
        {data.details.map((detail: any, key: number) => {
          return (
            <div key={key}>
              <table>
                <thead>
                  <tr>
                    <td className='text-center text-[23px] text-white font-bold  bg-primary'>
                      <span>{detail.price}</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <div className='w-60 h-7 text-[16px] flex flex-row border-b border-l border-r border-[#b8b8b8]'>
                    <div className='w-28 flex justify-center '>
                      <td>{detail.carmode}</td>
                    </div>
                    <span className='font-extrabold text-[#b8b8b8]'>-</span>
                    <div className='w-32 flex justify-center'>
                      <td>{detail.car}</td>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};
