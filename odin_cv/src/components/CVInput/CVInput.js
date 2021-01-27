import React from 'react';

import classes from './CVInput.module.css';

import CVInputs from './CVInputs/CVinputs';

const cvInput = (props) => {
  return (
    <div className={classes.CVInput} id={classes.test}>
      <CVInputs heading={'Personal Information'} personal={true} />
      <CVInputs heading={'Education History'} education={true} />
      <CVInputs heading={'Employment History'} employment={true} />
      <CVInputs heading={'Additional Skills'} additional={true} />
    </div>
  );
};

export default cvInput;
