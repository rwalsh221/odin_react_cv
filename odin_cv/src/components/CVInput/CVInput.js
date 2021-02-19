import React from 'react';

import classes from './CVInput.module.css';

import CVInputs from './CVInputs/CVInputs';
import CVInputsPersonal from './CVInputsPersonal/CVInputsPersonal';

const cvInput = (props) => {
  return (
    <main className={classes.CVInput} id={classes.test}>
      <CVInputsPersonal
        inputTitle={[
          'Name',
          'Address: Street',
          'Address: City',
          'email',
          'Phone Number',
          'Current Role',
        ]}
        inputName={[
          'name',
          'addressStreet',
          'addressCity',
          'email',
          'phoneNumber',
          'currentRole',
        ]}
      />
      <CVInputs
        heading={'Education History'}
        inputForm={[
          { title: 'Course Name', type: 'text' },
          { title: 'Place of Study', type: 'text' },
          { title: 'Qualification', type: 'text' },
          { title: 'Date', type: 'date' },
        ]}
        inputName={['title', 'location', 'qualification', 'date']}
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
        inputName={['title', 'location', 'date', 'description']}
        storeName={'employment'}
      />
      <CVInputs
        heading={'Additional Skills'}
        inputForm={[
          { title: 'Title', type: 'text' },
          { title: 'Level', type: 'text' },
        ]}
        inputName={['title', 'level']}
        storeName={'additional'}
      />
    </main>
  );
};

export default cvInput;
