import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DashboardContainer } from '@containers/dashboard/dashboard.container';

type PrivateAppProps = {
  match: {
    path: string;
  };
};

export const PrivateAppRoutes = ({ match }: PrivateAppProps) => (
  <Switch>
    <Route exact strict path={match.path} component={DashboardContainer} />
    <Redirect to={match.path} />
  </Switch>
);
