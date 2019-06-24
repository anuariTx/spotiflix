import React from 'react';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';

type AppProps = {
  theme: string;
};

const App = ({ theme }: AppProps) => {
  return (
    <Router history={routerHistory}>
      <ThemeProvider theme={configRootTheme(theme)}>
        <div>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  theme: state.theme.activeTheme,
});

export const AppContainer = connect(mapStateToProps)(App);
