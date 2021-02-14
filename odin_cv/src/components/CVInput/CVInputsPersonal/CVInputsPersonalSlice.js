import { createSlice } from '@reduxjs/toolkit';

const cvInputsPersonalSlice = createSlice({
  name: 'cvInputsPersonal',
  initialState: null,
  reducers: {
    addPersonal: (state, action) => (state = action.payload),
  },
});

export const { addPersonal } = cvInputsPersonalSlice.actions;

export default cvInputsPersonalSlice.reducer;
