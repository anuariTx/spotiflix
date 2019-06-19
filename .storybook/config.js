import { configure, addDecorator, addParameters } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-jss-theme';

import requireContext from 'require-context.macro';
import { storyBookOptions } from './storybook.options';

import { themes } from './themes';

const req = requireContext('../src', true, /\.stories\.tsx$/);

addDecorator(withInfo);
addDecorator(withThemesProvider(themes));

function loadStories() {
  addParameters({ ...storyBookOptions });
  withInfo({
    info: {
      inline: true,
    },
  });
  req.keys().forEach(req);
}

configure(loadStories, module);
