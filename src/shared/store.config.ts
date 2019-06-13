import { applyMiddleware, compose, Store } from 'redux';

import { IAppState, RootReducer } from '@rdx/reducers/root.reducer';

import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@rdx/sagas/root.saga';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (): Store<IAppState> => {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
};

sagaMiddleware.run(rootSaga);
