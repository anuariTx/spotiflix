import { ActionInterface } from '@interfaces/action.interface';
import { UserType } from '@shared/types/user.type';
import { ErrorType } from '@shared/types/error.type';

import { handleActions, combineActions } from 'redux-actions';
import { signInAction, signOutAction } from '@auth/auth.action';

export interface AuthStateInterface {
  isSignedIn: boolean;
  isLoadingData: boolean;
  hasError: boolean;
  user?: UserType;
  error?: ErrorType;
}

const INITIAL_STATE: AuthStateInterface = {
  isLoadingData: false,
  hasError: false,
  isSignedIn: false,
  user: undefined,
};

export const authReducer = handleActions(
  {
    [combineActions(signInAction.REQUEST, signOutAction.REQUEST) as any]: (
      state: AuthStateInterface,
    ) => ({
      ...state,
      isLoadingData: true,
    }),
    [combineActions(signInAction.FAILURE, signOutAction.FAILURE) as any]: (
      state: any,
      { payload }: ActionInterface,
    ) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: { ...payload },
    }),
    [signInAction.SUCCESS]: (state: AuthStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      isSignedIn: true,
      user: payload.user,
    }),
    [signOutAction.SUCCESS]: (state: AuthStateInterface) => ({
      ...state,
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
);
