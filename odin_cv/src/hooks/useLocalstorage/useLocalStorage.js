import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { retrieveLocalStorage } from '../../utilities/utilities';

const useLocalStorage = (actionType, stateSlice) => {
  const dispatch = useDispatch();
  let state = retrieveLocalStorage('fullState');

  const dispatchState = useCallback(
    (actionTypes, payload) => {
      dispatch(actionTypes(payload));
    },
    [dispatch]
  );

  if (state === undefined) {
    state = {
      cvInputs: { education: [], employment: [], additional: [] },
      cvInputsPersonal: {},
    };
  }

  useEffect(() => {
    dispatchState(actionType, state[stateSlice]);
  }, [dispatchState, actionType, state, stateSlice]);
};

export default useLocalStorage;
