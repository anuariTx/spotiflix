import { createRoutine } from 'redux-saga-routines';

import { FETCH_ARTIST } from './../shared/rdx/action-types';

export const fetchArtistAction = createRoutine(FETCH_ARTIST);
