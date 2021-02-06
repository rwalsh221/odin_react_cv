import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVInput from '../../components/CVInput/CVInput';

const Layout = (props) => {
  return (
    <React.Fragment>
      <HeaderNavigation />
      <CVInput />
    </React.Fragment>
  );
};

export default Layout;
