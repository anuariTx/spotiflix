import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Album } from './album.container';
import { Provider } from 'react-redux';
import { Grid } from '@album/grid.container';
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

const albums = {
  '1oW3v5Har9mvXnGk0x4fHm': {
    data: {
      artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
      id: '1oW3v5Har9mvXnGk0x4fHm',
      image: 'https://i.scdn.co/image/4bbc829fa1284c4cf85fdb62a599ae9e6e7d1c32',
      releaseDate: '2003',
      title: 'Hail To the Thief',
      trackIDs: [
        '37kUGdEJJ7NaMl5LFW4EA4',
        '3wPLVTqp66miOokxN1cLbm',
        '5olWalQH1oVza5D6xJg4oX',
        '6CVdTDYoDbwYj4xn8u5Gha',
        '6TdGeb9e2KL6RZG0VxoTMd',
        '5X3uhutgZktlUWmzIOE3NG',
        '53RYTfkLiyZuUZHwJC3Wmm',
        '2q4zYomFf4ZVrEOr1aXj6l',
        '77SPrxY5gn6VPrKPGrfLnM',
        '28VoI90xDBoKe5sP3sP5jW',
        '2LfUYXF8jfrHCfwYyf2pRj',
        '38WL6GlG9NHFiQS6JxV84r',
        '467FBnBDRfL8Hz9ktUUybj',
        '66cuLvkHsW7dNkfNk6gQP9',
      ],
    },
    hasError: false,
    isLoadingData: false,
    isUnmounted: false,
  },
  '1DBkJIEoeHrTX4WCBQGcCi': {
    data: {
      artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
      id: '1DBkJIEoeHrTX4WCBQGcCi',
      image: 'https://i.scdn.co/image/9f69ce2bb80c60914cd4caf761afa8b1657f4783',
      releaseDate: '2011-02-18',
      title: 'The King Of Limbs',
      trackIDs: [
        '6tLALP9mi7VbNC7s16iBRK',
        '3wxmJSQ3Z1HfAuxeHQoZcE',
        '4tCwsdqqG4jASHhbsMHCx0',
        '0eECFDnWy0RdjMmJ8NOeAL',
        '1amSa5xo79zINsgrpNlNge',
        '4sLGaMl33I6mcsk7u4xHAU',
        '4OrGm3fBdhlXuHtRBoLUMW',
        '2rA36OZNb3LkvqcNro1ugK',
      ],
    },
    hasError: false,
    isLoadingData: false,
    isUnmounted: false,
  },
  '4ENxWWkPImVwAle9cpJ12I': {
    data: {
      artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
      id: '4ENxWWkPImVwAle9cpJ12I',
      image: 'https://i.scdn.co/image/819b35407ee4fe3da687cbacd8017b4448f0775b',
      releaseDate: '2017-06-23',
      title: 'OK Computer OKNOTOK 1997 2017',
      trackIDs: [
        '4F4Wtw45jKohdzu9onG6WH',
        '1QgI14YcWg3tOobXjzlNMl',
        '2kDEGoEVHfpNPMOs7IIG5y',
        '0s0lnAIcclHVjQ4fITlOoU',
        '7BOXzaH1Rv9JLUgwvAkID5',
        '24yaR0CyO2oRISmeL2AvVj',
        '0VjnvzjK5wN93gPLwU4tqw',
        '2HpUjdaboRlwPOSZT1UZrZ',
        '2Pquc3xvWghdFuf0HrjLUx',
        '5O3FBCAj4Y3rvPXrEmlinc',
        '7DqQtB1w0fHeSwjwq3IYU1',
        '5R8pnOmAwKNh4KnvJW2paN',
        '6V9PDDZ2pHQCUleRXvRYQ1',
        '552BIJ9kKwwqiGf4YojYbL',
        '0EbIifYAM9wTYlPzKgTwFA',
        '1WKFFNfL31ApigXTSd7Sea',
        '5tDkjUaPiTYne5aDtg6ZUE',
        '0PXadTqt6pRNcXOEQgvPAK',
        '2WHsVjndiTbqMTWy1gfOnV',
        '0QHoKFOWwMSFxB4zc5HDzG',
        '4ozum7awQLhJ6D6fQL5xPy',
        '7BFYY2EFrru8QHolUiKpEE',
        '6gXv8OCSgKr5ZoVYi7Q7GM',
      ],
    },
    hasError: false,
    isLoadingData: false,
    isUnmounted: false,
  },
  '47xaqCsJcYFWqD1gwujl1T': {
    data: {
      artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
      id: '47xaqCsJcYFWqD1gwujl1T',
      image: 'https://i.scdn.co/image/d6f8b7931cc7a857ff8ddd3dd07613085154ac1a',
      releaseDate: '2011-10-10',
      title: 'TKOL RMX 1234567',
      trackIDs: [
        '6Unw1AAcpS1ZgZoRlj2jxA',
        '5hfzW7LG97Hxv62HHUKgaj',
        '64lecUR19lBSu317AzVZv3',
        '1CxhtUbe1o2PeMM3l5Kch6',
        '2H7Y8wYixrSlKJoaZ1N2yl',
        '3zkFTfcboFcOdno0CHCmTc',
        '7KKglMFf5KV0PIDSAOqfnH',
        '4raxzmnFq93jfKC8c3xcIv',
        '1gaAIZ4vGQ6QvDUgN2Xyus',
        '7krim8C3DpTu1ShdoZezix',
        '1mlpZ1Zv1CZSAVsXKQYnQY',
        '410fAd2tXU8aEb4vrGzslY',
        '66Pyms4pYaHEcPHZ7DdMbE',
        '1AVrv7FD10FoKW38oBiKRg',
        '0tKuiKb2mazZYdA6fPP7kI',
        '6M0NzgHVT1FL7vPIUTZlXD',
        '4LgjuZHNEoqsFlJfP7IDTB',
        '2Bri2rrUY9kVo6teP0kaeJ',
        '1MheF7RyAsg9tuI6Vje9SB',
      ],
    },
    hasError: false,
    isLoadingData: false,
    isUnmounted: false,
  },
  '7eyQXxuf2nGj9d2367Gi5': {
    data: {},
    hasError: true,
    isLoadingData: false,
    isUnmounted: true,
  },
  '36lJLPoPPOKNFddTAcirnc': {
    data: {
      artists: [{ id: '4Z8W4fKeB5YxbusRsdQVPb', name: 'Radiohead' }],
      id: '36lJLPoPPOKNFddTAcirnc',
      image: 'https://i.scdn.co/image/342d56d055ced7a9af1fc23b9dbca93ccc3088cb',
      releaseDate: '2007',
      title: 'In Rainbows',
      trackIDs: [
        '3gKuywOm38axM8sJGq6Laq',
        '6CNt7GXfOOS5Hkxu8e4vav',
        '4gq2bc2770XvbJdEtfUbmw',
        '2uYSbsxAMmK1awUl06T7ix',
        '7Ceo3Rpq33Vc5WcOb3tUbT',
        '5sdo1jKC0mpRxamLAuuPOS',
        '2mAWzzAi9pdKwteyg0lNqj',
        '1w8QCSDH4QobcQeT4uMKLm',
      ],
    },
    hasError: false,
    isLoadingData: false,
    isUnmounted: false,
  },
};

const gridList = {
  ids: [
    '1oW3v5Har9mvXnGk0x4fHm',
    '1DBkJIEoeHrTX4WCBQGcCi',
    '4ENxWWkPImVwAle9cpJ12I',
    '47xaqCsJcYFWqD1gwujl1T',
    '7eyQXxuf2nGj9d2367Gi5',
    '36lJLPoPPOKNFddTAcirnc',
  ],
  areRound: false,
  albums,
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
  .add('Album Container', () => <Album {...albumContainer} {...actions} />)
  .add('Album Grid', () => <Grid {...gridList} />);
