import React from 'react';

import { IMatch } from '@interfaces/match.interface';

import { NavigationMenuComponent } from '@layout/navigation-menu/navigation-menu.component';

type NavigationMenuContainerProps = {
  match: IMatch;
};

export const NavigationMenuContainer = ({ match }: NavigationMenuContainerProps) => {
  return <NavigationMenuComponent match={match} />;
};
