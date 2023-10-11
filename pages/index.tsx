import React from 'react';
import { NextPage } from 'next';
import Hero from '../components/Hero';
import Booking from '../components/Booking';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Booking />
    </>
  );
};

export default Home;
