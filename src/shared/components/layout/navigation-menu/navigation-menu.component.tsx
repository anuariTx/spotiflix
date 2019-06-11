import React from 'react';

import { IMatch } from '@interfaces/match.interface';

import { Link } from 'react-router-dom';

type NavigationMenuComponentProps = {
  match: IMatch;
};

export const NavigationMenuComponent = ({ match }: NavigationMenuComponentProps) => {
  return (
    <nav>
      <ul>
        <Link to={match.url}>Dashboard</Link>
        <Link to={`${match.url}section/`}>Section</Link>
        <Link to={`${match.url}settings/`}>Settings</Link>
      </ul>
    </nav>
  );
};
