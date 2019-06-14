import { PostType } from './../../types/post.type';
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
  error?: ErrorType;
}

const INITIAL_STATE: IPostsState = {
  posts: {},
  isLoadingData: false,
  hasError: false,
};

export const postsReducer = handleActions(
  {
    [setPostsAction.REQUEST]: (state: any, { payload }: IAction) => ({
      ...state,
      isLoadingData: true,
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
  },
  INITIAL_STATE,
);
