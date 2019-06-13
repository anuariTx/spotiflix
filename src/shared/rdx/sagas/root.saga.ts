import { all, fork } from 'redux-saga/effects';

import { signInSaga } from '@rdx/sagas/auth.saga';
import { fetchDataSaga } from '@rdx/sagas/fetch-data.saga';

export function* rootSaga() {
  yield all([fork(signInSaga), fork(fetchDataSaga)]);
}
