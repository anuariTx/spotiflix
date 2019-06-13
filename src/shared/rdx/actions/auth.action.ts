import { createRoutine } from 'redux-saga-routines';

import { SIGN_IN, SIGN_OUT } from '@rdx/action-types';

export const signInAction = createRoutine(SIGN_IN);
export const signOutAction = createRoutine(SIGN_OUT);
