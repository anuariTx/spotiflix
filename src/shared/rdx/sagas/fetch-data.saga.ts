import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataAction } from '@rdx/actions/fetch-data.action';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fakeRequest = async () => {
  await timeout(1500);
  const luck = Math.floor(Math.random() * 10) >= 4;

  if (!luck) {
    throw new Error('Error on fake request');
  }

  return {
    containerName: 'SectionSampleContainer',
    data: 'HELLO! Fake request completed',
  };
};

function* fetchDataService() {
  return yield call(fakeRequest);
}

function* fetchDataRequest() {
  const payload = yield call(fetchDataService);

  yield put(
    fetchDataAction.success({
      payload,
    }),
  );
}

export function* fetchDataSaga() {
  yield takeEvery(fetchDataAction.TRIGGER, fetchDataRequest);
}
