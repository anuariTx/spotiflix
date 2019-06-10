import React, { useState } from 'react';

import { ILocation } from '../../shared/interfaces/location.interface';

import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { signInAction } from '../../shared/rdx/actions/auth.action';
import { IAppState } from '../../shared/rdx/reducers/root.reducer';

type SignInControlsProps = { isSignedIn: boolean; signInAction: Function; location: ILocation };

const SignInControls = ({ isSignedIn, signInAction, location }: SignInControlsProps) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { referrer } = location.state || { referrer: { pathname: '/app' } };

  const handleSignInClick = () => {
    signInAction(() => setRedirectToReferrer(true));
  };

  if (redirectToReferrer || isSignedIn) {
    return <Redirect to={referrer} />;
  }

  return (
    <div className="sign-in-controls">
      <p>
        {'Sign in to access:  '}
        {referrer.pathname}
      </p>
      <button type="button" onClick={handleSignInClick}>
        Sign in
      </button>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({ isSignedIn: state.auth.isSignedIn });

export const SignInControlsComponent = connect(
  mapStateToProps,
  { signInAction },
);
