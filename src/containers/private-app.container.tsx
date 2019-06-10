import React from 'react';
import { PrivateAppRoutes } from '../shared/routes/private-app.routes';
// import Header from '../shared/components/layout/Header/Header';
// import Nav from '../shared/components/layout/Nav/Nav';

export const PrivateAppContainer = (props: any) => (
  <div className="private-app">
    {/*
        <Header />
        <Nav match={match} location={location} />
        */}
    <PrivateAppRoutes match={props.match} />
  </div>
);
