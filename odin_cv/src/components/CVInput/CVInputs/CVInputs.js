import React, { useState, useEffect } from 'react';

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

  const [editSaved, setEditSaved] = useState({ edit: false });

  const [editStore, setEditStore] = useState({});

  const inputStoreHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputStore({
      ...inputStore,
      data: { ...inputStore.data, [name]: value },
    });
  };

  const savedStoreHandler = () => {
    const copyInputStoreObj = { ...inputStore.data, id: new Date().getTime() };
    const copySavedStoreArr = savedStore.map((val) => val);

    const newSavedStore = [...copySavedStoreArr, copyInputStoreObj];

    setSavedStore(newSavedStore);
  };

  // TODO: NEED TO TRIGGER ONCHANGE EVENT TO STORE VALUE PROP.

  const renderInputHandler = (inputForm, inputName) => {
    content = inputForm.map((element, index) => {
      return (
        <li key={element.title} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{element.title}:</h4>
          <input
            type={element.type}
            name={inputName[index]}
            defaultValue={element.title}
            onChange={(event) => inputStoreHandler(event)}
          ></input>
        </li>
      );
    });
  };

  const editHandler = () => {
    let newArr = [...savedStore];
    console.log(newArr);
  };

  // useEffect(() => {
  //   let savedInputContent = savedStore.map((el) => (
  //     <SavedCvInput title={el.title} place={el.location} />
  //   ));

  //   return savedInputContent;
  // }, [savedStore]);

  const renderSavedCvInputHandler = (arr) => {
    let savedInputContent = arr.map((el) => (
      <SavedCvInput
        title={el.title}
        place={el.location}
        id={el.id}
        key={el.id}
        click={editHandler}
      />
    ));

    return savedInputContent;
  };

  renderInputHandler(props.inputForm, props.inputName, props.storeName);

  // let form;

  // if (props.type === 'employment') {
  //   form = (
  //     <form className={''}>
  //       <ul className={classes.cvInputs__content}>
  //         <li key={props.inputTitle} className={classes.cvInputs__subContent}>
  //           <h4 className={classes.cvInputs__inputHeading}>
  //             {props.inputTitle}:
  //           </h4>
  //           <input
  //             type={'text'}
  //             name={props.inputName[index]}
  //             onChange={(event) => inputStoreHandler(event)}
  //           ></input>
  //         </li>
  //       </ul>
  //     </form>
  //   );
  // }

  return (
    <React.Fragment>
      <div className={`${classes.cvInputs}`}>
        <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newData = {};
            for (let i = 0; i < e.target.length; i++) {
              if (e.target[i].tagName === 'INPUT') {
                let name = e.target[i].name;
                let value = e.target[i].value;
                newData = { ...newData, [name]: value };
              }
            }

            newData = { ...newData, id: new Date().getTime() };
            // setInputStore({
            //   ...inputStore,
            //   data: { ...newData },
            // });

            setSavedStore([...savedStore, newData]);

            // savedStoreHandler();
          }}
        >
          <ul className={classes.cvInputs__content}>{content}</ul>
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
