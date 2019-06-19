import { DarkTheme } from '../src/shared/themes/dark.theme';
import { LightTheme } from '../src/shared/themes/light.theme';
import { ItexicoTheme } from '../src/shared/themes/itexico.theme';
import { PrideTheme } from '../src/shared/themes/pride.theme';

const darkTheme = {
  name: 'DARK_THEME',
  variables: {
    ...DarkTheme,
  },
};

const lightTheme = {
  name: 'LIGHT_THEME',
  variables: {
    ...LightTheme,
  },
};

const itexicoTheme = {
  name: 'ITEXICO_THEME',
  variables: { ...ItexicoTheme },
};

const prideTheme = {
  name: 'PRIDE_THEME',
  variables: { ...PrideTheme },
};

export const themes = [darkTheme, lightTheme, itexicoTheme, prideTheme];
