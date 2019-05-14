import {
  createStore as reduxCreateStore,
  combineReducers
} from 'redux';
import TopReducer from './modules/top';

declare global {
  interface Window {
    store: any;
  }
}

const createStore = () => {
  if (window.store) {
    return window.store;
  }

  const store = reduxCreateStore(
    combineReducers({
      top: TopReducer
    })
  );
  window.store = store;

  return store;
};

export default createStore;
