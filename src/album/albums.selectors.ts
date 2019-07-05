import { AppStateInterface } from '@rdx/root.reducer';
import { AlbumsStateInterface } from '@album/albums.reducer';

import { createSelector, OutputSelector } from 'reselect';

const getAlbums = (state: AppStateInterface): AlbumsStateInterface => state.albums;

export const makeAlbumsSelector = (): OutputSelector<
  AppStateInterface,
  AlbumsStateInterface,
  (res: AlbumsStateInterface) => AlbumsStateInterface
> =>
  createSelector<AppStateInterface, AlbumsStateInterface, AlbumsStateInterface>(
    getAlbums,
    (albums: AlbumsStateInterface) => albums,
  );
