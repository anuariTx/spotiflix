import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRouteHOC } from '@routes/private-route.hoc';

import { PrivateAppContainer } from 'app/private-app.container';
import { SignInPageContainer } from 'sign-in/sign-in-page.container';

export const AppRoutes = () => (
  <Switch>
    <PrivateRouteHOC strict path="/app/" Component={PrivateAppContainer} />
    <Route strict path="/login/" component={SignInPageContainer} />
    <Redirect to="/app/" />
  </Switch>
);
