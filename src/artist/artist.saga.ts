import { AxiosService } from './../services/axios/axios.service';
import { fetchArtistAction } from './artist.action';

import { takeLatest, put, call } from 'redux-saga/effects';

let artistService: any;

function* fetchArtistService() {
  const accessToken =
    'BQBpkETBHOXzZV8cJIQT_L3hxozqi4BoaeEPEhG46AMUODIS1J7PZtHDG_RY6H0A5Hf5IE_Z-CfqFBZxH2gWnCNC7_OgK-SZjJjHgdjJ8S9V08GmzBLzWIefhjZBalT33RLkQQkHD4FFrJCzRpLHkrD5o7n8lJM-7re732Q_KL_vJ-d_WvUR';
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
