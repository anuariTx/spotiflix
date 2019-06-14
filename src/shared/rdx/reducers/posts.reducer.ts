import { SET_POSTS } from '../action-types';
import { IAction } from '../actions/actions.interfaces';

export type Post = {
  id: string;
  title: string;
};

export interface IPostsState {
  [key: string]: Post;
}

const INITIAL_STATE: IPostsState = {};

export const postsReducer = (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
