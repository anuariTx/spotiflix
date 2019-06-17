import { IAction } from '@interfaces/action.interface';
import { handleActions } from 'redux-actions';
import { setErrorAction, clearErrorAction } from '@rdx/actions/error.action';

export type ReducerError = null | {
  containerName: string;
  error: Error;
};

export interface IErrorState {
  [key: string]: ReducerError;
}

const INITIAL_STATE: IErrorState = {};

export const errorReducer = handleActions(
  {
    [setErrorAction.FULFILL]: (state: IErrorState, { payload }: IAction) => ({
      ...state,
      [payload.containerName]: payload,
    }),
    [clearErrorAction.FULFILL]: (state: IErrorState, { payload }: IAction) => ({
      ...state,
      [payload.containerName]: undefined,
    }),
  },
  INITIAL_STATE,
);
