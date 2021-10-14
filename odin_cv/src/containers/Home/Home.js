import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVInput from '../../components/CVInput/CVInput';

const Home = () => (
  <>
    <HeaderNavigation home />
    {/* <HeaderNavigation home={true} /> */}
    <CVInput />
  </>
);

export default Home;
