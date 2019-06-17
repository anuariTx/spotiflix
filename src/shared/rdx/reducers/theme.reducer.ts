import { handleActions } from 'redux-actions';
import { IAction } from '@interfaces/action.interface';
import { changeThemeAction } from './../actions/theme.action';

export interface IThemeState {
  activeTheme: string;
  isLoadingTheme: boolean;
}

const INITIAL_STATE: IThemeState = {
  activeTheme: 'darkTheme',
  isLoadingTheme: false,
};

export const themeReducer = handleActions(
  {
    [changeThemeAction.TRIGGER]: (state: any) => ({
      ...state,
      isLoadingTheme: true,
    }),
    [changeThemeAction.FULFILL]: (state: any, { payload }: IAction) => ({
      activeTheme: payload.theme,
      isLoadingTheme: false,
    }),
  },
  INITIAL_STATE,
);
