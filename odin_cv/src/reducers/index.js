import { combineReducers } from 'redux';

import cvInputsReducer from './CVInputsSlice/CVInputsSlice';

export default combineReducers({ cvInputs: cvInputsReducer });
