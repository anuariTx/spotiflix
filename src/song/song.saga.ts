import { AxiosService } from './../services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService() {
  const accessToken =
    'BQDYPux_ni4mxqdmJrdvk1HYJad2gqdpsNjs7HHmyMQZ4-NInMkR7Gs7PqCRTTNjjignNLzQqY5U-ELb55DB_MJ355qfnhUpRMQ4rSM2rMoM7CHCK2ZMKMSEFH_A-5DDctXuQjA9RlSDZeJIAc5OZFM-gRAECZFMti3x4ribzlnjQzg7w492';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  songsService = new AxiosService('https://api.spotify.com/v1/');
  const { data }: any = yield songsService.get({
    endpoint: 'playlists/2rzlpITcsU9AVaLlOhMO6z/tracks',
    headers,
  });

  return data.items;
}

function* cancelFetchService(params: any) {
  yield songsService.cancelRequest(params.payload);
}

function* fetchSongListRequest() {
  try {
    const data = yield call(fetchSongListService);
    const songs = data.map(({ track }: any) => ({ ...track }));

    yield put(fetchSongListAction.success({ songs }));
  } catch (error) {
    console.log(error);
    if (!error.wasCancelled) {
      yield put(fetchSongListAction.failure({ error }));
    }
  }
}

export function* fetchSongListSaga() {
  yield takeLatest(fetchSongListAction.REQUEST, fetchSongListRequest);
  yield takeLatest(fetchSongListAction.FULFILL, cancelFetchService);
}
