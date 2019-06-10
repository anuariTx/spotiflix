import React from 'react';

import { ILocation } from '@interfaces/location.interface';
import { IAppState } from '@rdx/reducers/root.reducer';

import { connect } from 'react-redux';
import { signInAction } from '@rdx/actions/auth.action';

import { SignInControlsComponent } from '@components/sign-in-controls/sign-in-controls.component';

type SignInPageProps = { isSignedIn: boolean; signInAction: Function; location: ILocation };

const SignInPage = (props: SignInPageProps) => {
  return (
    <div className="sign-in__page">
      <SignInControlsComponent
        isSignedIn={props.isSignedIn}
        signInAction={props.signInAction}
        location={props.location}
      />
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  isSignedIn: state.auth.isSignedIn,
});

export const SignInPageContainer = connect(
  mapStateToProps,
  { signInAction },
)(SignInPage);
