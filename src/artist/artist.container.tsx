import React from 'react';

import { connect } from 'react-redux';

import { ArtistHeaderComponent, ArtistHeaderUnloadedComponent } from './header.component';
import { ArtistAlbumContainer } from '../album/artist-album.container';
import { SongListUnloadedComponent } from '../song/list.container';

import injectSheet from 'react-jss';
import Skeleton from 'react-skeleton-loader';

interface ArtistProps {
  classes?: any;
}

const artistStyles = (theme: any) => ({
  artist: {
    background: '#1c1c1c',
  },
  artist__overview: {
    ...theme.container,
    flexWrap: 'wrap',
    color: '#fff',
    paddingBottom: 60,
    '& h2': {
      color: '#fff',
      margin: 30,
    },
  },
});

const Artist = ({ classes }: ArtistProps) => {
  return (
    <div className={classes.artist}>
      <ArtistHeaderComponent />
      <div className={classes.artist__overview}>
        <h2>Popular songs</h2>
        <ArtistAlbumContainer />
      </div>
    </div>
  );
};

const ArtistUnloaded = ({ classes }: any) => {
  return (
    <div className={classes.artist}>
      <ArtistHeaderUnloadedComponent />
      <div className={classes.artist__overview}>
        <SongListUnloadedComponent />
      </div>
    </div>
  );
};

export const ArtistStyled = injectSheet(artistStyles)(Artist);
export const ArtistUnloadedContainer = injectSheet(artistStyles)(ArtistUnloaded);
export const ArtistContainer = connect(
  null,
  null,
)(ArtistStyled);
