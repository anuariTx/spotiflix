import React from 'react';

import { PrivateAppRoutes } from '@routes/private-app.routes';

import { IMatch } from '@interfaces/match.interface';

import { HeaderContainer } from '@shared/layout/header/header.container';
import { NavigationMenuContainer } from '@shared/layout/navigation-menu/navigation-menu.container';

export type PrivateAppProps = {
  match: IMatch;
};

export const PrivateAppContainer = ({ match }: PrivateAppProps) => (
  <div className="private-app">
    <HeaderContainer />
    <NavigationMenuContainer match={match} />
    <PrivateAppRoutes match={match} />
  </div>
);
