import React from 'react';

import { PlaylistThumbComponent } from '../playlist/thumb.component';
import { ButtonPlayComponent } from '../shared/controls/button/play.component';

import injectSheet from 'react-jss';
import classNames from 'classnames';

interface ArtistHeaderProps {
  classes?: any;
}

const artistHeaderStyles = (theme: any) => ({
  artist__category: {
    color: 'rgba(255,255,255,0.6)',
    transform: 'translateY(-40px)',
  },
  artist__headings: theme.container,
  artist__header: {
    background: '#1c1c1c',
    padding: '100px 0 50px',
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
  <div className={classes.artist__header}>
    <div className={classes.artist__headings}>
      <div>
        <h5 className={classes.artist__category}>ARTIST</h5>
        <PlaylistThumbComponent />
      </div>
      <div className={classes.artist__info}>
        <h1 className={classes.artist__title}>Jaximus The Forbidden One</h1>
        <h3 className={classes.artist__badge}>Top Rated Artists</h3>
        <div className={classes['artist__btn-play']}>
          <ButtonPlayComponent
            label="PLAY"
            renderIcon={<i className={classNames('fas fa-play', classes.btn__icon)} />}
          />
        </div>
      </div>
    </div>
  </div>
);

export const ArtistHeaderComponent = injectSheet(artistHeaderStyles)(ArtistHeader);
