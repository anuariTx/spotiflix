import { ActionInterface } from '@interfaces/action.interface';
import { handleActions } from 'redux-actions';
import { setErrorAction, clearErrorAction } from '@error/error.action';

export type ReducerError = {
  containerName: string;
  error: Error;
};

export interface ErrorStateInterface {
  [key: string]: ReducerError;
}

const INITIAL_STATE: ErrorStateInterface = {};

export const errorReducer = handleActions(
  {
    [setErrorAction.FULFILL]: (state: ErrorStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.containerName]: payload,
    }),
    [clearErrorAction.FULFILL]: (state: ErrorStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.containerName]: undefined,
    }),
  },
  INITIAL_STATE,
);
