import { AxiosService } from '@services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService(endpoint: string) {
  const accessToken =
    'BQBpkETBHOXzZV8cJIQT_L3hxozqi4BoaeEPEhG46AMUODIS1J7PZtHDG_RY6H0A5Hf5IE_Z-CfqFBZxH2gWnCNC7_OgK-SZjJjHgdjJ8S9V08GmzBLzWIefhjZBalT33RLkQQkHD4FFrJCzRpLHkrD5o7n8lJM-7re732Q_KL_vJ-d_WvUR';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  songsService = new AxiosService('https://api.spotify.com/v1/');
  const { data }: any = yield songsService.get({ endpoint, headers });

  return data.tracks;
}

function* cancelFetchService(params: any) {
  yield songsService.cancelRequest(params.payload);
}

function* fetchSongListRequest(params: any) {
  try {
    const data = yield call(fetchSongListService, params.payload);

    yield put(fetchSongListAction.success({ songs: data }));
  } catch (error) {
    if (!error.wasCancelled) {
      yield put(fetchSongListAction.failure({ error }));
    }
  }
}

export function* fetchSongListSaga() {
  yield takeLatest(fetchSongListAction.REQUEST, fetchSongListRequest);
  yield takeLatest(fetchSongListAction.FULFILL, cancelFetchService);
}
