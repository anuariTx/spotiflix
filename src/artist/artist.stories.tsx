import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  ArtistHeader,
  ArtistHeaderComponent,
  ArtistHeaderUnloadedComponent,
} from './header/header.component';
import { ArtistUnloadedContainer, ArtistStyled } from './artist.container';

import { artistDummy } from './artist.dummy';
import { MemoryRouter } from 'react-router';

storiesOf('Artist', module)
  .addParameters({
    info: {
      propTables: [ArtistHeader],
      propTablesExclude: [ArtistHeaderComponent],
    },
  })
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>
    </MemoryRouter>
  ))
  .add('Header', () => <ArtistHeaderComponent artist={artistDummy} />)
  .add('Header Loading', () => <ArtistHeaderUnloadedComponent />)
  .add('Artist Loading', () => <ArtistUnloadedContainer />)
  .add('Artist', () => (
    <ArtistStyled
      artist={[artistDummy]}
      fetchArtistAction={() => {}}
      cancelArtistFetchAction={() => {}}
    />
  ));
