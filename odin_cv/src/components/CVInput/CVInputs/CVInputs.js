import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionTypes from './CVInputsSlice';
import { getObjById, setLocalStorage } from '../../../utilities/utilities';
import * as validate from '../../../utilities/validation';
import * as switchDispatch from './CVInputsDispatch';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

// TODO: ADD VALIDATION LAST THING!!
// TODO: ADD REFERENCE FORM

const mapDispatch = {
  ...actionTypes,
};

const CVInputs = ({
  headingProps,
  inputFormProps,
  inputNameProps,
  storeNameProps,
}) => {
  const dispatch = useDispatch();
  const state = useSelector((reduxState) => reduxState.cvInputs);

  const fullState = useSelector((reduxState) => reduxState);

  const initInputStore = () => {
    let initInputStoreObj = {};
    for (let i = 0; i < inputNameProps.length; i += 1) {
      initInputStoreObj = { ...initInputStoreObj, [inputNameProps[i]]: '' };
    }
    initInputStoreObj = { ...initInputStoreObj, id: '' };
    return initInputStoreObj;
  };

  // STATE

  const [isEdit, setIsEdit] = useState(false);

  const [inputStore, setInputStore] = useState(initInputStore());

  const clearInputStore = () => {
    const copyInputStore = { ...inputStore };
    const copyInputStoreKeys = Object.keys(copyInputStore);

    copyInputStoreKeys.forEach((element) => {
      copyInputStore[element] = '';
    });

    // setInputStore({ ...newInputStore });
    setInputStore({ ...copyInputStore });
  };

  const deleteInputHandler = (e) => {
    switchDispatch.dispatchDelete(dispatch, storeNameProps, e.target.id);
    setIsEdit(false);

    clearInputStore();
  };

  // gets saved input to be edited
  const getEditHandler = (e) => {
    validate.clearValidation(storeNameProps);

    if (!isEdit) {
      setIsEdit(true);
      const copySavedStore = [...state[storeNameProps]];
      setInputStore(getObjById(copySavedStore, e.target.id));
    }

    if (isEdit === true && e.target.textContent === 'DEL') {
      deleteInputHandler(e);
    }
  };

  const setEditHandler = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputStore({
      ...inputStore,
      [name]: value,
    });
  };

  const editSavedHandler = () => {
    const inputId = inputStore.id;
    const copySavedStore = [...state[storeNameProps]];

    const inputIdArr = copySavedStore.map((el) => el.id);

    const editIndex = inputIdArr.indexOf(inputId * 1);

    copySavedStore.splice(editIndex, 1, inputStore);

    switchDispatch.dispatchUpdate(dispatch, storeNameProps, inputStore);

    setIsEdit(false);
  };

  const renderInputHandler = (inputForm, inputName) =>
    inputForm.map((element, index) => {
      const copyInputStore = { ...inputStore };
      const initialValue = copyInputStore[Object.keys(copyInputStore)[index]];

      let content;
      // render content for drop down
      if (element.option === true) {
        content = (
          <select
            name={inputName[index]}
            value={initialValue}
            onChange={(event) => setEditHandler(event)}
            id={inputName[index]}
          >
            {element.optionValue.map((optionValueElement) => (
              <option key={optionValueElement} value={optionValueElement}>
                {optionValueElement.toUpperCase()}
              </option>
            ))}
          </select>
        );
        // render content for input box
      } else {
        content = (
          <input
            type={element.type}
            name={inputName[index]}
            value={initialValue}
            onChange={(event) => setEditHandler(event)}
            id={`${inputName[index]}${(Math.random() * Math.random()).toFixed(
              4
            )}`}
            onClick={(e) => {
              document.getElementById(`${e.target.id}`).style.border = '';
            }}
          />
        );
      }

      return (
        <li key={element.title} className={classes.cvInputs__subContent}>
          <label
            className={classes.cvInputs__inputHeading}
            htmlFor={inputName[index]}
          >
            {element.title}:
          </label>
          {content}
        </li>
      );
    });

  const renderSavedCvInputHandler = (arr) =>
    arr.map((el) => (
      <SavedCvInput
        titleProps={el.title}
        placeProps={el.location}
        idProps={el.id}
        key={el.id}
        clickProps={(e) => getEditHandler(e)}
        editProps={isEdit}
      />
    ));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let newInput = {};

    const isValid = validate.validateForm(e);

    if (isValid) {
      for (let i = 0; i < e.target.length; i += 1) {
        if (
          e.target[i].tagName === 'INPUT' ||
          e.target[i].tagName === 'SELECT'
        ) {
          const { name } = e.target[i];
          const { value } = e.target[i];
          newInput = { ...newInput, [name]: value };
        }
      }

      if (isEdit) {
        editSavedHandler();
        clearInputStore();
      } else {
        newInput = { ...newInput, id: new Date().getTime() };
        switchDispatch.dispatchSubmit(dispatch, storeNameProps, newInput);
        clearInputStore();
      }
    }
  };

  setLocalStorage('fullState', fullState);

  return (
    <>
      <div className={`${classes.cvInputs}`}>
        <h3 className={classes.cvInputs__heading}>{headingProps}</h3>
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
          id={storeNameProps}
        >
          <ul className={classes.cvInputs__content}>
            {renderInputHandler(inputFormProps, inputNameProps, storeNameProps)}
          </ul>
          <Button btnType="btnAdd" btnLabel={isEdit ? 'UPDATE' : 'ADD'} />
        </form>
      </div>
      <div className={classes.cvInputs__saved}>
        <h3 className={classes.cvInputs__heading}>{`Saved ${headingProps}`}</h3>
        {renderSavedCvInputHandler(state[storeNameProps])}
      </div>
    </>
  );
};

CVInputs.propTypes = {
  headingProps: PropTypes.string.isRequired,
  inputFormProps: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputNameProps: PropTypes.arrayOf(PropTypes.string).isRequired,
  storeNameProps: PropTypes.string.isRequired,
};

export default connect(null, mapDispatch)(CVInputs);
