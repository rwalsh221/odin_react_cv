import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from './SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const CvInputs = (props) => {
  let content;

  // STATE
  const [inputStore, setInputStore] = useState({
    storeName: props.storeName,
  });

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

  const inputContentHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputStore({ ...inputStore, [name]: value });
  };

  renderInputHandler(props.inputTitle, props.inputName, props.storeName);

  return (
    <React.Fragment>
      <div className={`${classes.cvInputs}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button btnType={'btnAdd'} btnLabel={'ADD'}></Button>
      </div>
      <div className={classes.cvInputs__saved}>
        <h3
          className={classes.cvInputs__heading}
        >{`Saved ${props.heading}`}</h3>
        <SavedCvInput title={'test title'} place={'test place'} />
        <SavedCvInput title={'test title'} place={'test place'} />
        <SavedCvInput title={'test title'} place={'test place'} />
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
