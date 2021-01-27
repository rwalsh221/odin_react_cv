import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CVInput from '../../components/CVInput/CVInput';

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <HeaderNavigation />
      <CVInput />
    </React.Fragment>
  );
};

export default Layout;
