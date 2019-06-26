import React from 'react';

import { storiesOf } from '@storybook/react';
import { ArtistHeaderComponent, ArtistHeaderUnloadedComponent } from './header.component';
import { ArtistUnloadedContainer } from './artist.container';

storiesOf('Artist', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Header', () => <ArtistHeaderComponent />)
  .add('Header Loading', () => <ArtistHeaderUnloadedComponent />)
  .add('Artist Loading', () => <ArtistUnloadedContainer />);
