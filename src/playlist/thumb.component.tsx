import React from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';
import Skeleton from 'react-skeleton-loader';
import LazyLoad from 'react-lazyload';
interface ThumbComponentProps {
  imgSrc: string;
  classes?: any;
}

const playlistThumbStyles = (theme: ThemeProvider) => ({
  thumb: {
    height: '200px',
    width: '200px',
  },
  thumb__image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});

const PlaylistThumb = ({ imgSrc, classes }: ThumbComponentProps) => (
  <LazyLoad>
    <div className={classes.thumb}>
      <img className={classes.thumb__image} src={imgSrc} alt="He vuelto" />
    </div>
  </LazyLoad>
);

export const PlaylistThumbUnloadedComponent = (props: any) => (
  <Skeleton width="175px" height="150px" color="#303952" borderRadius="50%" />
);

export const PlaylistThumbComponent = injectSheet(playlistThumbStyles)(PlaylistThumb);
