import { applyMiddleware, compose, Store } from 'redux';

import { AppStateInterface, RootReducer } from './root.reducer';

import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root.saga';

// eslint-disable-next-line no-underscore-dangle
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configuredStore: Store<AppStateInterface> = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export const store = configuredStore;
