import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { SongListContainer } from '../song/list.container';

import injectSheet, { ThemeProvider } from 'react-jss';

interface ArtistAlbumProps {
  classes?: any;
}

const artistAlbumStyles = (theme: ThemeProvider) => ({});

const ArtistAlbum = ({ classes }: ArtistAlbumProps) => {
  return <SongListContainer hasHeadings={false} />;
};

export const ArtistAlbumStyled = injectSheet(artistAlbumStyles)(ArtistAlbum);

export const ArtistAlbumContainer = connect(
  null,
  null,
)(ArtistAlbumStyled);
