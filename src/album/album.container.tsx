import React, { useEffect, Suspense, lazy } from 'react';

import { AlbumItemInterface } from './albums.reducer';

import { connect } from 'react-redux';
import { clearErrorAction } from '@error/error.action';
import { fetchAlbumAction } from './album.action';

import { ItemLoadingComponent } from '@lists/item/item.loading';

const ItemComponent = lazy(() => import('@lists/item/item.lazy'));

interface AlbumContainerPropsInterface extends AlbumItemInterface {
  id: string;
  containerName: string;
  isRound: boolean;
  clearErrorAction: Function;
  fetchAction: Function;
  cancelAction: Function;
}

const Album = ({
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

    return () => cancelAction(`Canceled fetch item: ${id}`);
  }, [id, containerName, clearErrorAction, fetchAction, cancelAction]);

  useEffect(() => {
    if (!isLoadingData && hasError && !isUnmounted) {
      throw new Error(`Error when fetching item: ${id}`);
    }
  }, [id, isLoadingData, hasError, isUnmounted]);

  return (
    <Suspense fallback={<ItemLoadingComponent isRound={isRound} />}>
      <ItemComponent
        title={data.title}
        subtitle={data.artists}
        imageURL={data.image}
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
