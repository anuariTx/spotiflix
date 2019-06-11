import { SET_ERROR } from './../action-types';
import { IAction } from './../actions/actions.interfaces';

export interface IErrorState {
  title: string;
  error: any;
}

const INITIAL_STATE: IErrorState = {
  title: '',
  error: {},
};

export const errorReducer = (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
