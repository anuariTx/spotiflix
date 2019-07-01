import { RoutineStages } from 'redux-saga-routines';
import { ErrorType } from '@shared/types/error.type';
import { ActionInterface } from '@interfaces/action.interface';
import { AlbumInterface } from '@album/album.interface';

import { handleActions } from 'redux-actions';

import { fetchAlbumAction } from '@album/album.action';

export interface AlbumItemInterface {
  data: AlbumInterface;
  state: RoutineStages;
  error?: ErrorType;
}

export interface AlbumsStateInterface {
  [key: string]: AlbumItemInterface;
}

const INITIAL_STATE: AlbumsStateInterface = {};

export const albumsReducer = handleActions(
  {
    [fetchAlbumAction.REQUEST]: (state: AlbumsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.id]: {
        state: 'REQUEST',
        data: {},
      },
    }),
    [fetchAlbumAction.FAILURE]: (state: AlbumsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.id]: {
        ...state[payload.id],
        state: 'FAILURE',
        error: payload.error,
      },
    }),
    [fetchAlbumAction.SUCCESS]: (state: AlbumsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.id]: {
        ...state[payload.id],
        state: 'SUCCESS',
        data: payload,
      },
    }),
    [fetchAlbumAction.FULFILL]: (state: AlbumsStateInterface, { payload }: ActionInterface) => {
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          state: 'FULFILL',
        },
      };
    },
  },
  INITIAL_STATE,
);
