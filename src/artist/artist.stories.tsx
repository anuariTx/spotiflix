import React from 'react';

import { storiesOf } from '@storybook/react';
import { ArtistHeaderComponent } from './header.component';

storiesOf('Artist', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Loaded', () => <ArtistHeaderComponent />);
