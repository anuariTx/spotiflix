import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { HeaderComponent } from './header.component';

import { DarkTheme } from '../../themes/dark.theme';
//@ts-ignore
import { withThemesProvider } from 'storybook-addon-jss-theme';

const headerProps = {
  user: {
    id: '1',
    name: 'Memo',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8d404db-b360-48b8-928a-a09b89dd9f25/db44a1k-d14da8fe-3b5f-410f-b4d8-4ba7a8de9650.png/v1/fill/w_400,h_400,q_80,strp/random_girl_avatar_by_mrg93_db44a1k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZDhkNDA0ZGItYjM2MC00OGI4LTkyOGEtYTA5Yjg5ZGQ5ZjI1XC9kYjQ0YTFrLWQxNGRhOGZlLTNiNWYtNDEwZi1iNGQ4LTRiYTdhOGRlOTY1MC5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.suK0WTna2qEL1eipWsmZsYmz6gWjRGW5rsTeKU_YrJk',
  },
  signOutAction: linkTo('Login', 'Sign In'),
};

const defaultTheme = {
  name: 'darkTheme',
  variables: DarkTheme,
};

storiesOf('Header', module)
  .addDecorator(withThemesProvider(defaultTheme))
  .add('Signed In', () => <HeaderComponent {...headerProps} />);
