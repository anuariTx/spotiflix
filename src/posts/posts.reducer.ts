import { ErrorType } from '@shared/types/error.type';
import { ActionInterface } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';

import { setPostsAction } from '@posts/posts.action';
import { IPosts } from '@posts/post.interface';

export interface PostsStateInterface {
  items: IPosts;
  isLoadingData: boolean;
  hasError: boolean;
  postsUnmounted: boolean;
  error?: ErrorType;
}

const INITIAL_STATE: PostsStateInterface = {
  isLoadingData: false,
  hasError: false,
  postsUnmounted: false,
  items: {},
};

export const postsReducer = handleActions(
  {
    [setPostsAction.REQUEST]: () => ({
      ...INITIAL_STATE,
      isLoadingData: true,
    }),
    [setPostsAction.FAILURE]: (state: any, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload,
    }),
    [setPostsAction.SUCCESS]: (state: any, { payload }: ActionInterface) => ({
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
