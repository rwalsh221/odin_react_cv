import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as actionTypes from './CVInputsPersonalSlice';
import validateForm from '../../../utilities/validation';

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

  const renderInputHandler = (inputForm, inputName) => {
    const copyPersonalStore = { ...personalStore };
    return inputForm.map((element, index) => {
      return (
        <li key={element.title} className={classes.cvInputs__subContent}>
          <label
            className={classes.cvInputs__inputHeading}
            htmlFor={inputName[index]}
          >
            {element.title}:
          </label>
          <input
            type={element.type}
            name={inputName[index]}
            onClick={(e) => {
              document.getElementById(`${e.target.id}`).style.border = '';
              personalEditHandler();
            }}
            onChange={(event) => inputContentHandler(event)}
            value={
              copyPersonalStore[inputName[index]]
                ? copyPersonalStore[inputName[index]]
                : ''
            }
            id={inputName[index]}
          ></input>
        </li>
      );
    });
  };

  const inputContentHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setPersonalStore({ ...personalStore, [name]: value });
  };

  const personalSubmitHandler = (e) => {
    e.preventDefault();
    let validate = validateForm(e);
    if (validate) {
      setPersonalSubmit({ clicked: true, textContent: 'SAVED' });
      dispatch(actionTypes.addPersonal({ ...personalStore }));
    }
  };

  const personalEditHandler = () => {
    setPersonalSubmit({ clicked: false, textContent: 'ADD' });
  };

  return (
    <div className={`${classes.personal}`} id={'none'}>
      <h3 className={classes.cvInputs__heading}>Personal</h3>
      <form
        className={classes.inputForm}
        onSubmit={(e) => {
          personalSubmitHandler(e);
        }}
      >
        <ul className={classes.cvInputs__content}>
          {renderInputHandler(props.inputForm, props.inputName)}
        </ul>
        <Button
          btnType={'btnAdd'}
          btnLabel={personalSubmit.textContent}
          btnSaved={personalSubmit.clicked}
          // click={personalSubmitHandler}
        ></Button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(CVInputsPersonal);
