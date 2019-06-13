import { call, put, takeEvery } from 'redux-saga/effects';
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
  yield call(signInService);

  const userId = uuidv4();
  const userName = faker.name.findName();

  yield put(
    signInAction.success({
      user: { userId, userName },
    }),
  );
}

export function* signInSaga() {
  yield takeEvery(signInAction.REQUEST, signInRequest);
}

function* signOutService() {
  yield call(signOut);
}

function* signOutRequest() {
  yield call(signOutService);
  yield put(signOutAction.success());
}

export function* signOutSaga() {
  yield takeEvery(signOutAction.REQUEST, signOutRequest);
}
