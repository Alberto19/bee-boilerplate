import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import multi from 'redux-multi';
import reducers from './reducers';

//eslint-disable-next-line
//import createSagaMiddleware from 'redux-saga'

const logger = createLogger();
//eslint-disable-next-line
//const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  const middlewares = [
  //  sagaMiddleware
    logger,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers),
    multi,
  );
  //eslint-disable-next-line
  //store.runSaga = sagaMiddleware.run 
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
