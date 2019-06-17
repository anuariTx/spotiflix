import { handleActions, combineActions } from 'redux-actions';
import { IAction } from '@interfaces/action.interface';
import { ErrorType } from '@shared/types/error.type';
import { signInAction, signOutAction } from '@rdx/actions/auth.action';

export type UserType = {
  id?: string;
  username?: string;
};
export interface IAuthState {
  isSignedIn: boolean;
  isLoadingData: boolean;
  hasError: boolean;
  user?: UserType;
  error?: ErrorType;
}

const INITIAL_STATE: IAuthState = {
  isSignedIn: false,
  isLoadingData: false,
  hasError: false,
  error: undefined,
  user: undefined,
};

export const authReducer = handleActions(
  {
    [combineActions(signInAction.REQUEST, signOutAction.TRIGGER) as any]: (state: IAuthState) => ({
      ...state,
      isLoadingData: true,
    }),
    [combineActions(signInAction.FAILURE, signOutAction.FAILURE) as any]: (
      state: any,
      { payload }: IAction,
    ) => ({
      ...state,
      hasError: true,
      error: { ...payload },
    }),
    [signInAction.SUCCESS]: (state: IAuthState, { payload }: IAction) => ({
      user: payload.user,
      isLoadingData: false,
      isSignedIn: true,
      hasError: false,
    }),
    [signOutAction.FULFILL]: () => ({
      INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
);
