import { AxiosService } from './../services/axios/axios.service';
import { fetchSongListAction } from './song.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let songsService: any;

function* fetchSongListService() {
  const accessToken =
    'BQCgUXX-9LEw_0uisXQfX2bt2-RZGE8NJdfZlRBGxDSE6_rKJB6lzXgexWKGODBdegiETMnNGGrqvAaovpKFirDKbPDbRVRep4O-2lK89io7bKV8arqaGEW9KbmwfH5vqHfBPGXYodVGjlQSz1LNQ0Z6I8GXXFEttQzzvjZxGKRQPTiKBuyA';
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
