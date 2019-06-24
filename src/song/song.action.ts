import { createRoutine } from 'redux-saga-routines';

import { FETCH_SONG_LIST } from './../shared/rdx/action-types';

export const fetchSongListAction = createRoutine(FETCH_SONG_LIST);
