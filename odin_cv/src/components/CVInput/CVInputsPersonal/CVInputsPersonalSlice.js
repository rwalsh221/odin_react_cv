import { createSlice } from '@reduxjs/toolkit';

import { retrieveLocalStorage } from '../../../utilities/utilities';

const fullState = retrieveLocalStorage('fullState');

let stateObject;

if (fullState === undefined) {
  stateObject = {};
} else {
  stateObject = { ...fullState.cvInputsPersonal };
}

const cvInputsPersonalSlice = createSlice({
  name: 'cvInputsPersonal',
  initialState: { ...stateObject },
  reducers: {
    addPersonal: (state, action) => (state = action.payload),
  },
});

export const { addPersonal } = cvInputsPersonalSlice.actions;

export default cvInputsPersonalSlice.reducer;
