import { PrideTheme } from './pride.theme';
import { ItexicoTheme } from './itexico.theme';
import { LightTheme } from '@themes/light.theme';
import { DarkTheme } from '@themes/dark.theme';

export const configRootTheme = (activeTheme: string) => {
  switch (activeTheme) {
    case 'darkTheme':
      return DarkTheme;
    case 'lightTheme':
      return LightTheme;
    case 'itexicoTheme':
      return ItexicoTheme;
    case 'prideTheme':
      return PrideTheme;
    default:
      return DarkTheme;
  }
};
