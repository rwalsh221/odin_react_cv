import { createSlice } from '@reduxjs/toolkit';

// import { element } from 'prop-types';

import { retrieveLocalStorage } from '../../../utilities/utilities';

const fullState = retrieveLocalStorage('fullState');

let initState;

export const storeNames = {
  education: 'education',
  employment: 'employment',
  additional: 'additional',
  references: 'references',
};

// STATEOBJECT = CVInputs storeName
let stateObject = {};

const storeNamesKeys = Object.keys(storeNames);

storeNamesKeys.forEach((element) => {
  stateObject = { ...stateObject, [element]: [] };
});

// for (let key in storeNames) {
//   stateObject = { ...stateObject, [key]: [] };
// }

// sets initialState based on local storage
if (fullState === undefined) {
  initState = {
    ...stateObject,
  };
} else {
  initState = { ...fullState.cvInputs };
  const stateObjectKeys = Object.keys(stateObject);
  stateObjectKeys.forEach((element) => {
    if (fullState.cvInputs[element] === undefined) {
      initState = { ...initState, [element]: [] };
    }
  });

  // for (let key in stateObject) {
  //   if (fullState.cvInputs[key] === undefined) {
  //     initState = { ...initState, [key]: [] };
  //   }
  // }
}

const updateInput = (state, action, stateObject) => {
  const copyState = [...state[stateObject]];
  const inputIdArr = copyState.map((el) => el.id);
  const editIndex = inputIdArr.indexOf(action.payload.id * 1);
  copyState.splice(editIndex, 1, action.payload);
  state[stateObject] = [...copyState];
};

const deleteInput = (state, action, stateObject) => {
  const copyState = state[stateObject].map((element) => element);
  const newIndexedArr = copyState.map((element) => element.id);
  copyState.splice(newIndexedArr.indexOf(action.payload * 1), 1);
  state[stateObject] = [...copyState];
};

const cvInputsSlice = createSlice({
  name: 'cvInputs',
  initialState: {
    ...initState,
  },
  reducers: {
    addEducation(state, action) {
      const { payload } = action.payload;
      state.education.push({ ...payload });
    },
    addEmployment(state, action) {
      const { payload } = action.payload;
      state.employment.push({ ...payload });
    },
    addAdditional(state, action) {
      const { payload } = action.payload;
      state.additional.push({ ...payload });
    },
    addReferences(state, action) {
      const { payload } = action.payload;
      state.references.push({ ...payload });
    },
    updateEducation(state, action) {
      updateInput(state, action, storeNames.education);
    },
    updateEmployment(state, action) {
      updateInput(state, action, storeNames.employment);
    },
    updateAdditional(state, action) {
      updateInput(state, action, storeNames.additional);
    },
    updateReferences(state, action) {
      updateInput(state, action, storeNames.references);
    },
    deleteEducation(state, action) {
      deleteInput(state, action, storeNames.education);
    },
    deleteEmployment(state, action) {
      deleteInput(state, action, storeNames.employment);
    },
    deleteAdditional(state, action) {
      deleteInput(state, action, storeNames.additional);
    },
    deleteReferences(state, action) {
      deleteInput(state, action, storeNames.references);
    },
  },
});

export const {
  addEducation,
  addEmployment,
  addAdditional,
  addReferences,
  updateEducation,
  updateEmployment,
  updateAdditional,
  updateReferences,
  deleteEducation,
  deleteEmployment,
  deleteAdditional,
  deleteReferences,
} = cvInputsSlice.actions;

export default cvInputsSlice.reducer;
