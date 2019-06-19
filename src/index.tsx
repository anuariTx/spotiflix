import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@shared/store.config';

import { AppContainer } from '@app/app.container';
import './index.styles.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppContainer />
  </ReduxProvider>,
  document.getElementById('root'),
);
