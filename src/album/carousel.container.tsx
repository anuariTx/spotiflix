import React from 'react';

import { AlbumsStateInterface } from './albums.reducer';

import { connect } from 'react-redux';
import { makeAlbumsSelector } from './albums.selectors';

import BrainhubCarousel from '@brainhubeu/react-carousel';
import { ErrorBoundaryHOC } from '@error/error-boundary.hoc';
import { AlbumContainer } from './album.container';
import { ItemErrorComponent } from '@list-item/item.error';

import '@brainhubeu/react-carousel/lib/style.css';
import './carousel.styles.css';
import { createSelector } from 'reselect';

export interface CarouselContainerPropsInterface {
  ids: string[];
  areRound: boolean;
  albums: AlbumsStateInterface;
}

export const Carousel = ({ ids, areRound, albums }: CarouselContainerPropsInterface) => {
  const renderAlbums = ids.map(id => {
    return (
      <ErrorBoundaryHOC fallback={<ItemErrorComponent />} key={id}>
        <AlbumContainer
          id={id}
          containerName={`ALBUM_${id}`}
          fallback={<ItemErrorComponent />}
          isRound={areRound}
          {...albums[id]}
        />
      </ErrorBoundaryHOC>
    );
  });

  return (
    <div className="album-carousel">
      <BrainhubCarousel
        slidesPerScroll={2}
        slidesPerPage={7}
        arrowLeft={<i className="fas fa-chevron-left" />}
        arrowRight={<i className="fas fa-chevron-right" />}
        addArrowClickHandler
        breakpoints={{
          1750: {
            slidesPerPage: 6,
          },
          1500: {
            slidesPerPage: 5,
          },
          1250: {
            slidesPerPage: 4,
          },
          1000: {
            slidesPerPage: 3,
          },
          750: {
            slidesPerPage: 2,
          },
          500: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
          },
        }}
      >
        {renderAlbums}
      </BrainhubCarousel>
    </div>
  );
};

const makeMapStateToProps = () => {
  const albumsSelector = makeAlbumsSelector();
  return createSelector(
    albumsSelector,
    (albums: AlbumsStateInterface) => ({ albums }),
  );
};

export const CarouselContainer = connect(makeMapStateToProps)(Carousel);
