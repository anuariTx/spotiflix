import React from 'react';

import { GridItemInterface } from './grid-item.component';

import { storiesOf } from '@storybook/react';

import { GridItemComponent } from './grid-item.component';

const albumItem: GridItemInterface = {
  title: "She's So Unusual",
  subtitle: 'Cyndi Lauper',
  imageURL: 'https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b',
  isRounded: false,
};

storiesOf('Grid Item', module).add('Album Item', () => <GridItemComponent {...albumItem} />);
