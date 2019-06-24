import React from 'react';

import { MatchInterface } from '@interfaces/match.interface';

import { Link } from 'react-router-dom';

type NavigationMenuComponentProps = {
  match: MatchInterface;
};

export const NavigationMenuComponent = ({ match }: NavigationMenuComponentProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`${match.url}`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${match.url}section/`}>Section</Link>
        </li>
        <li>
          <Link to={`${match.url}settings/`}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
