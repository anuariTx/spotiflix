import React from 'react';

import { connect } from 'react-redux';

import { ArtistHeaderComponent } from './header.component';

import injectSheet, { ThemeProvider } from 'react-jss';
import { ArtistAlbumContainer } from '@album/artist-album.container';

interface ArtistProps {
  classes?: any;
}

const artistStyles = (theme: ThemeProvider) => ({
  artist: {
    background: '#1c1c1c',
  },
  artist__container: {
    width: '85%',
    margin: 'auto',
    padding: '100px 0',
    color: '#fff',
  },
  artist__overview: {
    padding: '40px 0',
    '& h2': {
      margin: 30,
    },
  },
});

const Artist = ({ classes }: ArtistProps) => {
  return (
    <div className={classes.artist}>
      <div className={classes.artist__container}>
        <ArtistHeaderComponent />
        <div className={classes.artist__overview}>
          <h2>Popular songs</h2>
          <ArtistAlbumContainer />
        </div>
      </div>
    </div>
  );
};

export const ArtistStyled = injectSheet(artistStyles)(Artist);
export const ArtistContainer = connect(
  null,
  null,
)(ArtistStyled);
