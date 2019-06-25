import { takeEvery, put, call } from 'redux-saga/effects';

import { AlbumArtistInterface, AlbumInterface } from '@album/album.interface';

import { fetchAlbumAction } from '@album/album.action';
import { setErrorAction } from '@error/error.action';

import { AxiosService } from '@services/axios/axios.service';

let albumService: AxiosService;

function* fetchService(id: string) {
  const accessToken =
    'BQDYPux_ni4mxqdmJrdvk1HYJad2gqdpsNjs7HHmyMQZ4-NInMkR7Gs7PqCRTTNjjignNLzQqY5U-ELb55DB_MJ355qfnhUpRMQ4rSM2rMoM7CHCK2ZMKMSEFH_A-5DDctXuQjA9RlSDZeJIAc5OZFM-gRAECZFMti3x4ribzlnjQzg7w492';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  albumService = new AxiosService('https://api.spotify.com/v1/');
  const { data }: any = yield albumService.get({ endpoint: `albums/${id}/`, headers });

  return data;
}

function* cancelService(params: any) {
  yield albumService.cancelRequest(params.payload);
}

function* fetchAlbumRequest(params: any) {
  const { albumId, containerName } = params.payload;

  try {
    const data = yield call(fetchService, albumId);

    const payload: AlbumInterface = {
      id: albumId,
      title: data.name,
      image: data.images[1].url,
      artists: data.artists.map(
        (artist: any): AlbumArtistInterface => ({ id: artist.id, name: artist.name }),
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
        id: albumId,
        error: { title: `Error when fetching album: ${albumId}`, message: 'Oops' },
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
