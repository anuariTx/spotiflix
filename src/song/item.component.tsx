import React from 'react';

import injectSheet from 'react-jss';
import classNames from 'classnames';

const songItemStyles = {
  song: {
    display: 'flex',
    padding: '15px 0',
    transition: 'all .3s ease',
    '&:hover': {
      background: '#000',
    },
  },
  song__title: {
    paddingLeft: 40,
    width: 400,
  },
  song__artist: {
    color: 'rgba(255,255,255, 0.7)',
    width: 200,
  },
  song__cell: {
    fontSize: 14,
    fontWeight: '400',
    '& span': {
      cursor: 'pointer',
    },
  },
};

const SongItem = ({ song, classes }: any) => (
  <tr className={classes.song}>
    <td className={classNames(classes.song__title, classes.song__cell)}>
      <span>{song.name}</span>
    </td>
    <td className={classNames(classes.song__artist, classes.song__cell)}>
      <span>{song.artists[0].name}</span>
    </td>
  </tr>
);

export const SongItemComponent = injectSheet(songItemStyles)(SongItem);
