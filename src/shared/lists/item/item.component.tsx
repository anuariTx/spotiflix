import React from 'react';

import LazyLoad from 'react-lazyload';

import injectSheet from 'react-jss';

import './item.styles.css';

interface ItemPropsInterface {
  title: string;
  subtitle?: string;
  imageURL: string;
  isRounded: boolean;
  classes: { item: string };
}

const styles = (theme: any) => ({
  item: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const Item = ({ title, subtitle, imageURL, isRounded, classes }: ItemPropsInterface) => (
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
