import React from 'react';

import { MemoryRouter } from 'react-router';

import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { albumContainer, albums, listProps } from '@album/album.dummy';

import { Album } from './album.container';
import { Grid } from '@album/grid.container';
import { Carousel } from '@album/carousel.container';
import { ItemErrorComponent } from '@list-item/item.error';

const actions = {
  clearErrorAction: action('clearErrorAction'),
  fetchAction: action('fetchAction'),
  cancelAction: action('cancelAction'),
};

const store: any = {
  getState: () => {
    return {
      albums,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
  replaceReducer(nextReducer: <S, A>(state: S | undefined, action: A) => S): void {},
};

storiesOf('Album', module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>
      </MemoryRouter>
    </Provider>
  ))
  .add('Album Container', () => (
    <Album fallback={<ItemErrorComponent />} {...albumContainer} {...actions} />
  ))
  .add('Album Grid', () => <Grid {...listProps} />)
  .add('Album Carousel', () => <Carousel {...listProps} />);
