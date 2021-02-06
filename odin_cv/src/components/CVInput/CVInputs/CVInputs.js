import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const CvInputs = (props) => {
  let content;

  // STATE
  const [inputStore, setInputStore] = useState({
    storeName: props.storeName,
    data: {},
  });

  const [savedStore, setSavedStore] = useState([]);

  const savedStoreHandler = () => {
    const copyInputStoreObj = { ...inputStore.data };
    const copySavedStoreArr = savedStore.map((val) => val);

    let newSavedStore = [...copySavedStoreArr, copyInputStoreObj];

    setSavedStore(newSavedStore);
  };

  const renderInputHandler = (inputTitle, inputName) => {
    content = inputTitle.map((inputTitle, index) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input
            type={'text'}
            name={inputName[index]}
            onChange={(event) => inputContentHandler(event)}
          ></input>
        </li>
      );
    });
  };

  // let savedInputContent;

  const renderSavedInputHandler = (arr) => {
    let savedInputContent = arr.map((el) => (
      <SavedCvInput title={el.title} place={el.location} />
    ));

    return savedInputContent;
  };

  const inputContentHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputStore({
      ...inputStore,
      data: { ...inputStore.data, [name]: value },
    });
  };

  renderInputHandler(props.inputTitle, props.inputName, props.storeName);

  return (
    <React.Fragment>
      <div className={`${classes.cvInputs}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button
          btnType={'btnAdd'}
          btnLabel={'ADD'}
          click={savedStoreHandler}
        ></Button>
      </div>
      <div className={classes.cvInputs__saved}>
        <h3
          className={classes.cvInputs__heading}
        >{`Saved ${props.heading}`}</h3>
        {renderSavedInputHandler(savedStore)}
      </div>
    </React.Fragment>
  );
};

export default CvInputs;

/* <form
onSubmit={(e) => {
  e.preventDefault();
  let target = e.target;
  console.log(target.length);
  let testArr = [];
  for (let i = 0; i < target.length - 1; i++) {
    testArr.push(e.target[i].value);
    e.preventDefault();
  }
  console.log(e.target[3].value);
  console.log(testArr);
}}
>
<ul className={classes.cvInputs__content}>{content}</ul>
<Button
  btnType={'btnAdd'}
  btnLabel={personalSubmit.textContent}
  btnSaved={personalSubmit.clicked}
  click={(e) => personalSubmitHandler(e)}
></Button>
</form> */
