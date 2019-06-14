import { SET_ERROR } from '../action-types';
import { IAction } from '@interfaces/action.interface';

export type ReducerError = null | {
  containerName: string;
  error: Error;
};

export interface IErrorState {
  [key: string]: ReducerError;
}

const INITIAL_STATE: IErrorState = {};

export const errorReducer = (state: IErrorState = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_ERROR:
      return { ...state, [payload.containerName]: payload };
    default:
      return state;
  }
};
