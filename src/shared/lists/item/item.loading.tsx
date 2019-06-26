import React from 'react';

import Skeleton from 'react-skeleton-loader';

import './item.styles.css';

export interface ItemLoadingInterface {
  isRound: boolean;
}

export const ItemLoadingComponent = ({ isRound }: ItemLoadingInterface) => (
  <div className="item--loading">
    <Skeleton
      width={'200px'}
      height={'200px'}
      borderRadius={isRound ? '50%' : '0px'}
      widthRandomness={0}
    />
    <Skeleton width={'180px'} height={'25px'} borderRadius={'0'} widthRandomness={0} />
  </div>
);

ItemLoadingComponent.defaultProps = {
  isRound: false,
};
