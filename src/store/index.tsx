import { createStore } from 'redux';
import rootReducer from '../reducer';
import { StateType } from 'typesafe-actions';

function configureStore(initialState?: object) {
  // create store
  return createStore(rootReducer, initialState!);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

export type RootState = StateType<typeof rootReducer>;
// export store singleton instance
export default store;