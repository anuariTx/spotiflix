import React, { useState } from 'react';

import { ILocation } from '@interfaces/location.interface';

import { Redirect } from 'react-router';

type SignInControlsProps = { isSignedIn: boolean; signInAction: Function; location: ILocation };

export const SignInControlsComponent = ({
  isSignedIn,
  signInAction,
  location,
}: SignInControlsProps) => {
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
