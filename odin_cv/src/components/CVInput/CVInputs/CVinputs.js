import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import SavedCvInput from '../SavedCvInputs/SavedCvInputs';
import classes from './CVInputs.module.css';

const CvInputs = (props) => {
  let content;

  // STATE
  // TODO: REFACTOR STORE AS EACH ELEMENT IS ONE OF AKIND
  const [personalSubmit, setPersonalSubmit] = useState({
    clicked: false,
    textContent: 'ADD',
  });

  const [personalStore, setPersonalStore] = useState({
    storeName: 'personalStore',
  });

  const [educationStore, setEducationStore] = useState({
    storeName: 'educationStore',
  });

  const [employmentStore, setEmploymentStore] = useState({
    storeName: 'employmentStore',
  });

  const [additionalStore, setAdditionalStore] = useState({
    storeName: 'additionalStore',
  });

  const renderInputHandler = (inputTitle, inputName, storeName) => {
    content = inputTitle.map((inputTitle, index) => {
      return (
        <li key={inputTitle} className={classes.cvInputs__subContent}>
          <h4 className={classes.cvInputs__inputHeading}>{inputTitle}:</h4>
          <input
            type={'text'}
            name={inputName[index]}
            onClick={personalEditHandler}
            onChange={(event) => inputContentHandler(event, storeName)}
          ></input>
        </li>
      );
    });
  };

  const inputContentHandler = (event, storeName) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    console.log(storeName);
    if (storeName === 'personal') {
      setPersonalStore({ ...personalStore, [name]: value });
    } else if (storeName === 'education') {
      setEducationStore({ ...educationStore, [name]: value });
    } else if (storeName === 'employment') {
      console.log('EMPLLLLOOOYYYEMNTNNTNTT');
      setEmploymentStore({ ...employmentStore, [name]: value });
      // console.log(employmentStore);
    } else if (storeName === 'additional') {
      setAdditionalStore({ ...additionalStore, [name]: value });
    }
  };

  const personalSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target.parentNode.parentNode.id === 'PersonalInformation') {
      setPersonalSubmit({ clicked: true, textContent: 'SAVED' });
      console.log(personalStore);
      // console.log(employmentStore);
    }
  };

  console.log(employmentStore);

  const personalEditHandler = (e) => {
    // TODO: LOOK AT THIS FOR BETTER SOLUTION TO TARGET ELEMNT
    if (
      e.target.parentNode.parentNode.parentNode.parentNode.id ===
      'PersonalInformation'
    ) {
      console.log('if');
      setPersonalSubmit({ clicked: false, textContent: 'ADD' });
    }
    console.log(personalSubmit);
  };

  // RENDER INPUTHANDLERS

  if (props.personal) {
    // TODO: COULD CAUSE ERROR IF ARRAY ARE IN DIFFERENT ORDER

    const inputTitle = ['Name', 'Address', 'email', 'Phone Number'];
    const inputName = ['name', 'address', 'email', 'phoneNumber'];
    renderInputHandler(inputTitle, inputName, 'personal');
  }

  if (props.employment) {
    const inputTitle = ['Job Title', 'Company', 'Duration', 'Description'];
    const inputName = ['jobTitle', 'company', 'duration', 'description'];

    renderInputHandler(inputTitle, inputName, 'employment');
  }

  if (props.education) {
    const inputTitle = [
      'Course Name',
      'Place of Study',
      'Qualification',
      'Description',
    ];

    const inputName = [
      'courseName',
      'placeOfStudy',
      'qualification',
      'description',
    ];
    renderInputHandler(inputTitle, inputName, 'education');
  }

  if (props.additional) {
    const inputTitle = ['Title', 'Description'];
    const inputName = ['title', 'description'];

    renderInputHandler(inputTitle, inputName, 'additional');
  }

  return props.personal ? (
    <div className={`${classes.personal}`} id={props.heading.replace(' ', '')}>
      <h3 className={classes.cvInputs__heading}>{props.heading}</h3>
      <form onSubmit={() => {}}>
        <ul className={classes.cvInputs__content}>{content}</ul>
        <Button
          btnType={'btnAdd'}
          btnLabel={personalSubmit.textContent}
          btnSaved={personalSubmit.clicked}
          click={(e) => {
            personalSubmitHandler(e);
          }}
        ></Button>
      </form>
    </div>
  ) : (
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

{
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
}
