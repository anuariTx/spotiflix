import React from 'react';

import { MemoryRouter } from 'react-router';

import { storiesOf } from '@storybook/react';

import { ItemComponent, Item } from './item.component';
import { ItemLoadingComponent } from './item.loading';
import { ItemErrorComponent, ItemError } from './item.error';

const albumItem = {
  title: "She's So Unusual",
  subtitle: [{ id: '2BTZIqw0ntH9MvilQ3ewNY', name: 'Cyndi Lauper' }],
  imageURL: 'https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b',
  isRound: false,
};

const albumItemManyArtists = {
  title: 'Stan',
  subtitle: [
    { id: '7dGJo4pcD2V6oG8kP0tJRR', name: 'Eminem' },
    { id: '2mpeljBig2IXLXRAFO9AAs', name: 'Dido' },
  ],
  imageURL: 'https://i.scdn.co/image/44070d356a054d09aa3b5b3bdffce25c0ed8c7ae',
  isRound: false,
};

const artistItem = {
  title: 'Blur',
  subtitle: '1429887 fans',
  imageURL: 'https://i.scdn.co/image/78a6b33a8b1d2e627d21e979f0cac8a6d7ad402f',
  isRound: true,
};

storiesOf('Item', module)
  .addParameters({
    info: {
      propTables: [Item],
      propTablesExclude: [ItemComponent],
    },
  })
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>
    </MemoryRouter>
  ))
  .add('Album Item', () => <ItemComponent {...albumItem} />)
  .add('Album Item with many artists', () => <ItemComponent {...albumItemManyArtists} />)
  .add('Artist Item', () => <ItemComponent {...artistItem} />);

storiesOf('Loading Item', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Loading Album', () => <ItemLoadingComponent />)
  .add('Loading Artist', () => <ItemLoadingComponent isRound={true} />);

storiesOf('Error Item', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .addParameters({
    info: {
      propTables: [ItemError],
      propTablesExclude: [ItemErrorComponent],
    },
  })
  .add('Error', () => <ItemErrorComponent />);
