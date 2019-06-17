import { call, put, takeLatest } from 'redux-saga/effects';
import { signInAction, signOutAction } from '@rdx/actions/auth.action';
import { FakeAuth } from '@auth/fake-auth.auth';

import uuidv4 from 'uuid/v4';
import faker from 'faker';

const signIn = async () => await new FakeAuth().signIn();
const signOut = async () => await new FakeAuth().signOut();

function* signInService() {
  yield call(signIn);
}

function* signInRequest() {
  try {
    yield call(signInService);

    const userId = uuidv4();
    const userName = faker.name.findName();
    const image = faker.image.avatar();

    yield put(
      signInAction.success({
        user: { id: userId, username: userName, image },
      }),
    );
  } catch (error) {
    yield put(
      signInAction.failure({
        title: 'Error when signing in.',
        message: 'Ops',
      }),
    );
  }
}

export function* signInSaga() {
  yield takeLatest(signInAction.REQUEST, signInRequest);
}

function* signOutService() {
  yield call(signOut);
}

function* signOutRequest() {
  try {
    yield call(signOutService);
    yield put(signOutAction.fulfill());
  } catch (error) {
    yield put(
      signOutAction.failure({
        title: 'Error when signing out.',
        message: 'Ops',
      }),
    );
  }
}

export function* signOutSaga() {
  yield takeLatest(signOutAction.TRIGGER, signOutRequest);
}
