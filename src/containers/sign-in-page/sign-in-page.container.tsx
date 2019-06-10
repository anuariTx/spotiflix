import React, { Suspense, lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SignInPage = (props: any) => {
  return <div className="sign-in__page" />;
};

const mapStateToProps = (state: any) => ({});

export const SignInPageContainer = connect(mapStateToProps)(SignInPage);
