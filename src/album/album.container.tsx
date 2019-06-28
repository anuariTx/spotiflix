import React, { useEffect, Suspense, lazy } from 'react';

import { AlbumItemInterface } from './albums.reducer';
import { AlbumInterface } from '@album/album.interface';

import { connect } from 'react-redux';
import { clearErrorAction } from '@error/error.action';
import { fetchAlbumAction } from './album.action';

import { ItemLoadingComponent } from '@lists/item/item.loading';

const ItemComponent = lazy(() => import('@lists/item/item.lazy'));

export interface AlbumContainerPropsInterface extends AlbumItemInterface {
  id: string;
  containerName: string;
  isRound: boolean;
  clearErrorAction: Function;
  fetchAction: Function;
  cancelAction: Function;
}

export const Album = ({
  id,
  containerName,
  isRound,
  data,
  isLoadingData,
  hasError,
  isUnmounted,
  clearErrorAction,
  fetchAction,
  cancelAction,
}: AlbumContainerPropsInterface) => {
  useEffect(() => {
    clearErrorAction(containerName);
    fetchAction({ id, containerName });

    return () => cancelAction({ id: id, msg: `Canceled fetch item: ${id}` });
  }, [id, containerName, clearErrorAction, fetchAction, cancelAction]);

  useEffect(() => {
    if (!isLoadingData && hasError && !isUnmounted) {
      throw new Error(`Error when fetching item: ${id}`);
    }
  }, [id, isLoadingData, hasError, isUnmounted]);

  const { title, artists, image }: AlbumInterface = data || {};

  return (
    <Suspense fallback={<ItemLoadingComponent isRound={isRound} />}>
      <ItemComponent
        title={title}
        subtitle={artists}
        imageURL={image}
        isRound={isRound}
      />
    </Suspense>
  );
};

const mapDispatchToProps = {
  clearErrorAction: clearErrorAction.trigger,
  fetchAction: fetchAlbumAction.request,
  cancelAction: fetchAlbumAction.fulfill,
};

export const AlbumContainer = connect(
  null,
  mapDispatchToProps,
)(Album);
