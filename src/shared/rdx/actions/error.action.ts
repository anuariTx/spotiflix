import { SET_ERROR } from '@rdx/action-types';

import { ReducerError } from '@rdx/reducers/error.reducer';

export const setErrorAction = (payload: ReducerError) => ({
  type: SET_ERROR,
  payload,
});
