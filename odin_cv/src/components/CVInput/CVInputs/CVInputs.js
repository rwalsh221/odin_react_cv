import React, { useState, useEffect } from 'react';

import { getObjById } from '../../../utilities/utilities';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const CvInputs = (props) => {
  // STATE
  const [savedStore, setSavedStore] = useState([]);

  const [isEdit, setIsEdit] = useState({ edit: false });

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

  // gets saved input to be edited
  const getEditHandler = (e) => {
    setIsEdit({ edit: true });
    const copySavedStore = [...savedStore];

    setInputStore(getObjById(copySavedStore, e.target.id));
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

    if (isEdit.edit) {
      editSavedHandler();
    } else {
      newInput = { ...newInput, id: new Date().getTime() };
      setSavedStore([...savedStore, newInput]);
    }

    setInputStore({
      title: '',
      location: '',
      qualification: '',
      description: '',
      id: '',
    });
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

    setIsEdit({ edit: false });
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
          <Button
            btnType={'btnAdd'}
            btnLabel={'ADD'}
            // click={savedStoreHandler}
          ></Button>
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

export default CvInputs;
