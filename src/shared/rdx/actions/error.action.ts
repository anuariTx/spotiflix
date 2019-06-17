import { createRoutine } from 'redux-saga-routines';

import { SET_ERROR, CLEAR_ERROR } from '@rdx/action-types';

export const setErrorAction = createRoutine(SET_ERROR);
export const clearErrorAction = createRoutine(CLEAR_ERROR);
