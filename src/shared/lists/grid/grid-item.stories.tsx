import React from 'react';

import { storiesOf } from '@storybook/react';

import { GridItemComponent } from './grid-item.component';

const albumItem = {
  title: "She's So Unusual",
  subtitle: 'Cyndi Lauper',
  imageURL: 'https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b',
  isRounded: false,
};

storiesOf('Grid Item', module)
  .addDecorator(story => <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>)
  .add('Album Item', () => <GridItemComponent {...albumItem} />);
