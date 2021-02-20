import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as actionTypes from './CVInputsPersonalSlice';

import Button from '../../UI/Button/Button';

import classes from './CVInputsPersonal.module.css';

const mapDispatch = {
  ...actionTypes,
};

const CVInputsPersonal = (props) => {
  const dispatch = useDispatch();

  const savedState = useSelector((state) => state.cvInputsPersonal);

  // STATE
  const [personalSubmit, setPersonalSubmit] = useState({
    clicked: false,
    textContent: 'ADD',
  });

  const [personalStore, setPersonalStore] = useState();

  useEffect(() => {
    setPersonalStore({ ...savedState });
  }, [setPersonalStore, savedState]);

  const renderInputHandler = (inputTitle, inputName) => {
    const copyPersonalStore = { ...personalStore };
    return inputTitle.map((inputTitle, index) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <label className={classes.cvInputs__inputHeading}>
            {inputTitle}:
          </label>
          <input
            type={'text'}
            name={inputName[index]}
            onClick={personalEditHandler}
            onChange={(event) => inputContentHandler(event)}
            value={
              copyPersonalStore[inputName[index]]
                ? copyPersonalStore[inputName[index]]
                : ''
            }
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

  return (
    <div className={`${classes.personal}`} id={'none'}>
      <h3 className={classes.cvInputs__heading}>Personal</h3>
      <form className={classes.inputForm} onSubmit={() => {}}>
        <ul className={classes.cvInputs__content}>
          {renderInputHandler(props.inputTitle, props.inputName)}
        </ul>
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
