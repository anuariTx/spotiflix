import { SIGN_IN, SIGN_OUT } from '../action-types';
import { IAction } from '../actions/actions.interfaces';

export interface IAuthState {
  isSignedIn: boolean;
  userId: string | undefined;
  userName: string | undefined;
}

const INITIAL_STATE: IAuthState = {
  isSignedIn: false,
  userId: undefined,
  userName: undefined
};

export const authReducer = (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: payload.userId,
        userName: payload.userName,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: undefined,
        userName: undefined,
      };
    default:
      return state;
  }
};
