import Head from 'next/head';
import React from 'react';

const PageMetaData = (): JSX.Element => {
  return (
    <Head>

      <title>Car Rental</title>
      <meta name='Description' content='Car Rental WebSite' />
      {/* <link rel="shortcut icon" href="https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718" type="image/x-icon" /> */ }
    </Head>
  );
};

export default PageMetaData;
