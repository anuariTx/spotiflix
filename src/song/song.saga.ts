import { AxiosService } from './../services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService() {
  const accessToken =
    'BQBBvH2b3iHeMEvHIlIuCvEJYoeFtet5DgcIzthhSq_WTqab0sgrmDDSRDizXLpbhdiEtPRyiLeBJCKFu2ohKZB2X4mK_DuH62NwOn8EGgnoC87kMAfxTmvdgY1HS5zIcXm-zS7JbXfZdnq3ZTot6-y5ebORzU2u3quug5jSNfxxvwCjS1wm';
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
