import { CHANGE_THEME } from '../action-types';
import { createRoutine } from 'redux-saga-routines';

export const changeThemeAction = createRoutine(CHANGE_THEME);
