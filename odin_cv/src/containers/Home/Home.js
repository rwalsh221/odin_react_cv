import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVInput from '../../components/CVInput/CVInput';

const Home = (props) => {
  return (
    <React.Fragment>
      <HeaderNavigation />
      <CVInput />
    </React.Fragment>
  );
};

export default Home;
