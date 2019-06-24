import { combineReducers } from 'redux';

import { AuthStateInterface, authReducer } from '@auth/auth.reducer';
import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';
import { ErrorStateInterface, errorReducer } from '@error/error.reducer';
import { PostsStateInterface, postsReducer } from '@posts/posts.reducer';
import { SongsStateInterface, songsReducer } from '@song/song.reducer';

export interface AppStateInterface {
  auth: AuthStateInterface;
  theme: ThemeStateInterface;
  error: ErrorStateInterface;
  posts: PostsStateInterface;
  songs: SongsStateInterface;
}

export const RootReducer = combineReducers<AppStateInterface>({
  auth: authReducer,
  theme: themeReducer,
  error: errorReducer,
  posts: postsReducer,
  songs: songsReducer,
});
