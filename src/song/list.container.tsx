import React, { useEffect } from 'react';

import { AppStateInterface } from '@shared/rdx/root.reducer';

import { SongItemComponent, SongItemUnloadedComponent } from './item.component';

import { connect } from 'react-redux';
import { fetchSongListAction } from './song.action';

import injectSheet from 'react-jss';
import classNames from 'classnames';
import { SongType } from './song.type';

const songListStyles = {
  table: {
    background: '#1c1c1c',
    color: '#fff',
  },
  table__heading: {
    display: 'flex',
    background: '#000',
    padding: '15px 0',
    cursor: 'pointer',
    '& span': {
      margin: 'auto',
    },
  },
  tr: {
    display: 'flex',
  },
  'th--title': {
    width: 400,
  },
  'th--artist': {
    width: 200,
  },
};

interface SongListProps {
  songs: SongType[];
  fetchSongsAction: Function;
  cancelFetchSongsAction: Function;
  classes?: any;
}

const SongList = ({ songs, fetchSongsAction, cancelFetchSongsAction, classes }: SongListProps) => {
  useEffect(() => {
    fetchSongsAction();

    return () => cancelFetchSongsAction('Cancel song list fetching');
  }, [cancelFetchSongsAction, fetchSongsAction]);

  const renderSongs = (songs: SongType[]) => {
    return songs.map((song: any, index: number) => <SongItemComponent key={index} song={song} />);
  };

  return (
    <div>
      <h1>Song List</h1>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tr}>
            <th className={classNames(classes.table__heading, classes['th--title'])}>
              <span>Title</span>
            </th>
            <th className={classNames(classes.table__heading, classes['th--artist'])}>
              <span>Artist</span>
            </th>
          </tr>
        </thead>
        <tbody>{renderSongs(songs)}</tbody>
      </table>
    </div>
  );
};

const SongListUnloaded = ({ classes }: any) => {
  return (
    <div>
      <h1>Song List</h1>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tr}>
            <th className={classNames(classes.table__heading, classes['th--title'])}>
              <span>Title</span>
            </th>
            <th className={classNames(classes.table__heading, classes['th--artist'])}>
              <span>Artist</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <SongItemUnloadedComponent />
          <SongItemUnloadedComponent />
          <SongItemUnloadedComponent />
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ songs }: AppStateInterface) => ({
  songs: songs.items,
});

const mapDispatchToProps = {
  fetchSongsAction: fetchSongListAction.request,
  cancelFetchSongsAction: fetchSongListAction.fulfill,
};

export const SongListStyled = injectSheet(songListStyles)(SongList);
export const SongListUnloadedComponent = injectSheet(songListStyles)(SongListUnloaded);
export const SongListComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongListStyled);
