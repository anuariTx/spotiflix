import { handleActions } from 'redux-actions';

import { fetchDataAction } from '@rdx/actions/fetch-data.action';

export type FetchDataType = null | {
  containerName: string;
  data: any;
  hasLoadedData: boolean;
};

export interface IFetchDataState {
  [key: string]: FetchDataType;
}

const INITIAL_STATE: IFetchDataState = {};

export const fetchDataReducer = handleActions(
  {
    [fetchDataAction.REQUEST]: (state, { payload }: any) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], hasLoadedData: false },
    }),
    [fetchDataAction.SUCCESS]: (state, { payload }: any) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], ...payload },
    }),
  },
  INITIAL_STATE,
);
