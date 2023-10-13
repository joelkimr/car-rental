import React from 'react';
import { NextPage } from 'next';
import Hero from '../components/Hero';
import Booking from '../components/Booking';
import Planning from '../components/Planning';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Booking />
      <Planning />
    </>
  );
};

export default Home;
