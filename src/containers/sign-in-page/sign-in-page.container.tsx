import React from 'react';

import { IAppState } from '../../shared/rdx/reducers/root.reducer';

import { connect } from 'react-redux';

const SignInPage = (props: any) => {
  return <div className="sign-in__page" />;
};

const mapStateToProps = (state: IAppState) => ({});

export const SignInPageContainer = connect(mapStateToProps)(SignInPage);
