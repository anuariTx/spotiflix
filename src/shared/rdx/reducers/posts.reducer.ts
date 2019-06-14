import { PostType } from '@shared-types/post.type';
import { ErrorType } from '@shared/types/error.type';
import { IAction } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';

import { setPostsAction } from '@rdx/actions/posts.action';

export interface IPostsState {
  posts: {
    [key: string]: PostType;
  };
  isLoadingData: boolean;
  hasError: boolean;
  postsUnmounted: boolean;
  error?: ErrorType;
}

const INITIAL_STATE: IPostsState = {
  posts: {},
  isLoadingData: false,
  hasError: false,
  postsUnmounted: false,
};

export const postsReducer = handleActions(
  {
    [setPostsAction.REQUEST]: (state: any, { payload }: IAction) => ({
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
      posts: { ...payload },
    }),
    [setPostsAction.FULFILL]: (state: any, { payload }: IAction) => ({
      ...state,
      isLoadingData: false,
      postsUnmounted: true,
    }),
  },
  INITIAL_STATE,
);
