import React from 'react';
import LazyLoad from 'react-lazyload';

import { SongType } from './song.type';

import injectSheet, { ThemeProvider } from 'react-jss';
import classNames from 'classnames';
import Skeleton from 'react-skeleton-loader';

const songItemStyles = (theme: ThemeProvider) => ({
  song: {
    display: 'flex',
    padding: '15px 0',
    transition: 'all .3s ease',
    background: '#1c1c1c',
    borderTop: '0.5px solid rgba(255,255,255,0.15)',
    borderBottom: '0.5px solid rgba(255,255,255,0.15)',
    '&:hover': {
      background: '#000',
    },
  },
  song__title: {
    color: '#fff',
    paddingLeft: 40,
    width: '40%',
  },
  song__artist: {
    color: 'rgba(255,255,255, 0.7)',
    width: '60%',
  },
  song__cell: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '400',
    cursor: 'pointer',
    '& span, i': {
      verticalAlign: '-webkit-baseline-middle',
    },
  },
  song__btnPlay: {
    fontSize: 24,
    marginRight: 20,
    color: '#979797',
  },
});

interface SongItemInterface {
  song: SongType;
  classes?: any;
}

const SongItem = ({ song, classes }: SongItemInterface) => (
  <tr className={classes.song}>
    <td className={classNames(classes.song__title, classes.song__cell)}>
      <i className={classNames('fas fa-play-circle', classes.song__btnPlay)} />
      {song.name}
    </td>
    <td className={classNames(classes.song__artist, classes.song__cell)}>
      <span>{song.artists[0].name}</span>
    </td>
  </tr>
);

const SongItemUnloaded = ({ classes }: any) => (
  <LazyLoad>
    <tr className={classes.song}>
      <td className={classNames(classes.song__title, classes.song__cell)}>
        <span>
          <Skeleton width="250px" color="#303952" borderRadius="3px" />
        </span>
      </td>
      <td className={classNames(classes.song__artist, classes.song__cell)}>
        <span>
          <Skeleton width="150px" color="#303952" borderRadius="3px" />
        </span>
      </td>
    </tr>
  </LazyLoad>
);

export const SongItemUnloadedComponent = injectSheet(songItemStyles)(SongItemUnloaded);
export const SongItemComponent = injectSheet(songItemStyles)(SongItem);
