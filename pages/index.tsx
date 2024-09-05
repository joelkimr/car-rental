import React from 'react';
import { NextPage } from 'next';
import Hero from '../components/HeroSection/Hero';
import Booking from '../components/Booking/Booking';
import Planning from '../components/Planning';
import Model from '../components/Model';
import Banner from '../components/Banner';
import ChooseUs from '../components/chooseus';
import Testimonials from '../components/Testimonials';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <Booking />
      <Planning />
      <Model />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
