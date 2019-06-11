import { CHANGE_THEME } from '../action-types';

import { IAction } from '../actions/actions.interfaces';

export interface IThemeState {
  activeTheme: string;
}

const INITIAL_STATE: IThemeState = {
  activeTheme: 'darkTheme',
};

export const themeReducer = (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case CHANGE_THEME:
      return { ...state, activeTheme: payload.theme };
    default:
      return state;
  }
};
