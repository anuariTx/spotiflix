import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { LocationInterface } from '@interfaces/location.interface';
import { PrivateAppProps } from 'app/private-app.container';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

type PrivateRouteProps = {
  path: string;
  Component: React.ComponentType<PrivateAppProps>;
  isSignedIn: boolean;
  strict: boolean;
  location?: LocationInterface;
};

const PrivateRoute = ({ Component, isSignedIn, location, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login/', state: { referrer: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  isSignedIn: state.auth.isSignedIn,
});

export const PrivateRouteHOC = connect(mapStateToProps)(PrivateRoute);
