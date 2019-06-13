import { fork, all } from 'redux-saga/effects';

import { fetchDataSaga } from '@rdx/sagas/fetch-data.saga';

export function* rootSaga() {
  yield all([fork(fetchDataSaga)]);
}
