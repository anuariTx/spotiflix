import { all, fork } from 'redux-saga/effects';

import { signInSaga } from '@auth/auth.saga';
import { signOutSaga } from '@auth/auth.saga';
import { fetchPostsSaga } from 'posts/posts.saga';
import { changeThemeSaga } from '@themes/theme.saga';

export function* rootSaga() {
  yield all([fork(signInSaga), fork(signOutSaga), fork(fetchPostsSaga), fork(changeThemeSaga)]);
}
