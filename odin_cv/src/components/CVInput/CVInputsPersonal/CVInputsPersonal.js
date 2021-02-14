import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as actionTypes from './CVInputsPersonalSlice';

import Button from '../../UI/Button/Button';

import classes from './CVInputsPersonal.module.css';

const mapDispatch = {
  ...actionTypes,
};

const CVInputsPersonal = (props) => {
  const dispatch = useDispatch();

  let content;

  // STATE
  const [personalSubmit, setPersonalSubmit] = useState({
    clicked: false,
    textContent: 'ADD',
  });

  const [personalStore, setPersonalStore] = useState({
    storeName: 'personalStore',
  });

  const renderInputHandler = (inputTitle, inputName) => {
    content = inputTitle.map((inputTitle, index) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input
            type={'text'}
            name={inputName[index]}
            onClick={personalEditHandler}
            onChange={(event) => inputContentHandler(event)}
          ></input>
        </li>
      );
    });
  };

  const inputContentHandler = (event, storeName) => {
    let name = event.target.name;
    let value = event.target.value;
    setPersonalStore({ ...personalStore, [name]: value });
  };

  const personalSubmitHandler = (e) => {
    e.preventDefault();
    setPersonalSubmit({ clicked: true, textContent: 'SAVED' });
    dispatch(actionTypes.addPersonal({ ...personalStore }));
  };

  const personalEditHandler = () => {
    setPersonalSubmit({ clicked: false, textContent: 'ADD' });
  };

  renderInputHandler(props.inputTitle, props.inputName);

  return (
    <div className={`${classes.personal}`} id={'none'}>
      <h3 className={classes.cvInputs__heading}>Personal</h3>
      <form className={classes.inputForm} onSubmit={() => {}}>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button
          btnType={'btnAdd'}
          btnLabel={personalSubmit.textContent}
          btnSaved={personalSubmit.clicked}
          click={personalSubmitHandler}
        ></Button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(CVInputsPersonal);
