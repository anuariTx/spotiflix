import { all, fork } from 'redux-saga/effects';

import { signInSaga } from './auth.saga';
import { fetchDataSaga } from './fetch-data.saga';
import { fetchPostsSaga } from './posts.saga';
import { changeThemeSaga } from './theme.saga';

export function* rootSaga() {
  yield all([fork(signInSaga), fork(fetchDataSaga), fork(fetchPostsSaga), fork(changeThemeSaga)]);
}
