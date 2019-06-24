import React from 'react';

import LazyLoad from 'react-lazyload';

import injectSheet from 'react-jss';

import './grid-item.styles.css';

export interface GridItemInterface {
  title: string;
  subtitle?: string;
  imageURL: string;
  isRounded: boolean;
  classes: { gridItem: string };
}

const styles = (theme: any) => ({
  gridItem: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const GridItem = ({ title, subtitle, imageURL, isRounded, classes }: GridItemInterface) => (
  <LazyLoad>
    <div className={`grid-item ${classes.gridItem}`}>
      <img
        className={`grid-item__image ${isRounded && 'grid-item__image--rounded'}`}
        src={imageURL}
        alt={title}
      />
      <div className="grid-item__title">{title}</div>
      {subtitle && <div className="grid-item__subtitle">{subtitle}</div>}
    </div>
  </LazyLoad>
);

GridItem.defaultProps = {
  subtitle: '',
  imageURL: 'https://via.placeholder.com/200',
  isRounded: false,
};

export const GridItemComponent = injectSheet(styles)(GridItem);
