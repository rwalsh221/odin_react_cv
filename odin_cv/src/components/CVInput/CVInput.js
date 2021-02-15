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
        inputForm={[
          { title: 'Course Name', type: 'text' },
          { title: 'Place of Study', type: 'text' },
          { title: 'Qualification', type: 'text' },
          { title: 'Description', type: 'text' },
        ]}
        inputName={['title', 'location', 'qualification', 'description']}
        storeName={'education'}
      />
      <CVInputs
        heading={'Employment History'}
        inputForm={[
          { title: 'Job Name', type: 'text' },
          { title: 'Place of Work', type: 'text' },
          { title: 'Duration', type: 'date' },
          { title: 'Description', type: 'text' },
        ]}
        inputName={['title', 'location', 'duration', 'description']}
        storeName={'employment'}
      />
      <CVInputs
        heading={'Additional Skills'}
        inputForm={[
          { title: 'Title', type: 'text' },
          { title: 'Description', type: 'text' },
        ]}
        inputName={['title', 'description']}
        storeName={'additional'}
      />
    </main>
  );
};

export default cvInput;
