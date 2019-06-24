import { ActionInterface } from './../shared/interfaces/action.interface';
import { SongType } from './song.type';

import { handleActions } from 'redux-actions';
import { fetchSongListAction } from './song.action';

export interface SongsStateInterface {
  items: SongType[];
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: SongsStateInterface = {
  items: [],
  isLoadingData: false,
  hasError: false,
  error: undefined,
};

export const songsReducer = handleActions(
  {
    [fetchSongListAction.REQUEST]: (state: SongsStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchSongListAction.FAILURE]: (state: SongsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      error: payload.error,
    }),
    [fetchSongListAction.SUCCESS]: (state: SongsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      items: payload.songs,
    }),
  },
  INITIAL_STATE,
);
