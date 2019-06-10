import { combineReducers } from 'redux';

import { IAuthState } from './auth.reducer';

import { authReducer } from './auth.reducer';

export interface IAppState {
  auth: IAuthState;
}

export const RootReducer = combineReducers<IAppState>({
  auth: authReducer,
});
