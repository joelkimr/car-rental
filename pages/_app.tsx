import React from 'react';
import { AppProps } from 'next/app';
import Scaffold from '../components/Scaffold';
import PageMetaData from '../components/PageMetaData';
import '../styles/globals.css';

import { Montserrat } from 'next/font/google';
import NavBar from '../components/HeroSection/navBar';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ClerkProvider>
        <main
          className={`${montserrat.variable} font-mont w-full h-full lg:min-w-full md:min-w-[150%] min-w-[300%] mx-auto overflow-x-hidden`}
        >
          <PageMetaData />
          <div className='absolute '>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <Scaffold>
            <NavBar />
            <Component {...pageProps} />
          </Scaffold>
        </main>
      </ClerkProvider>
    </>
  );
};

export default MyApp;
