import { takeLatest, put } from 'redux-saga/effects';
import { changeThemeAction } from '@rdx/actions/theme.action';

function* changeThemeTrigger(params: any) {
  yield put(
    changeThemeAction.fulfill({
      theme: params.payload,
    }),
  );
}

export function* changeThemeSaga() {
  yield takeLatest(changeThemeAction.TRIGGER, changeThemeTrigger);
}
