import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRouteHOC } from '../../hoc/private-route.hoc';
import { PrivateAppContainer } from '@containers/private-app.container';
import { SignInPageContainer } from '@containers/sign-in-page/sign-in-page.container';

export const AppRoutes = () => (
  <Switch>
    <PrivateRouteHOC path="/app" component={PrivateAppContainer} />
    <Route path="/login" component={SignInPageContainer} />
    <Redirect to="/app" />
  </Switch>
);
