import React from 'react';
import { Link } from 'react-router-dom';

import classes from './HeaderNavigation.module.css';

const headerNavigation = (props) => {
  return (
    <header>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
      <Link to="/preview">
        <button>PREVIEW CV</button>
      </Link>
    </header>
  );
};

export default headerNavigation;
