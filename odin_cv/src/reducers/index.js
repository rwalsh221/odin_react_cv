import { combineReducers } from 'redux';

import cvInputsReducer from '../components/CVInput/CVInputs/CVInputsSlice';
import cvInputsPersonalReducer from '../components/CVInput/CVInputsPersonal/CVInputsPersonalSlice';

export default combineReducers({
  cvInputs: cvInputsReducer,
  cvInputsPersonal: cvInputsPersonalReducer,
});
