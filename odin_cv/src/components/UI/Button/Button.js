import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
  let btnActiveClass = props.btnSaved ? classes.active : null;

  return (
    <button
      className={[btnActiveClass, classes[props.btnType]].join(' ')}
      onClick={props.click}
    >
      {props.btnLabel}
    </button>
  );
};

export default button;
