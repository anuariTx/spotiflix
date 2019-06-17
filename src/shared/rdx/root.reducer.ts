import { combineReducers } from 'redux';

import { IAuthState, authReducer } from '@auth/auth.reducer';
import { IThemeState, themeReducer } from '@themes/theme.reducer';
import { IErrorState, errorReducer } from 'error/error.reducer';
import { IPostsState, postsReducer } from 'posts/posts.reducer';

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
