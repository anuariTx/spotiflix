import React from 'react';

import { ILocation } from '@interfaces/location.interface';
import { IAppState } from '@rdx/reducers/root.reducer';

import { connect } from 'react-redux';
import { signInAction } from '@rdx/actions/auth.action';

import { SignInControlsComponent } from '@components/sign-in-controls/sign-in-controls.component';

type SignInPageProps = { isSignedIn: boolean; location: ILocation; signInAction: Function };

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

const mapStateToProps = (state: IAppState) => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = {
  signInAction: signInAction.request,
};

export const SignInPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPage);
