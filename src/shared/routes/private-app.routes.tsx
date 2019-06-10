import React from 'react';
import { IMatch } from '@interfaces/match.interface';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardContainer } from '@containers/dashboard/dashboard.container';

type PrivateAppProps = {
  match: IMatch;
};

export const PrivateAppRoutes = ({ match }: PrivateAppProps) => (
  <Switch>
    <Route exact strict path={match.path} component={DashboardContainer} />
    <Redirect to={match.path} />
  </Switch>
);
