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
    case "CHANGE_TEXT":
      return Object.assign({}, state, {
        inputValue: action.value
      });

    case "SEND_BLOG":
      return Object.assign({}, state, {
        event_date: action.value.event_date,
        title: action.value.title,
        userId: action.value.userId
      });
    default:
      return state;
  }
};

export const changeText = (etv: any) => {
  return { type: "CHANGE_TEXT", value: etv };
};

export const sendBlog = (params: IAction) => {
  return { type: "SEND_BLOG", value: params };
};

export default reducer;
