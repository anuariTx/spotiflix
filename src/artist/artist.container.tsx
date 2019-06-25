import React from 'react';

import { connect } from 'react-redux';

import { ArtistHeaderComponent } from './header.component';

import injectSheet from 'react-jss';
import { ArtistAlbumContainer } from '../album/artist-album.container';

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

export const ArtistStyled = injectSheet(artistStyles)(Artist);
export const ArtistContainer = connect(
  null,
  null,
)(ArtistStyled);
