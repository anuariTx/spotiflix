import { all, fork } from 'redux-saga/effects';

import { signInSaga } from '@auth/auth.saga';
import { signOutSaga } from '@auth/auth.saga';
import { setErrorSaga } from '@error/error.saga';
import { clearErrorSaga } from '@error/error.saga';
import { fetchPostsSaga } from 'posts/posts.saga';
import { changeThemeSaga } from '@themes/theme.saga';
import { fetchSongListSaga } from '@song/song.saga';
import { fetchAlbumSaga } from '@album/album.saga';

export function* rootSaga() {
  yield all([
    fork(signInSaga),
    fork(signOutSaga),
    fork(setErrorSaga),
    fork(clearErrorSaga),
    fork(fetchPostsSaga),
    fork(changeThemeSaga),
    fork(fetchSongListSaga),
    fork(fetchAlbumSaga),
  ]);
}
