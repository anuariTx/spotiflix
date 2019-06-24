import React from 'react';

import Skeleton from 'react-skeleton-loader';

import './grid-item.styles.css';

export interface GridItemLoadingInterface {
  isRounded: boolean;
}

export const GridItemLoadingComponent = ({ isRounded }: GridItemLoadingInterface) => (
  <div className="grid-item--loading">
    <Skeleton
      width={'200px'}
      height={'200px'}
      borderRadius={isRounded ? '50%' : '0px'}
      widthRandomness={0}
    />
    <Skeleton width={'180px'} height={'25px'} borderRadius={'0'} widthRandomness={0} />
  </div>
);

GridItemLoadingComponent.defaultProps = {
  isRounded: false,
};
