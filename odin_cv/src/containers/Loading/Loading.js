import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';

import classes from './Loading.module.css';

const Home = () => (
  <>
    <HeaderNavigation homeProps />
    <div className={classes.loading}>
      <p>LOADING</p>
    </div>
  </>
);

export default Home;
