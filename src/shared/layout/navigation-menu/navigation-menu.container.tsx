import React from 'react';

import { MatchInterface } from '@interfaces/match.interface';

import { NavigationMenuComponent } from '@layout/navigation-menu/navigation-menu.component';

type NavigationMenuContainerProps = {
  match: MatchInterface;
};

export const NavigationMenuContainer = ({ match }: NavigationMenuContainerProps) => {
  return <NavigationMenuComponent match={match} />;
};
