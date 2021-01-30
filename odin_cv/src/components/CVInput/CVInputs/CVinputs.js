import React from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from '../../SavedCvInput/SavedCvInput';
import classes from './CVInputs.module.css';

const cvInputs = (props) => {
  const classColor = classes[props.color];

  let content;

  if (props.personal) {
    const inputTitle = ['Name', 'Address', 'email', 'Phone Number'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input></input>
        </li>
      );
    });
  }

  if (props.employment) {
    const inputTitle = ['Job Title', 'Company', 'Duration', 'Description'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input></input>
        </li>
      );
    });
  }

  if (props.education) {
    const inputTitle = [
      'Course Name',
      'Place of Study',
      'Qualification',
      'Description',
    ];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input></input>
        </li>
      );
    });
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

  let cvInputs = (
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

  if (props.personal) {
    cvInputs = (
      <div className={`${classes.personal} ${classColor}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button btnType={'btnAdd'} btnLabel={'ADD'}></Button>
      </div>
    );
  }

  console.log(props);
  return cvInputs;
};

export default cvInputs;
