import axios from "axios";

const initialState = {
  foo: ""
};

interface IAction {
  type: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "DEBUG":
      axios.get("/api/v1/events").then(res => {
        console.log(res.data.data);
      });

      return state;

    default:
      return state;
  }
};

export const debug = (foo: IAction) => {
  return { type: "DEBUG" };
};

export default reducer;
