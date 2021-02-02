import React from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const cvInputs = (props) => {
  let content;

  const classColor = classes[props.color];

  const inputHandler = (inputTitle) => {
    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input></input>
        </li>
      );
    });
  };

  if (props.personal) {
    const inputTitle = ['Name', 'Address', 'email', 'Phone Number'];
    inputHandler(inputTitle);
  }

  if (props.employment) {
    const inputTitle = ['Job Title', 'Company', 'Duration', 'Description'];
    inputHandler(inputTitle);
  }

  if (props.education) {
    const inputTitle = [
      'Course Name',
      'Place of Study',
      'Qualification',
      'Description',
    ];
    inputHandler(inputTitle);
  }

  if (props.additional) {
    const inputTitle = ['Title', 'Description'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input></input>
        </li>
      );
    });
  }

  return props.personal ? (
    <div className={`${classes.personal} ${classColor}`} id={props.heading}>
      <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
      <ul className={classes.cvInputs__content}>{content}</ul>
      <Button btnType={'btnAdd'} btnLabel={'ADD'}></Button>
    </div>
  ) : (
    <React.Fragment>
      <div className={`${classes.cvInputs} ${classColor}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button btnType={'btnAdd'} btnLabel={'ADD'}></Button>
      </div>
      <div className={classes.cvInputs__saved}>
        <h3
          className={classes.cvInputs__heading}
        >{`Saved ${props.heading}`}</h3>
        <SavedCvInput title={'test title'} place={'test place'} />
        <SavedCvInput title={'test title'} place={'test place'} />
        <SavedCvInput title={'test title'} place={'test place'} />
      </div>
    </React.Fragment>
  );
};

export default cvInputs;
