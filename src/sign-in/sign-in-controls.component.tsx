import React from 'react';

import { LocationInterface } from '@interfaces/location.interface';

import { Redirect } from 'react-router';

type SignInControlsProps = {
  isSignedIn: boolean;
  signInAction: Function;
  location: LocationInterface;
};

export const SignInControlsComponent = ({
  isSignedIn,
  signInAction,
  location,
}: SignInControlsProps) => {
  const { referrer } = location.state || { referrer: { pathname: '/app' } };

  const handleSignInClick = () => signInAction();

  if (isSignedIn) {
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
