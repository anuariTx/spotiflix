import { Dispatch } from 'redux';

import uuidv4 from 'uuid/v4';
import faker from 'faker';

import { SIGN_IN, SIGN_OUT } from '../action-types';
import { FakeAuth } from '@auth/fake-auth.auth';

export const signInAction = () => async (dispatch: Dispatch) => {
  await new FakeAuth().signIn();
  const userId = uuidv4();
  const userName = faker.name.findName();

  dispatch({
    type: SIGN_IN,
    payload: { userId, userName },
  });
};

export const signOutAction = (callback: Function) => async (dispatch: Dispatch) => {
  await new FakeAuth().signOut();

  callback();

  dispatch({
    type: SIGN_OUT,
  });
};
