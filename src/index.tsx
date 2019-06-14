import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@shared/store.config';

import { AppContainer } from '@containers/app/app.container';

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <AppContainer />
  </ReduxProvider>,
  document.getElementById('root'),
);
