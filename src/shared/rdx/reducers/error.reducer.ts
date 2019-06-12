import { SET_ERROR } from './../action-types';
import { IAction } from './../actions/actions.interfaces';

export type ReducerError = null | {
  containerName: string;
  error: Error;
};

export interface IErrorState {
  title: string;
  error: ReducerError;
}

const INITIAL_STATE: IErrorState = {
  title: '',
  error: null,
};

export const errorReducer = (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
