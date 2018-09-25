import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

import { StateType } from 'typesafe-actions';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState?: object) {
  // create store
  return createStore(rootReducer, initialState!, applyMiddleware(logger, sagaMiddleware));
}

// pass an optional param to rehydrate state on app start
const store = configureStore();
sagaMiddleware.run(rootSaga);

export type RootState = StateType<typeof rootReducer>;
// export store singleton instance
export default store;