import { combineReducers, createStore as reduxCreateStore } from "redux";
import TopReducer       from "./modules/top";
import MainReducer      from "./modules/main";
import BlogsFormReducer from "./modules/blogs/form.ts";

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
      blogsForm: BlogsFormReducer
    })
  );
  window.store = store;

  return store;
};

export default createStore;
