import { IAction } from '@interfaces/action.interface';
import { UserType } from '@shared/types/user.type';
import { ErrorType } from '@shared/types/error.type';

import { handleActions, combineActions } from 'redux-actions';
import { signInAction, signOutAction } from '@rdx/actions/auth.action';

export interface IAuthState {
  isSignedIn: boolean;
  isLoadingData: boolean;
  hasError: boolean;
  user?: UserType;
  error?: ErrorType;
}

const INITIAL_STATE: IAuthState = {
  isLoadingData: false,
  hasError: false,
  isSignedIn: false,
  user: undefined,
};

export const authReducer = handleActions(
  {
    [combineActions(signInAction.REQUEST, signOutAction.REQUEST) as any]: (state: IAuthState) => ({
      ...state,
      isLoadingData: true,
    }),
    [combineActions(signInAction.FAILURE, signOutAction.FAILURE) as any]: (
      state: any,
      { payload }: IAction,
    ) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: { ...payload },
    }),
    [signInAction.SUCCESS]: (state: IAuthState, { payload }: IAction) => ({
      ...state,
      isLoadingData: false,
      isSignedIn: true,
      user: payload.user,
    }),
    [signOutAction.SUCCESS]: (state: IAuthState) => ({
      ...state,
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
);
