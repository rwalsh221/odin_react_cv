import React from 'react';

import classes from './CVInput.module.css';

import CVInputs from './CVInputs/CVInputs';
import CVInputsPersonal from './CVInputsPersonal/CVInputsPersonal';

const cvInput = (props) => {
  return (
    <main className={classes.CVInput} id={classes.test}>
      <CVInputsPersonal
        inputTitle={['Name', 'Address', 'email', 'Phone Number']}
        inputName={['name', 'address', 'email', 'phoneNumber']}
      />
      <CVInputs
        heading={'Education History'}
        education={true}
        inputTitle={[
          'Course Name',
          'Place of Study',
          'Qualification',
          'Description',
        ]}
        inputName={[
          'courseName',
          'placeOfStudy',
          'qualification',
          'description',
        ]}
        storeName={'education'}
      />
      <CVInputs
        heading={'Employment History'}
        employment={true}
        inputTitle={['Job Title', 'Company', 'Duration', 'Description']}
        inputName={['jobTitle', 'company', 'duration', 'description']}
        storeName={'employment'}
      />
      <CVInputs
        heading={'Additional Skills'}
        additional={true}
        inputTitle={['Title', 'Description']}
        inputName={['title', 'description']}
        storeName={'additional'}
      />
    </main>
  );
};

export default cvInput;
