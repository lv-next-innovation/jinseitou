import { combineReducers, createStore as reduxCreateStore } from "redux";
import MainReducer      from "./modules/main";

declare global {
  interface IWindow {
    store: any;
  }
}

const createStore = () => {
  if (window.store) {
    return window.store;
  }

  const store = reduxCreateStore(
    combineReducers({
      top:       TopReducer,
      main:      MainReducer,
    })
  );
  window.store = store;

  return store;
};

export default createStore;
