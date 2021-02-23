import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as actionTypes from './CVInputsSlice';
import { getObjById } from '../../../utilities/utilities';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

// TODO: ADD VALIDATION LAST THING!!
// TODO: REFACTOR LOCAL STORAGE FUNCTION. CUSTOM HOOK ?
// TODO: Capitalize function for input names in cvinput. make form gernertaion leaner
// TODO: change width to flex basis on flex items.
// TODO: STOP MULTIPLE EDIT
// TODO: CHANGE ADD TO UPDATE ON INPUT FORM WHEN EDIT

const mapDispatch = {
  ...actionTypes,
};

const CvInputs = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cvInputs);

  const initInputStore = () => {
    let initInputStoreObj = {};
    for (let i = 0; i < props.inputName.length; i++) {
      initInputStoreObj = { ...initInputStoreObj, [props.inputName[i]]: '' };
    }
    initInputStoreObj = { ...initInputStoreObj, id: '' };
    return initInputStoreObj;
  };

  // STATE

  const [isEdit, setIsEdit] = useState(false);

  const [inputStore, setInputStore] = useState(initInputStore());

  const clearInputStore = () => {
    const copyInputStore = { ...inputStore };
    let newInputStore = {};
    for (const key in copyInputStore) {
      newInputStore = { ...newInputStore, [key]: '' };
    }

    setInputStore({ ...newInputStore });
  };

  const renderInputHandler = (inputForm, inputName) => {
    return inputForm.map((element, index) => {
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
            {element.optionValue.map((element, index) => {
              return (
                <option key={element} value={element}>
                  {element.toUpperCase()}
                </option>
              );
            })}
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
          ></input>
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
  };

  const dispatchSubmit = (storeName, payload) => {
    switch (storeName) {
      case 'education':
        dispatch(actionTypes.addEducation(payload));
        break;
      case 'employment':
        dispatch(actionTypes.addEmployment(payload));
        break;
      case 'additional':
        dispatch(actionTypes.addAdditional(payload));
        break;
      default:
        console.log('no switch');
    }
  };

  const dispatchUpdate = (storeName, payload) => {
    console.log(storeName);
    switch (storeName) {
      case 'education':
        dispatch(actionTypes.updateEducation(payload));
        break;
      case 'employment':
        dispatch(actionTypes.updateEmployment(payload));
        break;
      case 'additional':
        dispatch(actionTypes.updateAdditional(payload));
        break;
      default:
        console.log('no switch');
    }
  };

  const dispatchDelete = (storeName, payload) => {
    switch (storeName) {
      case 'education':
        dispatch(actionTypes.deleteEducation(payload));
        break;
      case 'employment':
        dispatch(actionTypes.deleteEmployment(payload));
        break;
      case 'additional':
        dispatch(actionTypes.deleteAdditional(payload));
        break;
      default:
        console.log('no switch');
    }
  };

  // gets saved input to be edited
  const getEditHandler = (e) => {
    setIsEdit(true);

    if (isEdit === true && e.target.textContent === 'DEL') {
      deleteInputHandler(e);
    } else {
      const copySavedStore = [...state[props.storeName]];

      setInputStore(getObjById(copySavedStore, e.target.id));
    }
  };

  const deleteInputHandler = (e) => {
    dispatchDelete(props.storeName, e.target.id);
    setIsEdit(false);

    clearInputStore();
  };

  const setEditHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputStore({
      ...inputStore,
      [name]: value,
    });
  };

  const renderSavedCvInputHandler = (arr) => {
    return arr.map((el) => (
      <SavedCvInput
        title={el.title}
        place={el.location}
        id={el.id}
        key={el.id}
        click={(e) => getEditHandler(e)}
        edit={isEdit}
      />
    ));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let newInput = {};
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].tagName === 'INPUT' || 'SELECT') {
        const name = e.target[i].name;
        const value = e.target[i].value;
        newInput = { ...newInput, [name]: value };
      }
    }

    if (isEdit) {
      editSavedHandler();
    } else {
      newInput = { ...newInput, id: new Date().getTime() };

      dispatchSubmit(props.storeName, newInput);
    }

    clearInputStore();
  };

  const editSavedHandler = () => {
    const inputId = inputStore.id;
    const copySavedStore = [...state[props.storeName]];

    const inputIdArr = copySavedStore.map((el) => {
      return el.id;
    });

    const editIndex = inputIdArr.indexOf(inputId * 1);

    copySavedStore.splice(editIndex, 1, inputStore);

    dispatchUpdate(props.storeName, inputStore);

    setIsEdit(false);
  };

  return (
    <React.Fragment>
      <div className={`${classes.cvInputs}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
        >
          <ul className={classes.cvInputs__content}>
            {renderInputHandler(
              props.inputForm,
              props.inputName,
              props.storeName
            )}
          </ul>
          <Button btnType={'btnAdd'} btnLabel={'ADD'}></Button>
        </form>
      </div>
      <div className={classes.cvInputs__saved}>
        <h3
          className={classes.cvInputs__heading}
        >{`Saved ${props.heading}`}</h3>
        {renderSavedCvInputHandler(state[props.storeName])}
      </div>
    </React.Fragment>
  );
};

export default connect(null, mapDispatch)(CvInputs);
