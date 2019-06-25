import React from 'react';

import { storiesOf } from '@storybook/react';

import { ItemComponent } from './item.component';
import { ItemLoadingComponent } from './item.loading';
import { ItemErrorComponent } from './item.error';

const albumItem = {
  title: "She's So Unusual",
  subtitle: 'Cyndi Lauper',
  imageURL: 'https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b',
  isRounded: false,
};

const artistItem = {
  title: 'Band of Horses',
  imageURL: 'https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332',
  isRounded: true,
};

storiesOf('Item', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Album Item', () => <ItemComponent {...albumItem} />)
  .add('Artist Item', () => <ItemComponent {...artistItem} />)
  .add('Loading Album', () => <ItemLoadingComponent />)
  .add('Loading Artist', () => <ItemLoadingComponent isRounded={true} />)
  .add('Error', () => <ItemErrorComponent />);
