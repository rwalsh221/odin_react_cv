import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { setLocalStorage } from '../../utilities/utilities';

import classes from './HeaderNavigation.module.css';

const HeaderNavigation = (props) => {
  const state = useSelector((state) => state);

  let btnClassHome = classes.navButton;
  let btnClassPreview = classes.navButton;

  if (props.home) {
    btnClassHome = classes.navButtonClicked;
  }

  if (props.preview) {
    btnClassPreview = classes.navButtonClicked;
  }

  return (
    <header>
      <Link to="/home">
        <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
      </Link>
      <nav className={classes.navBar}>
        <Link to="/home">
          <button className={btnClassHome}>HOME</button>
        </Link>
        <Link to="/preview">
          <button
            className={btnClassPreview}
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
