import { takeEvery, put, call } from 'redux-saga/effects';

import { AlbumInterface } from '@album/album.interface';
import { SubtitleLinkInterface } from '@interfaces/subtitle-link.interface';

import { fetchAlbumAction } from '@album/album.action';
import { setErrorAction } from '@error/error.action';

import { AxiosService } from '@services/axios/axios.service';

let albumService: AxiosService;

function* fetchService(id: string) {
  const accessToken =
    'BQBAf5MRfWS4uuyvnZoz_QyPZ2tZQ7h-C33mHFgYjTRyH3Zub25GYtlk-YSNs_w_RIz2jwL8afncj1T6e_Nh8sYwDZlRbhAol6JXktcGE3ozrh-mUjuGSM0XmwkCZcPM109vzp7vXfW35c1Ukbu5wqyjVw';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  albumService = new AxiosService('https://api.spotify.com/v1/');
  const { data }: any = yield albumService.get({ endpoint: `albums/${id}/`, headers });

  return data;
}

function* cancelService(params: any) {
  yield albumService.cancelRequest(params.payload.msg);
}

function* fetchAlbumRequest(params: any) {
  const { id, containerName } = params.payload;

  try {
    const data = yield call(fetchService, id);

    const payload: AlbumInterface = {
      id,
      title: data.name,
      image: data.images[1].url,
      artists: data.artists.map(
        (artist: any): SubtitleLinkInterface => ({ id: artist.id, name: artist.name }),
      ),
      releaseDate: data.release_date,
      trackIDs: data.tracks.items.map((track: any) => track.id),
    };

    yield put(
      fetchAlbumAction.success({
        ...payload,
      }),
    );
  } catch (error) {
    if (!error.wasCancelled) {
      const errorPayload = {
        id: id,
        error: { title: `Error when fetching album: ${id}`, message: 'Oops' },
      };

      yield put(fetchAlbumAction.failure(errorPayload));

      yield put(
        setErrorAction.trigger({
          containerName,
          ...errorPayload.error,
        }),
      );
    }
  }
}

export function* fetchAlbumSaga() {
  yield takeEvery(fetchAlbumAction.REQUEST, fetchAlbumRequest);
  yield takeEvery(fetchAlbumAction.FULFILL, cancelService);
}
