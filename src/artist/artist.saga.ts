import { AxiosService } from './../services/axios/axios.service';
import { fetchArtistAction } from './artist.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let artistService: any;

function* fetchArtistService() {
  const accessToken = 'BQA7etfQ07IjcCK1zVuF6j-BrFy_gY49JmWCFh4WY8w5czim9H4ZlYjVCxYaoe2J8HzAPXZp7PooCib790BBUv-wkGWP3lvciqIKvBX2H2zeb7MTd2h33iQF_nqIHMjabutPDf5mILGb9_-ZF6jpAAcxihYJZL2e-VNcdRK9bWZswzAa0U4Y';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const artistId = '2qk9voo8llSGYcZ6xrBzKx';

  artistService = new AxiosService('https://api.spotify.com/v1/');
  const { data }: any = yield artistService.get({
    endpoint: `artists/${artistId}`,
    headers,
  });

  return data;
}

function* cancelFetchService(params: any) {
  yield artistService.cancelRequest(params.payload);
}

function* fetchArtistRequest() {
  try {
    const data = yield call(fetchArtistService);

    yield put(fetchArtistAction.success({ artists: data }));
  } catch (error) {
    if (!error.wasCancelled) {
      yield put(fetchArtistAction.failure({ error }));
    }
  }
}

export function* fetchArtistSaga() {
  yield takeLatest(fetchArtistAction.REQUEST, fetchArtistRequest);
  yield takeLatest(fetchArtistAction.FULFILL, cancelFetchService);
}
