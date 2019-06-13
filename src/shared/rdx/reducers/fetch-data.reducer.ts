import { handleActions } from 'redux-actions';

import { fetchData } from '@rdx/actions/fetch-data.action';

export type FetchData = null | {
  containerName: string;
  data: any;
  hasLoadedData: boolean;
};

export interface IFetchDataState {
  [key: string]: FetchData;
}

const INITIAL_STATE: IFetchDataState = {};

export const fetchDataReducer = handleActions(
  {
    [fetchData.REQUEST]: (state, { payload }: any) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], hasLoadedData: false },
    }),
    [fetchData.SUCCESS]: (state, { payload }: any) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], ...payload },
    }),
  },
  INITIAL_STATE,
);
