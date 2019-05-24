import axios from "axios";

const initialState = {
  title: "",
  x: 0,
  y: 0
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SEND_EVENT":
      axios.get("/api/v1/events/1").then(res => {
        console.log(res)
        return Object.assign({}, state, {
          title: action.value.title,
          x: action.value.x,
          y: action.value.y
        });
      });

    default:
      return state;
  }
};

export const sendEvent = params => {
  return { type: "SEND_EVENT", value: params };
};

export default reducer;
