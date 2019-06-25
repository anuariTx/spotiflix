import React from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';

interface ThumbComponentProps {
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

const PlaylistThumb = ({ classes }: ThumbComponentProps) => (
  <div className={classes.thumb}>
    <img
      className={classes.thumb__image}
      src="https://www.mobafire.com/images/avatars/jax-classic.png"
      alt="He vuelto"
    />
  </div>
);

export const PlaylistThumbComponent = injectSheet(playlistThumbStyles)(PlaylistThumb);
