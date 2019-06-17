import React from 'react';
import { IMatch } from '@interfaces/match.interface';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardContainer } from '@dashboard/dashboard.container';
import { SectionContainer } from '@section/section.container';
import { SettingsContainer } from '@settings/settings.container';

type PrivateAppProps = {
  match: IMatch;
};

export const PrivateAppRoutes = ({ match }: PrivateAppProps) => (
  <Switch>
    <Route strict exact path={match.path} component={DashboardContainer} />
    <Route strict path={`${match.path}section/`} component={SectionContainer} />
    <Route strict path={`${match.path}settings/`} component={SettingsContainer} />
    <Redirect to={match.path} />
  </Switch>
);
