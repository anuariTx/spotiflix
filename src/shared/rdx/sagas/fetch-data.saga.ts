import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '@rdx/actions/fetch-data.action';

import { FetchData } from '@rdx/reducers/fetch-data.reducer';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fakeRequest = async () => {
  await timeout(1500);
  const luck = Math.floor(Math.random() * 10) >= 4;
  if (!luck) {
    throw new Error('Error on fake request');
  }

  const payload: FetchData = {
    containerName: 'SectionSampleContainer',
    data: 'HELLO! Fake request completed',
    hasLoadedData: true,
  };
  return payload;
};

export function* fetchDataService() {
  return yield call(fakeRequest);
}

export function* fetchDataRequest() {
  const payload = yield call(fetchDataService);

  yield put(
    fetchData.success({
      payload,
    }),
  );
}

export function* fetchDataSaga() {
  yield takeEvery(fetchData.REQUEST, fetchDataRequest);
}
