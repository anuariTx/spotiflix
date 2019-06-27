import React from 'react';

import { storiesOf } from '@storybook/react';
import { ArtistHeaderComponent, ArtistHeaderUnloadedComponent } from './header/header.component';
import { ArtistUnloadedContainer } from './artist.container';

import { artistDummy } from './artist.dummy';

storiesOf('Artist', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Header', () => <ArtistHeaderComponent artist={artistDummy} />)
  .add('Header Loading', () => <ArtistHeaderUnloadedComponent />)
  .add('Artist Loading', () => <ArtistUnloadedContainer />);
