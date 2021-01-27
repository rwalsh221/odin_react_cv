import React from 'react';

import classes from './HeaderNavigation.module.css';

const headerNavigation = (props) => {
  return (
    <header>
      <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
    </header>
  );
};

export default headerNavigation;
