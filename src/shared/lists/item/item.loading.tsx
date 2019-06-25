import React from 'react';

import Skeleton from 'react-skeleton-loader';

import './item.styles.css';

export interface ItemLoadingInterface {
  isRounded: boolean;
}

export const ItemLoadingComponent = ({ isRounded }: ItemLoadingInterface) => (
  <div className="item--loading">
    <Skeleton
      width={'200px'}
      height={'200px'}
      borderRadius={isRounded ? '50%' : '0px'}
      widthRandomness={0}
    />
    <Skeleton width={'180px'} height={'25px'} borderRadius={'0'} widthRandomness={0} />
  </div>
);

ItemLoadingComponent.defaultProps = {
  isRounded: false,
};
