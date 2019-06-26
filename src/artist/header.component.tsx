import React from 'react';

import {
  PlaylistThumbComponent,
  PlaylistThumbUnloadedComponent,
} from '../playlist/thumb.component';
import { ButtonPlayComponent } from '../shared/controls/button/play.component';

import injectSheet from 'react-jss';
import classNames from 'classnames';
import Skeleton from 'react-skeleton-loader';
import LazyLoad from 'react-lazyload';

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
  'artist__info--unloaded': {
    margin: 'auto 0',
    marginLeft: 120,
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

const ArtistHeaderUnloaded = ({ classes }: any) => (
  <LazyLoad>
    <div className={classes.artist__header}>
      <div className={classes.artist__headings}>
        <div>
          <h5 className={classes.artist__category}>
            <Skeleton color="#303952" height="25px" borderRadius="3px" />
          </h5>
          <PlaylistThumbUnloadedComponent />
        </div>
        <div className={classes['artist__info--unloaded']}>
          <Skeleton color="#303952" borderRadius="3px" width="550px" height="50px" />
          <h3 className={classes.artist__badge}>
            <Skeleton color="#303952" borderRadius="3px" width="330px" height="40px" />
          </h3>
          <div className={classes['artist__btn-play']}>
            <Skeleton color="#303952" borderRadius="3px" width="150px" height="30px" />
          </div>
        </div>
      </div>
    </div>
  </LazyLoad>
);

export const ArtistHeaderUnloadedComponent = injectSheet(artistHeaderStyles)(ArtistHeaderUnloaded);
export const ArtistHeaderComponent = injectSheet(artistHeaderStyles)(ArtistHeader);
