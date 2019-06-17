import { createRoutine } from 'redux-saga-routines';

import { SET_POSTS } from '@rdx/action-types';

export const setPostsAction = createRoutine(SET_POSTS);
