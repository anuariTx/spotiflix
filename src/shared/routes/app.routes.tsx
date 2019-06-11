import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRouteHOC } from '../../hoc/private-route.hoc';
import { PrivateAppContainer } from '@containers/private-app.container';
import { SignInPageContainer } from '@containers/sign-in-page/sign-in-page.container';

export const AppRoutes = () => (
  <Switch>
    <PrivateRouteHOC strict path="/app/" Component={PrivateAppContainer} />
    <Route strict path="/login/" component={SignInPageContainer} />
    <Redirect to="/app/" />
  </Switch>
);
