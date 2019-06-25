import { AxiosService } from './../services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService() {
  const accessToken =
    'BQAAYfAFNWHU1tO-X6jWnIBCZDjzpdAa78-e9CsF51PxDCyA4BxOk6JgxI4YR9xWORPMKb45BpnGREHv-lHICFoINGotpldQjGsndf9pTnktxYyhlCBupxnOw5Bqn98mlUlFZcch1ORlDBGsf-SdGMrx1Rtxqh8_W1b0_9HzvjfA-747cYJG';
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
