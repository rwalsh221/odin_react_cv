import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addEducation,
  addEmployment,
  addAdditional,
  updateEducation,
  updateEmployment,
  updateAdditional,
  deleteEducation,
  deleteEmployment,
  deleteAdditional,
} from '../../../reducers/CVInputsSlice/CVInputsSlice';

// import * as actionTypes from '../../../reducers/CVInputsSlice/CVInputsSlice';

import { getObjById } from '../../../utilities/utilities';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

// TODO: ADD VALIDATION LAST THING!!
// TODO: ADD LABEL TO INPUT FOR ACCSESSIBILTY REMOVE H4 SEE FIReFOX
// TODO: RENDER FINISHED CV

//TODO: look at making cvinputs parametrs leaner.
//TODO: init inputstore with props.inputname. for loop? or map?

const mapDispatch = {
  addEducation,
  addEmployment,
  addAdditional,
  updateEducation,
  updateEmployment,
  updateAdditional,
  deleteEducation,
  deleteEmployment,
  deleteAdditional,
};

const CvInputs = ({
  addEducation,
  addEmployment,
  addAdditional,
  updateEducation,
  updateEmployment,
  updateAdditional,
  deleteEducation,
  deleteEmployment,
  deleteAdditional,
  ...props
}) => {
  // STATE
  const [savedStore, setSavedStore] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  const [inputStore, setInputStore] = useState({
    title: '',
    location: '',
    qualification: '',
    description: '',
    id: '',
  });

  const renderInputHandler = (inputForm, inputName) => {
    return inputForm.map((element, index) => {
      const copyEditStore = { ...inputStore };
      const initialValue = copyEditStore[Object.keys(copyEditStore)[index]];

      let content = (
        <input
          type={element.type}
          name={inputName[index]}
          value={initialValue}
          onChange={(event) => setEditHandler(event)}
        ></input>
      );

      return (
        <li key={element.title} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{element.title}:</h4>
          {content}
        </li>
      );
    });
  };
  console.log({ renderInputHandler });

  const dispatchSubmit = (storeName, payload) => {
    switch (storeName) {
      case 'education':
        console.log(storeName);
        addEducation(payload);
        console.log(addEducation);
        break;
      case 'employment':
        console.log(storeName);
        console.log(addEmployment);
        addEmployment(payload);
        break;
      case 'additional':
        console.log(storeName);
        addAdditional(payload);
        break;
      default:
        console.log('no switch');
    }
  };

  const dispatchUpdate = (storeName, payload) => {
    console.log(storeName);
    switch (storeName) {
      case 'education':
        updateEducation(payload);
        break;
      case 'employment':
        updateEmployment(payload);
        break;
      case 'additional':
        updateAdditional(payload);
        break;
      default:
        console.log('no switch');
    }
  };

  const dispatchDelete = (storeName, payload) => {
    console.log(storeName);
    switch (storeName) {
      case 'education':
        deleteEducation(payload);
        break;
      case 'employment':
        deleteEmployment(payload);
        break;
      case 'additional':
        deleteAdditional(payload);
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
      const copySavedStore = [...savedStore];

      setInputStore(getObjById(copySavedStore, e.target.id));
    }
  };

  const deleteInputHandler = (e) => {
    const copySavedStore = savedStore.map((element) => element);

    const newIndexedArr = copySavedStore.map((element) => element.id);
    copySavedStore.splice(newIndexedArr.indexOf(e.target.id * 1), 1);

    setSavedStore([...copySavedStore]);
    // deleteEducation(e.target.id);
    dispatchDelete(props.storeName, e.target.id);
    setIsEdit(false);

    initInputStore();
  };

  const initInputStore = () => {
    setInputStore({
      title: '',
      location: '',
      qualification: '',
      description: '',
      id: '',
    });
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
      if (e.target[i].tagName === 'INPUT') {
        const name = e.target[i].name;
        const value = e.target[i].value;
        newInput = { ...newInput, [name]: value };
      }
    }

    if (isEdit) {
      editSavedHandler();
    } else {
      newInput = { ...newInput, id: new Date().getTime() };
      setSavedStore([...savedStore, newInput]);
      dispatchSubmit(props.storeName, newInput);
    }

    initInputStore();
  };

  const editSavedHandler = () => {
    const inputId = inputStore.id;
    const copySavedStore = [...savedStore];

    const inputIdArr = copySavedStore.map((el) => {
      return el.id;
    });

    const editIndex = inputIdArr.indexOf(inputId * 1);

    copySavedStore.splice(editIndex, 1, inputStore);

    setSavedStore([...copySavedStore]);

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
        {renderSavedCvInputHandler(savedStore)}
      </div>
    </React.Fragment>
  );
};

export default connect(null, mapDispatch)(CvInputs);
