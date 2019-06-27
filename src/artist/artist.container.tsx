import React, { useEffect, Suspense, lazy, Fragment } from 'react';

import { AppStateInterface } from '@shared/rdx/root.reducer';

import { connect } from 'react-redux';
import { fetchArtistAction } from './artist.action';
import { fetchSongListAction } from '@song/song.action';

import { ArtistHeaderUnloadedComponent } from './header/header.component';
import { SongListUnloadedComponent } from '../song/list.container';

import injectSheet from 'react-jss';

interface ArtistProps {
  artist: any;
  fetchArtistAction: Function;
  cancelArtistFetchAction: Function;
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

const ArtistHeaderComponent = lazy(() => import('./header/header.lazy'));
const ArtistAlbumContainer = lazy(() => import('./album/album.lazy'));

const Artist = ({ artist, fetchArtistAction, cancelArtistFetchAction, classes }: ArtistProps) => {
  useEffect(() => {
    fetchArtistAction();
    return () => {
      cancelArtistFetchAction('Artist Fetch Cancelled');
    };
  }, [cancelArtistFetchAction, , fetchArtistAction]);

  return (
    <div className={classes.artist}>
      <Suspense fallback={<ArtistHeaderUnloadedComponent />}>
        {artist[0] && <ArtistHeaderComponent artist={artist[0]} />}
      </Suspense>
      <div className={classes.artist__overview}>
        <Suspense fallback={<SongListUnloadedComponent />}>
          {artist[0] && (
            <Fragment>
              <h2>Popular songs</h2>
              <ArtistAlbumContainer artist={artist[0]} />
            </Fragment>
          )}
        </Suspense>
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

const mapStateToProps = (state: AppStateInterface) => ({
  artist: state.artists.items,
});

const mapDispatchToProps = {
  fetchArtistAction: fetchArtistAction.request,
  fetchSongListAction: fetchSongListAction.request,
  cancelArtistFetchAction: fetchArtistAction.fulfill,
  cancelSongsFetchAction: fetchSongListAction.fulfill,
};

export const ArtistStyled = injectSheet(artistStyles)(Artist);
export const ArtistUnloadedContainer = injectSheet(artistStyles)(ArtistUnloaded);
export const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistStyled);
