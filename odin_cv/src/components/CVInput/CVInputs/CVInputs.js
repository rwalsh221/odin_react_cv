import React, { useState, useEffect } from 'react';

import { getObjById } from '../../../utilities/utilities';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

// TODO: REFACTOR ADD UTILITIES

const CvInputs = (props) => {
  // STATE
  // *** ?
  const [inputStore, setInputStore] = useState({
    storeName: props.storeName,
    data: {},
  });

  const [savedStore, setSavedStore] = useState([]);

  const [editSaved, setEditSaved] = useState({ edit: false });

  const [editStore, setEditStore] = useState({
    title: '',
    location: '',
    qualification: '',
    description: '',
    id: '',
  });

  // TODO: FIND WAY TO INIT EDITSTORE WITH PROPS INPUT NAME
  // useEffect(() => {
  //   for (let i = 0; i < props.inputName.length; i++) {
  //     setEditSaved({ ...editStore, [props.inputName[i]]: '' });
  //   }
  // }, [props.inputName, editStore]);

  // const inputStoreHandler = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   setInputStore({
  //     ...inputStore,
  //     data: { ...inputStore.data, [name]: value },
  //   });
  // };

  const savedStoreHandler = () => {
    const copyInputStoreObj = { ...inputStore.data, id: new Date().getTime() };
    const copySavedStoreArr = savedStore.map((val) => val);

    const newSavedStore = [...copySavedStoreArr, copyInputStoreObj];

    setSavedStore(newSavedStore);
  };

  const renderInputHandler = (inputForm, inputName) => {
    return inputForm.map((element, index) => {
      const copyEditStore = { ...editStore };
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
    setEditSaved({ edit: true });
    const copySavedStore = [...savedStore];

    setEditStore(getObjById(copySavedStore, e.target.id));
  };

  const setEditHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setEditStore({
      ...editStore,
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

    if (editSaved.edit) {
      editSavedHandler();
    } else {
      newInput = { ...newInput, id: new Date().getTime() };
      setSavedStore([...savedStore, newInput]);
    }

    setEditStore({
      title: '',
      location: '',
      qualification: '',
      description: '',
      id: '',
    });
  };

  const editSavedHandler = () => {
    const inputId = editStore.id;
    const copySavedStore = [...savedStore];

    const inputIdArr = copySavedStore.map((el) => {
      return el.id;
    });

    const editIndex = inputIdArr.indexOf(inputId * 1);

    copySavedStore.splice(editIndex, 1, editStore);

    setSavedStore([...copySavedStore]);

    setEditSaved({ edit: false });
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
