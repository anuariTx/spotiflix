import { CHANGE_THEME } from '../action-types';

export const changeThemeAction = (theme: any) => ({
  type: CHANGE_THEME,
  payload: { theme },
});
