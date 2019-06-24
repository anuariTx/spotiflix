import React from 'react';

import { storiesOf } from '@storybook/react';

import { GridItemComponent } from './grid-item.component';
import { GridItemLoadingComponent } from './grid-item.loading';
import { GridItemErrorComponent } from './grid-item.error';

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

storiesOf('Grid Item', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Album Item', () => <GridItemComponent {...albumItem} />)
  .add('Artist Item', () => <GridItemComponent {...artistItem} />)
  .add('Loading Album', () => <GridItemLoadingComponent />)
  .add('Loading Artist', () => <GridItemLoadingComponent isRounded={true} />)
  .add('Error', () => <GridItemErrorComponent />);
