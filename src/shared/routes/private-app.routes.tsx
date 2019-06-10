import React from 'react';
import { IMatch } from '@interfaces/match.interface';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardContainer } from '@containers/dashboard/dashboard.container';
import { SectionContainer } from '@containers/section/section.container';

type PrivateAppProps = {
  match: IMatch;
};

export const PrivateAppRoutes = ({ match }: PrivateAppProps) => (
  <Switch>
    <Route exact strict path={match.path} component={DashboardContainer} />
    <Route strict path={`${match.path}section/`} component={SectionContainer} />
    <Redirect to={match.path} />
  </Switch>
);
