import React from 'react';
import { PrivateAppRoutes } from '@routes/private-app.routes';
// import Header from '../shared/components/layout/Header/Header';
// import Nav from '../shared/components/layout/Nav/Nav';

export type PrivateAppProps = {
  match: {
    path: string;
  };
};

export const PrivateAppContainer = ({ match }: PrivateAppProps) => (
  <div className="private-app">
    {/*
        <Header />
        <Nav match={match} location={location} />
        */}
    <PrivateAppRoutes match={match} />
  </div>
);
