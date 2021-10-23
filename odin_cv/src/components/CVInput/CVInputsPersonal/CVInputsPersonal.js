import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionTypes from './CVInputsPersonalSlice';
import * as validate from '../../../utilities/validation';

import Button from '../../UI/Button/Button';

import classes from './CVInputsPersonal.module.css';

const mapDispatch = {
  ...actionTypes,
};

const CVInputsPersonal = ({ inputFormProps, inputNameProps }) => {
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

  const inputContentHandler = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setPersonalStore({ ...personalStore, [name]: value });
  };

  const personalSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = validate.validateForm(e);
    if (isValid) {
      setPersonalSubmit({ clicked: true, textContent: 'SAVED' });
      dispatch(actionTypes.addPersonal({ ...personalStore }));
    }
  };

  const personalEditHandler = () => {
    setPersonalSubmit({ clicked: false, textContent: 'ADD' });
  };

  const renderInputHandler = (inputForm, inputName) => {
    const copyPersonalStore = { ...personalStore };
    return inputForm.map((element, index) => (
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
        />
      </li>
    ));
  };

  return (
    <div className={`${classes.personal}`} id="none">
      <h3 className={classes.cvInputs__heading}>Personal</h3>
      <form
        className={classes.inputForm}
        onSubmit={(e) => {
          personalSubmitHandler(e);
        }}
      >
        <ul className={classes.cvInputs__content}>
          {renderInputHandler(inputFormProps, inputNameProps)}
        </ul>
        <Button
          btnType="btnAdd"
          btnLabel={personalSubmit.textContent}
          btnSaved={personalSubmit.clicked}
        />
      </form>
    </div>
  );
};

CVInputsPersonal.propTypes = {
  inputFormProps: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputNameProps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(null, mapDispatch)(CVInputsPersonal);
