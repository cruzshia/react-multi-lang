import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import logger from 'redux-logger';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import { StateType } from 'typesafe-actions';

const epicMiddleware = createEpicMiddleware();

function configureStore(initialState?: object) {
  // create store
  return createStore(rootReducer, initialState!, applyMiddleware(epicMiddleware, logger));
}

const store = configureStore();
epicMiddleware.run(rootEpic);

export type RootState = StateType<typeof rootReducer>;
export default store;