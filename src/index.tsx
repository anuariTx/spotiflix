import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { RootReducer } from './shared/rdx/reducers/root.reducer';

import { AppContainer } from './containers/app/app.container';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppContainer />
  </ReduxProvider>,
  document.getElementById('root')
);
