import React from 'react';

import { LocationInterface } from '@interfaces/location.interface';
import { AppStateInterface } from '@rdx/root.reducer';

import { connect } from 'react-redux';
import { signInAction } from '@auth/auth.action';

import { SignInControlsComponent } from 'sign-in/sign-in-controls.component';

type SignInPageProps = { isSignedIn: boolean; location: LocationInterface; signInAction: Function };

const SignInPage = ({ isSignedIn, location, signInAction }: SignInPageProps) => {
  return (
    <div className="sign-in__page">
      <SignInControlsComponent
        isSignedIn={isSignedIn}
        signInAction={signInAction}
        location={location}
      />
    </div>
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = {
  signInAction: signInAction.request,
};

export const SignInPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPage);
