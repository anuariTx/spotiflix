import { combineReducers } from 'redux';

import { IAuthState, authReducer } from './auth.reducer';
import { IThemeState, themeReducer } from './theme.reducer';

export interface IAppState {
  auth: IAuthState;
  theme: IThemeState;
}

export const RootReducer = combineReducers<IAppState>({
  auth: authReducer,
  theme: themeReducer,
});
