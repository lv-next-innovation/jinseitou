import { combineReducers, createStore as reduxCreateStore } from "redux";
import EventsFormReducer from "./modules/events/form";
import DebugReducer from "./modules/local/debug";
import MainReducer from "./modules/main";
import TopReducer from "./modules/top";
import ItosFormReducer from "./modules/itos/form";

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
      debug: DebugReducer,
      eventsForm: EventsFormReducer,
      main: MainReducer,
      top: TopReducer,
      itosForm: ItosFormReducer
    })
  );
  window.store = store;

  return store;
};

export default createStore;
