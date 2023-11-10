import React from 'react';
import { NextPage } from 'next';
import Hero from './content/Hero';
import Booking from '../components/Booking';
import Planning from '../components/Planning';
import Model from '../components/Model';
import Banner from '../components/Banner';
import ChooseUs from '../pages/ChooseUs/chooseus';
import Testimonials from '../components/Testimonials';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Booking />
      <Planning />
      <Model />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
