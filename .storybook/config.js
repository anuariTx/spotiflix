import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';

import { storyBookOptions } from './storybook.options';

const req = requireContext('../src', true, /\.stories\.tsx$/);

function loadStories() {
  addParameters({ ...storyBookOptions });
  withInfo({
    info: {
      inline: true,
    },
  });
  addDecorator(withInfo);
  req.keys().forEach(req);
}

configure(loadStories, module);
