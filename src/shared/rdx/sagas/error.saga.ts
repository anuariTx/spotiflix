import { takeEvery, put } from 'redux-saga/effects';
import { setErrorAction, clearErrorAction } from '@rdx/actions/error.action';

function* setErrorRequest(params: any) {
  yield put(
    setErrorAction.fulfill({
      ...params.payload,
    }),
  );
}

export function* setErrorSaga() {
  yield takeEvery(setErrorAction.FULFILL, setErrorRequest);
}

function* clearErrorRequest(params: any) {
  yield put(clearErrorAction.fulfill({ containerName: params.payload }));
}

export function* clearErrorSaga() {
  yield takeEvery(clearErrorAction.FULFILL, clearErrorRequest);
}
