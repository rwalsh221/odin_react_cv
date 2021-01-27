import React from 'react';

import classes from './CVInputs.module.css';

const cvInputs = (props) => {
  const classColor = classes[props.color];

  let content;

  if (props.personal) {
    const inputTitle = ['Name', 'Address', 'email', 'Phone Number'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle}>
          <p>{inputTitle}:</p>
          <input></input>
        </li>
      );
    });
  }

  if (props.employment) {
    const inputTitle = ['Job Title', 'Company', 'Duration', 'Description'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle}>
          <p>{inputTitle}:</p>
          <input></input>
        </li>
      );
    });
  }

  if (props.education) {
    const inputTitle = [
      'Course Name',
      'Place of Study',
      'Qualification',
      'Description',
    ];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle}>
          <p>{inputTitle}:</p>
          <input></input>
        </li>
      );
    });
  }

  if (props.additional) {
    const inputTitle = ['Title', 'Description'];

    content = inputTitle.map((inputTitle) => {
      return (
        <li key={inputTitle}>
          <p>{inputTitle}:</p>
          <input></input>
        </li>
      );
    });
  }

  console.log(props);
  return (
    <div className={`${classes.CVInputs} ${classColor}`}>
      <h3>{props.heading}</h3>
      <ul>{content}</ul>
    </div>
  );
};

export default cvInputs;
