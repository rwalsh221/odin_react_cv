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
          // 'Course Name',
          // 'Place of Study',
          // 'Qualification',
          // 'Description',
        ]}
        inputName={['title', 'location', 'qualification', 'description']}
        storeName={'education'}
      />
      {/* <CVInputs
        heading={'Employment History'}
        inputTitle={['Job Title', 'Company', 'Duration', 'Description']}
        inputName={['title', 'location', 'duration', 'description']}
        storeName={'employment'}
      />
      <CVInputs
        heading={'Additional Skills'}
        inputTitle={['Title', 'Description']}
        // TODO: test render saved inputs had to change inputname description to location
        // inputName={['title', 'location', 'description']}
        inputName={['title', 'location']}
        storeName={'additional'}
      /> */}
    </main>
  );
};

export default cvInput;
