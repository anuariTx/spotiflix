import { call, put, takeLatest } from 'redux-saga/effects';
import { signInAction, signOutAction } from '@rdx/actions/auth.action';
import { FakeAuth } from '@auth/fake-auth.auth';

import uuidv4 from 'uuid/v4';
import faker from 'faker';

const authService = new FakeAuth();

function* signInService() {
  yield authService.signIn();
}

function* signInRequest() {
  try {
    yield call(signInService);

    const id = uuidv4();
    const name = faker.name.findName();
    const image = faker.image.avatar();

    yield put(
      signInAction.success({
        user: { id, name, image },
      }),
    );
  } catch (error) {
    yield put(
      signInAction.failure({
        title: 'Error when signing in.',
        message: 'Oops Bobby :C',
      }),
    );
  }
}

export function* signInSaga() {
  yield takeLatest(signInAction.REQUEST, signInRequest);
}

function* signOutService() {
  yield authService.signOut();
}

function* signOutRequest(params: any) {
  try {
    yield call(signOutService);

    yield put(signOutAction.success());

    const { signOutCleanup } = params.payload;
    signOutCleanup();
  } catch (error) {
    yield put(
      signOutAction.failure({
        title: 'Error when signing out.',
        message: 'Oops Bobby :C',
      }),
    );
  }
}

export function* signOutSaga() {
  yield takeLatest(signOutAction.REQUEST, signOutRequest);
}
