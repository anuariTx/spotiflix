import { SET_POSTS } from '@rdx/action-types';

import { IPostsState } from '@rdx/reducers/posts.reducer';

export const setPostsAction = (payload: IPostsState) => ({
  type: SET_POSTS,
  payload,
});
