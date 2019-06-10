import React from 'react';

import { IAppState } from '@rdx/reducers/root.reducer';
import { ILocation } from '@interfaces/location.interface';
import { PrivateAppProps } from '@containers/private-app.container';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

type PrivateRouteProps = {
  path: string;
  Component: React.ComponentType<PrivateAppProps>;
  isSignedIn: boolean;
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
          <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state: IAppState) => ({
  isSignedIn: state.auth.isSignedIn,
});

export const PrivateRouteHOC = connect(mapStateToProps)(PrivateRoute);
