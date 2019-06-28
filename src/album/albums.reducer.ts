import { ErrorType } from '@shared/types/error.type';
import { ActionInterface } from '@interfaces/action.interface';
import { AlbumInterface } from '@album/album.interface';

import { handleActions } from 'redux-actions';

import { fetchAlbumAction } from '@album/album.action';

export interface AlbumItemInterface {
  data: AlbumInterface;
  isLoadingData: boolean;
  hasError: boolean;
  isUnmounted: boolean;
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
        isLoadingData: true,
        hasError: false,
        isUnmounted: false,
        data: {},
      },
    }),
    [fetchAlbumAction.FAILURE]: (state: AlbumsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.id]: {
        ...state[payload.id],
        isLoadingData: false,
        hasError: true,
        error: payload.error,
      },
    }),
    [fetchAlbumAction.SUCCESS]: (state: AlbumsStateInterface, { payload }: ActionInterface) => ({
      ...state,
      [payload.id]: {
        ...state[payload.id],
        isLoadingData: false,
        data: payload,
      },
    }),
    [fetchAlbumAction.FULFILL]: (state: AlbumsStateInterface, { payload }: ActionInterface) => {
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          isLoadingData: false,
          isUnmounted: true,
        },
      };
    },
  },
  INITIAL_STATE,
);
