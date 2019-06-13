import { createRoutine } from 'redux-saga-routines';

import { FETCH_DATA } from '@rdx/action-types';

export const fetchDataAction = createRoutine(FETCH_DATA);
