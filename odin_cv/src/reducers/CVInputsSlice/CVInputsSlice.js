import { createSlice } from '@reduxjs/toolkit';

const cvInputsSlice = createSlice({
  name: 'cvInputs',
  initialState: { education: [], employment: [], additional: [] },
  reducers: {
    addEducation(state, action) {
      const payload = action.payload;
      state.education.push({ payload });
    },
    addEmployment(state, action) {
      const payload = action.payload;
      state.employment.push({ payload });
    },
    addAdditional(state, action) {
      const payload = action.payload;
      state.additional.push({ payload });
    },
  },
});

export const {
  addEducation,
  addEmployment,
  addAdditional,
} = cvInputsSlice.actions;

export default cvInputsSlice.reducer;

/*
state = [{storename: [{data:data}, {data:data}]},
        {storename: [{data:data}, {data:data}]},
        {storename: [{data:data}, {data:data}]}]
*/
