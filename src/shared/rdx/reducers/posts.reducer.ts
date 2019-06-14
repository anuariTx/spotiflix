import { ErrorType } from '@shared/types/error.type';
import { IAction } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';

import { setPostsAction } from '@rdx/actions/posts.action';
import { IPosts } from '@interfaces/post.interface';

export interface IPostsState {
  items: IPosts;
  isLoadingData: boolean;
  hasError: boolean;
  postsUnmounted: boolean;
  error?: ErrorType;
}

const INITIAL_STATE: IPostsState = {
  items: {},
  isLoadingData: false,
  hasError: false,
  postsUnmounted: false,
};

export const postsReducer = handleActions(
  {
    [setPostsAction.REQUEST]: (state: any) => ({
      ...state,
      isLoadingData: true,
      postsUnmounted: false,
    }),
    [setPostsAction.FAILURE]: (state: any, { payload }: IAction) => ({
      isLoadingData: false,
      hasError: true,
      error: payload,
    }),
    [setPostsAction.SUCCESS]: (state: any, { payload }: IAction) => ({
      ...state,
      isLoadingData: false,
      items: { ...payload },
    }),
    [setPostsAction.FULFILL]: (state: any) => ({
      ...state,
      isLoadingData: false,
      postsUnmounted: true,
    }),
  },
  INITIAL_STATE,
);
