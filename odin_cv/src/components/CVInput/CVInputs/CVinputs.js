import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from '../SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const CvInputs = (props) => {
  let content;

  const [personalSubmit, setPersonalSumbit] = useState({
    clicked: false,
    textContent: 'ADD',
  });

  const inputHandler = (inputTitle) => {
    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input onClick={personalEditHandler}></input>
        </li>
      );
    });
  };

  const personalSubmitHandler = (e) => {
    if (e.target.parentNode.id === 'PersonalInformation') {
      setPersonalSumbit({ clicked: true, textContent: 'SAVED' });
    }
  };

  const personalEditHandler = (e) => {
    if (
      e.target.parentNode.parentNode.parentNode.id === 'PersonalInformation'
    ) {
      setPersonalSumbit({ clicked: false, textContent: 'ADD' });
    }
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
    <div className={`${classes.personal}`} id={props.heading.replace(' ', '')}>
      <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
      <ul className={classes.cvInputs__content}>{content}</ul>
      <Button
        btnType={'btnAdd'}
        btnLabel={personalSubmit.textContent}
        btnSaved={personalSubmit.clicked}
        click={(e) => personalSubmitHandler(e)}
      ></Button>
    </div>
  ) : (
    <React.Fragment>
      <div className={`${classes.cvInputs}`}>
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

export default CvInputs;
