import { takeEvery, put } from 'redux-saga/effects';
import { setErrorAction, clearErrorAction } from 'error/error.action';

function* setErrorTrigger(params: any) {
  yield put(
    setErrorAction.fulfill({
      ...params.payload,
    }),
  );
}

export function* setErrorSaga() {
  yield takeEvery(setErrorAction.TRIGGER, setErrorTrigger);
}

function* clearErrorTrigger(params: any) {
  yield put(
    clearErrorAction.fulfill({
      containerName: params.payload,
    }),
  );
}

export function* clearErrorSaga() {
  yield takeEvery(clearErrorAction.TRIGGER, clearErrorTrigger);
}
