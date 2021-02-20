import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import classes from './CVInput.module.css';
import { retrieveLocalStorage } from '../../utilities/utilities';
import * as actionTypesCVInputsSlice from './CVInputs/CVInputsSlice';
import * as actionTypesCVInputsPersonalSlice from './CVInputsPersonal/CVInputsPersonalSlice';

import CVInputs from './CVInputs/CVInputs';
import CVInputsPersonal from './CVInputsPersonal/CVInputsPersonal';

const mapDispatch = {
  ...actionTypesCVInputsSlice,
  ...actionTypesCVInputsPersonalSlice,
};

const CVInput = (props) => {
  const dispatch = useDispatch();
  let state = retrieveLocalStorage('fullState');

  const dispatchState = useCallback(
    (actionTypes, payload) => {
      dispatch(actionTypes(payload));
    },
    [dispatch]
  );

  if (state === undefined) {
    state = {
      cvInputs: { education: [], employment: [], additional: [] },
      cvInputsPersonal: {},
    };
  }

  useEffect(() => {
    dispatchState(actionTypesCVInputsSlice.initState, state.cvInputs);
  }, [dispatchState, state.cvInputs]);

  useEffect(() => {
    dispatchState(
      actionTypesCVInputsPersonalSlice.addPersonal,
      state.cvInputsPersonal
    );
  }, [dispatchState, state.cvInputsPersonal]);

  // dispatchState(actionTypesCVInputsSlice.initState, state.cvInputs);

  // dispatchState(
  //   actionTypesCVInputsSlice.addEmployment,
  //   state.cvInputs.employment
  // );

  // dispatchState(
  //   actionTypesCVInputsSlice.addAdditional,
  //   state.cvInputs.additional
  // );

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
          {
            title: 'Level',
            type: 'text',
            option: true,
            optionValue: ['low', 'medium', 'high'],
          },
        ]}
        inputName={['title', 'level']}
        storeName={'additional'}
      />
    </main>
  );
};

export default connect(null, mapDispatch)(CVInput);
