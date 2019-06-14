import { combineReducers } from 'redux';

import { IAuthState, authReducer } from './auth.reducer';
import { IThemeState, themeReducer } from './theme.reducer';
import { IErrorState, errorReducer } from './error.reducer';
import { IPostsState, postsReducer } from '@rdx/reducers/posts.reducer';

export interface IAppState {
  auth: IAuthState;
  theme: IThemeState;
  error: IErrorState;
  posts: IPostsState;
}

export const RootReducer = combineReducers<IAppState>({
  auth: authReducer,
  theme: themeReducer,
  error: errorReducer,
  posts: postsReducer,
});
