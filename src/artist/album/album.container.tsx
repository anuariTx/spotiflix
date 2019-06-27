import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { SongListContainer } from '../../song/list.container';

import injectSheet, { Theming } from 'react-jss';
import { fetchSongListAction } from '@song/song.action';

interface ArtistAlbumProps {
  artist: any;
  fetchSongsAction: Function;
  cancelSongsAction: Function;
  classes?: any;
}

const artistAlbumStyles = (theme: Theming) => ({});

export const ArtistAlbum = ({
  artist,
  fetchSongsAction,
  cancelSongsAction,
  classes,
}: ArtistAlbumProps) => {
  useEffect(() => {
    fetchSongsAction(`artists/${artist.id}/top-tracks?country=MX`);

    return () => {
      cancelSongsAction('');
    };
  }, [artist, cancelSongsAction, fetchSongsAction]);

  return <SongListContainer hasHeadings={false} />;
};

const mapDispatchToProps = {
  fetchSongsAction: fetchSongListAction.request,
  cancelSongsAction: fetchSongListAction.fulfill,
};

export const ArtistAlbumStyled = injectSheet(artistAlbumStyles)(ArtistAlbum);
export const ArtistAlbumContainer = connect(
  null,
  mapDispatchToProps,
)(ArtistAlbumStyled);
