import React from 'react';
import { MatchInterface } from '@interfaces/match.interface';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardContainer } from '@dashboard/dashboard.container';
import { SectionContainer } from '@section/section.container';
import { SettingsContainer } from '@settings/settings.container';
import { SongListContainer } from '@song/list.container';
import { ArtistContainer } from '@artist/artist.container';

type PrivateAppProps = {
  match: MatchInterface;
};

export const PrivateAppRoutes = ({ match }: PrivateAppProps) => (
  <Switch>
    <Route strict exact path={match.path} component={DashboardContainer} />
    <Route strict path={`${match.path}section/`} component={SectionContainer} />
    <Route strict path={`${match.path}settings/`} component={SettingsContainer} />
    <Route strict path={`${match.path}playlist/`} component={SongListContainer} />
    <Route strict path={`${match.path}artist/`} component={ArtistContainer} />
    <Redirect to={match.path} />
  </Switch>
);
