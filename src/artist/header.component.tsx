import React from 'react';

import { PlaylistThumbComponent } from '@playlist/thumb.component';

import injectSheet, { ThemeProvider } from 'react-jss';
import { ButtonPlayComponent } from '@shared/controls/button/play.component';

interface ArtistHeaderProps {
  classes?: any;
}

const artistHeaderStyles = (theme: ThemeProvider) => ({
  artist__category: {
    color: 'rgba(255,255,255,0.6)',
    transform: 'translateY(-40px)',
  },
  artist__headings: {
    display: 'flex',
  },
  artist__info: {
    margin: 'auto',
  },
  artist__title: {
    fontSize: 40,
  },
  artist__badge: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.6)',
  },
  'artist__btn-play': {
    marginTop: 30,
  },
});

const ArtistHeader = ({ classes }: ArtistHeaderProps) => (
  <div>
    <div className={classes.artist__headings}>
      <div>
        <h5 className={classes.artist__category}>ARTIST</h5>
        <PlaylistThumbComponent />
      </div>
      <div className={classes.artist__info}>
        <h1 className={classes.artist__title}>Jaximus The Forbidden One</h1>
        <h3 className={classes.artist__badge}>Top Rated Artists</h3>
        <div className={classes['artist__btn-play']}>
          <ButtonPlayComponent label="PLAY" />
        </div>
      </div>
    </div>
  </div>
);

export const ArtistHeaderComponent = injectSheet(artistHeaderStyles)(ArtistHeader);
