import React from 'react';

import { IAppState } from '@rdx/root.reducer';
import { ILocation } from '@interfaces/location.interface';
import { PrivateAppProps } from 'app/private-app.container';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

type PrivateRouteProps = {
  path: string;
  Component: React.ComponentType<PrivateAppProps>;
  isSignedIn: boolean;
  strict: boolean;
  location?: ILocation;
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

const mapStateToProps = (state: IAppState) => ({
  isSignedIn: state.auth.isSignedIn,
});

export const PrivateRouteHOC = connect(mapStateToProps)(PrivateRoute);
