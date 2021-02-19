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
        <button>HOME</button>
      </Link>
      <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
      <Link to="/preview">
        <button
          onClick={() => {
            console.log(state);
            setLocalStorage('fullState', state);
          }}
        >
          PREVIEW CV
        </button>
      </Link>
    </header>
  );
};

export default HeaderNavigation;
