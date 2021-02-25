import React from 'react';

import classes from './CVInput.module.css';
import { storeNames } from './CVInputs/CVInputsSlice';
import CVInputs from './CVInputs/CVInputs';
import CVInputsPersonal from './CVInputsPersonal/CVInputsPersonal';

const CVInput = (props) => {
  return (
    <main className={classes.CVInput} id={classes.test}>
      <CVInputsPersonal
        inputForm={[
          { title: 'Name', type: 'text' },
          { title: 'Address: Street', type: 'text' },
          { title: 'Address: City', type: 'text' },
          { title: 'email', type: 'email' },
          { title: 'Phone Number', type: 'text' },
          { title: 'Current Role', type: 'text' },
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
        storeName={storeNames.education}
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
        storeName={storeNames.employment}
      />
      <CVInputs
        heading={'Additional Skills'}
        inputForm={[
          { title: 'Title', type: 'text' },
          {
            title: 'Skill Level:',
            option: true,
            optionValue: ['beginner', 'intermediate', 'advanced'],
          },
        ]}
        inputName={['title', 'level']}
        storeName={storeNames.additional}
      />
      <CVInputs
        heading={'References'}
        inputForm={[
          { title: 'Name', type: 'text' },
          { title: 'Location', type: 'text' },
        ]}
        inputName={['title', 'location']}
        storeName={storeNames.references}
      />
    </main>
  );
};

export default CVInput;
