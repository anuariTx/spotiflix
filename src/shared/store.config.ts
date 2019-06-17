import { applyMiddleware, compose, Store } from 'redux';

import { IAppState, RootReducer } from '@rdx/reducers/root.reducer';

import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@rdx/sagas/root.saga';

// eslint-disable-next-line no-underscore-dangle
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configuredStore: Store<IAppState> = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export const store = configuredStore;
