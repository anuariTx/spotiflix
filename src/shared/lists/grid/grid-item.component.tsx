import React from 'react';

import LazyLoad from 'react-lazyload';

import './grid-item.styles.css';

export interface GridItemInterface {
  title: string;
  subtitle?: string;
  imageURL: string;
  isRounded: boolean;
}

export const GridItemComponent = ({ title, subtitle, imageURL, isRounded }: GridItemInterface) => (
  <LazyLoad>
    <div className="grid-item">
      <img
        className={`grid-item__image ${isRounded && 'grid-item__image--rounded'}`}
        src={imageURL}
        alt={title}
      />
      <div className="grid-item__title">{title}</div>
      <div className="grid-item__subtitle">{subtitle}</div>
    </div>
  </LazyLoad>
);

GridItemComponent.defaultProps = {
  subtitle: '',
  imageURL: 'https://via.placeholder.com/200',
  isRounded: false,
};
