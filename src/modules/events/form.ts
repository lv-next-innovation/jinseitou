import axios from "axios";

const initialState = {
  inputValue: "",
  message: "",
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
        message: action.value.message,
        userId: action.value.userId
      });
    default:
      return state;
  }
};

export const changeText = (etv: any) => {
  console.log(etv);
  return { type: "CHANGE_TEXT", value: etv };
};

export const sendBlog = (params: IAction) => {
  return { type: "SEND_BLOG", value: params };
};

export default reducer;
