import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { signIn } from '../shared/redux/actions/auth';

export const PrivateRouteHOC = ({
  component: Component,
  isSignedIn,
  isTokenValid,
  signInAction,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isSignedIn === true || isTokenValid === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { referrer: props.location } }}
          />
        )
      }
    />
  );
};

/*
const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  isTokenValid: state.auth.validToken
});

export default connect(
  mapStateToProps,
  { signInAction: signIn }
)(PrivateRoute);
*/
