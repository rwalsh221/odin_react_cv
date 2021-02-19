import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { setLocalStorage } from '../../utilities/utilities';

import classes from './HeaderNavigation.module.css';

const HeaderNavigation = (props) => {
  const state = useSelector((state) => state);

  return (
    <header>
      <Link to="/home">
        <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
      </Link>
      <nav className={classes.navBar}>
        <Link to="/home">
          <button className={classes.navButton}>HOME</button>
        </Link>
        <Link to="/preview">
          <button
            className={classes.navButton}
            onClick={() => {
              setLocalStorage('fullState', state);
            }}
          >
            PREVIEW CV
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
