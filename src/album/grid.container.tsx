import React from 'react';

import { AlbumsStateInterface } from './albums.reducer';

import { connect } from 'react-redux';
import { createSelector, OutputSelector } from 'reselect';
import { makeAlbumsSelector } from './albums.selectors';

import { ErrorBoundaryHOC } from '@error/error-boundary.hoc';
import { AlbumContainer } from './album.container';
import { ItemErrorComponent } from '@list-item/item.error';

import './grid.styles.css';
import { AppStateInterface } from '@rdx/root.reducer';

export interface GridContainerPropsInterface {
  ids: string[];
  areRound: boolean;
  albums: AlbumsStateInterface;
}

export const Grid = ({ ids, areRound, albums }: GridContainerPropsInterface): JSX.Element => {
  const renderAlbums: JSX.Element[] = ids.map(
    (id: string): JSX.Element => (
      <ErrorBoundaryHOC fallback={<ItemErrorComponent />} key={id}>
        <AlbumContainer
          id={id}
          containerName={`ALBUM_${id}`}
          fallback={<ItemErrorComponent />}
          isRound={areRound}
          {...albums[id]}
        />
      </ErrorBoundaryHOC>
    ),
  );

  return <div className="album-grid">{renderAlbums}</div>;
};

const makeMapStateToProps = () => {
  const albumsSelector: OutputSelector<
    AppStateInterface,
    AlbumsStateInterface,
    (res: AlbumsStateInterface) => AlbumsStateInterface
  > = makeAlbumsSelector();

  return createSelector(
    albumsSelector,
    (albums: AlbumsStateInterface) => ({ albums }),
  );
};

export const GridContainer = connect(makeMapStateToProps)(Grid);
