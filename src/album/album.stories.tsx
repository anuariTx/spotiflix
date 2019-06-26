import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Album } from './album.container';
import { MemoryRouter } from 'react-router';

const actions = {
  clearErrorAction: action('clearErrorAction'),
  fetchAction: action('fetchAction'),
  cancelAction: action('cancelAction'),
};

const albumContainer = {
  id: '7eyQXxuf2nGj9d2367Gi5f',
  containerName: 'ALBUM_7eyQXxuf2nGj9d2367Gi5f',
  isRound: false,
  data: {
    id: '7eyQXxuf2nGj9d2367Gi5f',
    title: 'In Rainbows',
    image: 'https://i.scdn.co/image/34c390dd70fca5ba873ec7bc27c0f15888e77f12',
    artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
    releaseDate: '2007-12-28',
    trackIDs: [
      '6dsq7Nt5mIFzvm5kIYNORy',
      '4m0Vgr48VFaMYw0Sp1ozJu',
      '5k7VKj1Xwy5DjO4B0PdAOb',
      '4Iyo50UoYhuuYORMLrGDci',
      '51ygW389BW4Dut3B69pSwc',
      '5SdmtFbNOD7Qej6jFCHkOM',
      '56Z7hbyMrndw1naxb6I5Oi',
      '3Jc6X15OZCCyhGSHBF4hwB',
      '15ea10YpJIl3mJq75yzqsD',
      '3uxhyRdWVXp7GQvERQl6fA',
    ],
  },
  isLoadingData: false,
  hasError: false,
  isUnmounted: false,
};

storiesOf('Album', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ fontFamily: 'Lato, sans-serif' }}>{story()}</div>
    </MemoryRouter>
  ))
  .add('Album Container', () => <Album {...albumContainer} {...actions} />);
