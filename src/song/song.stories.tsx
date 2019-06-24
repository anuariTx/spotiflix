import React from 'react';

import { SongItemComponent, SongItemUnloadedComponent } from './item.component';
import { SongListStyled, SongListUnloadedComponent } from './list.container';

import { storiesOf } from '@storybook/react';
import { song, songList } from './songs.dummy';

storiesOf('Song', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Loaded', () => <SongItemComponent song={song} />)
  .add('Loading', () => <SongItemUnloadedComponent />)
  .add('List loaded', () => <SongListStyled songs={songList} fetchSongsAction={() => {}} />)
  .add('List loading', () => <SongListUnloadedComponent />);
