import { LightTheme } from '@themes/light.theme';
import { DarkTheme } from '@themes/dark.theme';

export const configRootTheme = (activeTheme: string) => {
  switch (activeTheme) {
    case 'darkTheme':
      return DarkTheme;
    case 'lightTheme':
      return LightTheme;
    default:
      return DarkTheme;
  }
};
