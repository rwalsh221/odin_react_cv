import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setLocalStorage } from '../../utilities/utilities';

import classes from './HeaderNavigation.module.css';

const HeaderNavigation = ({ homeProps, previewProps }) => {
  const state = useSelector((reduxState) => reduxState);

  let btnClassHome = classes.navButton;
  let btnClassPreview = classes.navButton;

  if (homeProps) {
    btnClassHome = classes.navButtonClicked;
  }

  if (previewProps) {
    btnClassPreview = classes.navButtonClicked;
  }

  return (
    <header>
      <Link to="/">
        <h1 className={classes.mainHeading}>ODIN-Project-React-CV</h1>
      </Link>
      <nav className={classes.navBar}>
        <Link to="/">
          <button className={btnClassHome} type="button">
            HOME
          </button>
        </Link>
        <Link to="/preview">
          <button
            className={btnClassPreview}
            type="button"
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

HeaderNavigation.propTypes = {
  homeProps: PropTypes.bool.isRequired,
  previewProps: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
