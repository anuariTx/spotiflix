import React from 'react';

import { ItemInterface } from './item.interface';

import LazyLoad from 'react-lazyload';

import injectSheet from 'react-jss';

import './item.styles.css';

const styles = (theme: any) => ({
  item: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const Item = ({ title, subtitle, imageURL, isRounded, classes }: ItemInterface) => (
  <LazyLoad>
    <div className={`item ${classes.item}`}>
      <img
        className={`item__image ${isRounded && 'item__image--rounded'}`}
        src={imageURL}
        alt={title}
      />
      <div className="item__title">{title}</div>
      {subtitle && <div className="item__subtitle">{subtitle}</div>}
    </div>
  </LazyLoad>
);

Item.defaultProps = {
  subtitle: '',
  imageURL: 'https://via.placeholder.com/200',
  isRounded: false,
};

export const ItemComponent = injectSheet(styles)(Item);
