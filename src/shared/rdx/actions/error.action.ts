import { SET_ERROR } from '@rdx/action-types';

export const errorAction = (error: any) => ({
  type: SET_ERROR,
  payload: error,
});
