import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { retrieveLocalStorage } from '../../utilities/utilities';

// HOOK FOR LOCALSTORAGE. NOT USED. LOCAL INPUT RETRIVED IN REDUX SLICE
const useLocalStorage = (actionType, stateSlice, storeNames = {}) => {
  const dispatch = useDispatch();
  let state = retrieveLocalStorage('fullState');
  // console.log(state.cvInputs.test);
  // console.log(state[stateSlice]);
  // console.log(storeNames);
  if (state !== undefined) {
    for (let i = 0; i < storeNames.length; i++) {
      let obj = storeNames[i];
      // console.log(stateSlice);
      // console.log(obj);
      // console.log(state[stateSlice][obj]);
      // console.log([storeNames[i]]);
      if (state[stateSlice][obj] === undefined) {
        console.log('UNDEFINEDD', [storeNames[i]]);
        state = { ...state[stateSlice], [storeNames[i]]: [] };
        console.log(state);
      }
    }
  }

  console.log(state);

  const dispatchState = useCallback(
    (actionTypes, payload) => {
      dispatch(actionTypes(payload));
    },
    [dispatch]
  );

  // if (state === undefined) {
  //   state = {
  //     cvInputs: {
  //       education: [],
  //       employment: [],
  //       additional: [],
  //       references: [],
  //     },
  //     cvInputsPersonal: {},
  //   };
  // }

  console.log(state);
  useEffect(() => {
    dispatchState(actionType, state[stateSlice]);
  }, [dispatchState, actionType, state, stateSlice]);
};

export default useLocalStorage;
