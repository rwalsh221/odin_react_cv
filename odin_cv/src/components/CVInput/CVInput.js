import React from 'react';

import classes from './CVInput.module.css';
import { storeNames } from './CVInputs/CVInputsSlice';
import CVInputs from './CVInputs/CVInputs';
import CVInputsPersonal from './CVInputsPersonal/CVInputsPersonal';

const CVInput = () => (
  <main className={classes.CVInput} id={classes.test}>
    <CVInputsPersonal
      inputFormProps={[
        { title: 'Name', type: 'text' },
        { title: 'Address: Street', type: 'text' },
        { title: 'Address: City', type: 'text' },
        { title: 'email', type: 'email' },
        { title: 'Phone Number', type: 'text' },
        { title: 'Current Role', type: 'text' },
      ]}
      inputNameProps={[
        'name',
        'addressStreet',
        'addressCity',
        'email',
        'phoneNumber',
        'currentRole',
      ]}
    />
    <CVInputs
      headingProps="Education History"
      inputFormProps={[
        { title: 'Course Name', type: 'text' },
        { title: 'Place of Study', type: 'text' },
        { title: 'Qualification', type: 'text' },
        { title: 'Date', type: 'date' },
      ]}
      inputNameProps={['title', 'location', 'qualification', 'date']}
      storeNameProps={storeNames.education}
    />
    <CVInputs
      headingProps="Employment History"
      inputFormProps={[
        { title: 'Job Name', type: 'text' },
        { title: 'Place of Work', type: 'text' },
        { title: 'Duration', type: 'date' },
        { title: 'Description', type: 'text' },
      ]}
      inputNameProps={['title', 'location', 'date', 'description']}
      storeNameProps={storeNames.employment}
    />
    <CVInputs
      headingProps="Additional Skills"
      inputFormProps={[
        { title: 'Title', type: 'text' },
        {
          title: 'Skill Level:',
          option: true,
          optionValue: ['beginner', 'intermediate', 'advanced'],
        },
      ]}
      inputNameProps={['title', 'level']}
      storeNameProps={storeNames.additional}
    />
    <CVInputs
      headingProps="References"
      inputFormProps={[
        { title: 'Name', type: 'text' },
        { title: 'Location', type: 'text' },
      ]}
      inputNameProps={['title', 'location']}
      storeNameProps={storeNames.references}
    />
  </main>
);

export default CVInput;
