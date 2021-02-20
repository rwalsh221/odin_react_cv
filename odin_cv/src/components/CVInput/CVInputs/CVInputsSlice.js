import { createSlice } from '@reduxjs/toolkit';

const stateObject = {
  education: 'education',
  employment: 'employment',
  additional: 'additional',
};

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
  initialState: { education: [], employment: [], additional: [] },
  reducers: {
    addEducation(state, action) {
      const payload = action.payload;
      state.education.push({ ...payload });
    },
    addEmployment(state, action) {
      const payload = action.payload;
      state.employment.push({ ...payload });
    },
    addAdditional(state, action) {
      console.log(action.payload);
      const payload = action.payload;
      state.additional.push({ ...payload });
    },
    updateEducation(state, action) {
      updateInput(state, action, stateObject.education);
    },
    updateEmployment(state, action) {
      updateInput(state, action, stateObject.employment);
    },
    updateAdditional(state, action) {
      updateInput(state, action, stateObject.additional);
    },
    deleteEducation(state, action) {
      deleteInput(state, action, stateObject.education);
    },
    deleteEmployment(state, action) {
      deleteInput(state, action, stateObject.employment);
    },
    deleteAdditional(state, action) {
      deleteInput(state, action, stateObject.additional);
    },
    initState: (state, action) => (state = action.payload),
  },
});

export const {
  addEducation,
  addEmployment,
  addAdditional,
  updateEducation,
  updateEmployment,
  updateAdditional,
  deleteEducation,
  deleteEmployment,
  deleteAdditional,
  initState,
} = cvInputsSlice.actions;

export default cvInputsSlice.reducer;
