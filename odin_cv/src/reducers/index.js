import { combineReducers } from 'redux';

import cvInputsReducer from '../components/CVInput/CVInputs/CVInputsSlice';

export default combineReducers({ cvInputs: cvInputsReducer });
