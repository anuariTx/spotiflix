import { AxiosService } from '@services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService(endpoint: string) {
  const accessToken =
    'BQA7etfQ07IjcCK1zVuF6j-BrFy_gY49JmWCFh4WY8w5czim9H4ZlYjVCxYaoe2J8HzAPXZp7PooCib790BBUv-wkGWP3lvciqIKvBX2H2zeb7MTd2h33iQF_nqIHMjabutPDf5mILGb9_-ZF6jpAAcxihYJZL2e-VNcdRK9bWZswzAa0U4Y';
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
