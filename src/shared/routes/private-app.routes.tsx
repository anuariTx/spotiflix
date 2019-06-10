import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DashboardContainer } from '@containers/dashboard/dashboard.container';

export const PrivateAppRoutes = ({ match }: any) => (
  <Switch>
    <Route exact strict path={match.path} component={DashboardContainer} />
    <Redirect to={match.path} />
  </Switch>
);
