import { applyMiddleware, compose, Store } from 'redux';

import { IAppState, RootReducer } from './rdx/reducers/root.reducer';

import { createStore } from 'redux';
import reduxThunk from 'redux-thunk';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (): Store<IAppState> => {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
};
