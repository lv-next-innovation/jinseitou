import { combineReducers, createStore as reduxCreateStore } from "redux";
import TopReducer       from "./modules/top";
import MainReducer      from "./modules/main";
import EventsFormReducer from "./modules/events/form.ts";

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
      eventsForm: EventsFormReducer
    })
  );
  window.store = store;

  return store;
};

export default createStore;
