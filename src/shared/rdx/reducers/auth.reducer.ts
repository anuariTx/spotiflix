import { handleActions, combineActions } from 'redux-actions';
import { IAction } from '../actions/actions.interfaces';
import { signInAction, signOutAction } from '@rdx/actions/auth.action';

export type UserType = {
  id: string | undefined;
  username: string | undefined;
};
export interface IAuthState {
  isSignedIn: boolean;
  isLoadingData: boolean;
  user: UserType;
}

const INITIAL_STATE: IAuthState = {
  isSignedIn: false,
  isLoadingData: false,
  user: {
    id: undefined,
    username: undefined,
  },
};

export const authReducer = handleActions(
  {
    [combineActions(signInAction.REQUEST, signOutAction.REQUEST) as any]: (state: IAuthState) => ({
      ...state,
      isLoadingData: true,
    }),
    [signInAction.SUCCESS]: (state: IAuthState, { payload }: any) => ({
      isLoadingData: false,
      isSignedIn: true,
      user: payload.user,
    }),
    [signOutAction.SUCCESS]: (state: IAuthState, { payload }: any) => ({
      ...state,
      isLoadingData: false,
      isSignedIn: false,
      user: undefined,
    }),
  },
  INITIAL_STATE,
);
