import * as actionTypes from './CVInputsSlice';

export const dispatchSubmit = (uDispatch, storeName, payload) => {
  switch (storeName) {
    case 'education':
      uDispatch(actionTypes.addEducation(payload));
      break;
    case 'employment':
      uDispatch(actionTypes.addEmployment(payload));
      break;
    case 'additional':
      uDispatch(actionTypes.addAdditional(payload));
      break;
    default:
      console.log('no switch');
  }
};

export const dispatchUpdate = (uDispatch, storeName, payload) => {
  switch (storeName) {
    case 'education':
      uDispatch(actionTypes.updateEducation(payload));
      break;
    case 'employment':
      uDispatch(actionTypes.updateEmployment(payload));
      break;
    case 'additional':
      uDispatch(actionTypes.updateAdditional(payload));
      break;
    default:
      console.log('no switch');
  }
};

export const dispatchDelete = (uDispatch, storeName, payload) => {
  switch (storeName) {
    case 'education':
      uDispatch(actionTypes.deleteEducation(payload));
      break;
    case 'employment':
      uDispatch(actionTypes.deleteEmployment(payload));
      break;
    case 'additional':
      uDispatch(actionTypes.deleteAdditional(payload));
      break;
    default:
      console.log('no switch');
  }
};
