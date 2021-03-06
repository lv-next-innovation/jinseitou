import axios from "axios";

const initialState = {
  event_date: "",
  title: "",
  userId: 0
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "CHANGE_EVENT_DATE":
      return Object.assign({}, state, {
        event_date: action.value
      });

    case "CHANGE_TITLE":
      return Object.assign({}, state, {
        title: action.value
      });

    case "SEND_BLOG":
      return Object.assign({}, state, {
l       event_date: action.value.event_date,
        title: action.value.title,
        userId: action.value.userId
      });

    case "FORM_RESET":
      return Object.assign({}, state, {
        event_date: "",
        title: "",
        userId: ""
      });

    default:
      return state;
  }
};

export const changeEventDate = params => {
  return { type: "CHANGE_EVENT_DATE", value: params };
};

export const changeTitle = params => {
  return { type: "CHANGE_TITLE", value: params };
};

export const formReset = () => {
  return { type: "FORM_RESET" };
};

export default reducer;
