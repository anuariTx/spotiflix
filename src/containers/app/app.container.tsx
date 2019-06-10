import React from 'react';
import { Router } from 'react-router-dom';
import { routerHistory } from '../../shared/router.history';
import { AppRoutes } from '../../shared/routes/app.routes';

export const AppContainer = () => {
  return (
    <Router history={routerHistory}>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};
