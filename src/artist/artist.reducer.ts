import { ActionInterface } from '@interfaces/action.interface';
import { ArtistType } from './artist.type';

import { handleActions } from 'redux-actions';
import { fetchArtistAction } from './artist.action';

export interface ArtistStateInterface {
  items: ArtistType[];
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: ArtistStateInterface = {
  items: [],
  isLoadingData: false,
  hasError: false,
  error: undefined,
};

export const artistReducer = handleActions(
  {
    [fetchArtistAction.REQUEST]: (state: ArtistStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchArtistAction.FAILURE]: (state: ArtistStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      error: payload.error,
    }),
    [fetchArtistAction.SUCCESS]: (state: ArtistStateInterface, { payload }: ActionInterface) => ({
      ...state,
      items: [payload.artists],
    }),
  },
  INITIAL_STATE,
);
