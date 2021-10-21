import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
  const btnActiveClass = props.btnSaved ? classes.active : null;

  return (
    <button
      type="submit"
      className={[btnActiveClass, classes[props.btnType]].join(' ')}
      onClick={props.click}
      id={props.id}
    >
      {props.btnLabel}
    </button>
  );
};

export default button;
