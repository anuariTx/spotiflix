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
    '&:hover': {
      background: '#000',
    },
  },
  song__title: {
    color: '#fff',
    paddingLeft: 40,
    width: 400,
  },
  song__artist: {
    color: 'rgba(255,255,255, 0.7)',
  },
  song__cell: {
    fontSize: 14,
    fontWeight: '400',
    '& span': {
      cursor: 'pointer',
    },
  },
  song__btnPlay: {
    marginRight: '20px',
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
      <span>
        <i className={classNames('fas fa-play-circle', classes.song__btnPlay)} />
        {song.name}
      </span>
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
