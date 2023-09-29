import React from 'react';
import { AppProps } from 'next/app';
import Scaffold from '../components/Scaffold';
import PageMetaData from '../components/PageMetaData';
import '../styles/animation.css';
import '../styles/globals.css';

// import { Montserrat } from 'next/font/google';

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-mont',
// });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <main className={ `${montserrat.variable} font-mont` }> */}
      <PageMetaData />
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
      {/* </main> */}
    </>
  );
};

export default MyApp;
