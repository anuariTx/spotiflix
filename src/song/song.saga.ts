import { AxiosService } from './../services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService() {
  const accessToken =
    'BQDCjqAaCmBhaR9jDr_MiTc8U_xGITzt0b33NNHJ8-Nzen2e0OjhNXjQJP1-U-jXJe2Jo07W0qW2EJvzTdfk0dRI3JyOWLnR29_Q2L67XmRkfMTOJFvjiZEokw9fLhr6MW4laZEb_w2uamDdCZnqlMKSJiQh5TOYiyId2mD-Mj2Kxag88aRc';
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

function* fetchSongListRequest() {
  try {
    const data = yield call(fetchSongListService);
    const songs = data.map(({ track }: any) => ({ ...track }));

    yield put(fetchSongListAction.success({ songs }));
  } catch (error) {
    yield put(fetchSongListAction.failure({ error }));
  }
}

export function* fetchSongListSaga() {
  yield takeLatest(fetchSongListAction.REQUEST, fetchSongListRequest);
}
