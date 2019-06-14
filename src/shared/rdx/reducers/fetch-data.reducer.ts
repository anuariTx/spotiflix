import { ErrorType } from '@shared/types/error.type';
import { IAction } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';

import { fetchDataAction } from '@rdx/actions/fetch-data.action';

export type FetchDataType = null | {
  containerName: string;
  data: any;
  isLoadingData: boolean;
  hasError: boolean;
  error?: ErrorType;
};

export interface IFetchDataState {
  [key: string]: FetchDataType;
}

const INITIAL_STATE: IFetchDataState = {};

export const fetchDataReducer = handleActions(
  {
    [fetchDataAction.REQUEST]: (state, { payload }: IAction) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], isLoadingData: false },
    }),
    [fetchDataAction.SUCCESS]: (state, { payload }: IAction) => ({
      ...state,
      [payload.containerName]: { ...state[payload.containerName], ...payload },
    }),
    [fetchDataAction.FAILURE]: (state, { payload }: IAction) => ({
      [payload.containerName]: {
        ...state[payload.containerName],
        error: payload,
        isLoadingData: false,
        hasError: true,
      },
    }),
  },
  INITIAL_STATE,
);
