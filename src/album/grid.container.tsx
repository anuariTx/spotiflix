import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { AlbumsStateInterface } from '@album/albums.reducer';

import { connect } from 'react-redux';

import { ErrorBoundaryHOC } from '@error/error-boundary.hoc';
import { AlbumContainer } from '@album/album.container';
import { ItemErrorComponent } from '@list-item/item.error';

import './grid.styles.css';

export interface GridContainerPropsInterface {
  ids: string[];
  areRound: boolean;
  albums: AlbumsStateInterface;
}

export const Grid = ({ ids, areRound, albums }: GridContainerPropsInterface) => {
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

  return <div className="album-grid">{renderAlbums}</div>;
};

const mapStateToProps = (state: AppStateInterface) => ({
  albums: state.albums,
});

export const GridContainer = connect(mapStateToProps)(Grid);
