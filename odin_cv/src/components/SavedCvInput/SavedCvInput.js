import React from 'react';

import Button from '../UI/Button/Button';
import classes from './SavedCvInput.module.css';

const savedCvInput = (props) => {
  let test = classes.savedCvInput__content;

  const colorChange = () => {
    console.log('CLICKED');
    if (test === classes.savedCvInput__content) {
      test = classes.savedCvInput__contentRed;
    } else {
      test = classes.savedCvInput__content;
    }
    console.log(test);
  };

  console.log('CLICKED', test);

  return (
    <div className={classes.savedCvInput}>
      <div className={test}>
        <h4>{props.title}</h4>
        <h4>{props.place}</h4>
      </div>
      <Button btnType={'btnEdit'} btnLabel={'EDIT'} click={colorChange} />
    </div>
  );
};

export default savedCvInput;
