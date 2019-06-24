import React, { Component } from 'react';

import { SongItemComponent } from './item.component';

import injectSheet from 'react-jss';
import classNames from 'classnames';

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

type SongListProps = {
  songs: [];
  classes?: any;
};

// const SongList = (props: SongListProps) => ({});
export class SongList extends Component<SongListProps, any> {
  state = {
    songs: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const baseUrl = 'https://api.spotify.com/v1/';
    const endpoint = 'playlists/2rzlpITcsU9AVaLlOhMO6z/tracks';
    const accessToken =
      'BQA4VHqiVLuMcJ84tUOZJbCXwbLqhDYBL9Go-E5XKn48CvQa9Pw2rR3eK-nBkNNmgkV2sFKFOGUKp_bkYTEtDdJMVhkB_LkP1wHPjkj9qWvJMkrRfAbr7XoUMCAuwrLzM_zMSkzfYqjNURMaFW8APqbB7b9zXegwVNyOzaQeMcTjJ5fpau7F';

    const fetchUrl = baseUrl + endpoint;
    const requestSetup = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      mode: 'cors',
      cache: 'default',
    };

    //@ts-ignore
    fetch(fetchUrl, requestSetup)
      .then((response: any) => response.json())
      .then((data: any) => {
        const songs = data.items.map(({ track }: any) => ({ ...track }));
        this.setState({ songs });
      })
      .catch((error: any) => console.log(error));
  };

  renderSongs = (songs: any) => {
    return songs.map((song: any, index: number) => <SongItemComponent key={index} song={song} />);
  };

  render() {
    const { songs } = this.state;
    const { classes } = this.props;

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
          <tbody>{this.renderSongs(songs)}</tbody>
        </table>
      </div>
    );
  }
}

export const SongListComponent = injectSheet(songListStyles)(SongList);
