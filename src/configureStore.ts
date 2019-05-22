import { combineReducers, createStore as reduxCreateStore } from "redux";
import EventsFormReducer from "./modules/events/form";
import MainReducer from "./modules/main";
import TopReducer from "./modules/top";

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
      eventsForm: EventsFormReducer,
      main: MainReducer,
      top: TopReducer
    })
  );
  window.store = store;

  return store;
};

export default createStore;
