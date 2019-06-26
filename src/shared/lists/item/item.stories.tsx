import React from 'react';

import { storiesOf } from '@storybook/react';

import { ItemComponent } from './item.component';
import { ItemLoadingComponent } from './item.loading';
import { ItemErrorComponent } from './item.error';
import { MemoryRouter } from 'react-router';

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
  title: 'Band of Horses',
  subtitle: '306565 fans',
  imageURL: 'https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332',
  isRound: true,
};

storiesOf('Item', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>
    </MemoryRouter>
  ))
  .add('Album Item', () => <ItemComponent {...albumItem} />)
  .add('Album Item with many artists', () => <ItemComponent {...albumItemManyArtists} />)
  .add('Artist Item', () => <ItemComponent {...artistItem} />)
  .add('Loading Album', () => <ItemLoadingComponent />)
  .add('Loading Artist', () => <ItemLoadingComponent isRound={true} />)
  .add('Error', () => <ItemErrorComponent />);
