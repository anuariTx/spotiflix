import { createRoutine } from 'redux-saga-routines';

import { FETCH_ALBUM } from '@rdx/action-types';

export const fetchAlbumAction = createRoutine(FETCH_ALBUM);
