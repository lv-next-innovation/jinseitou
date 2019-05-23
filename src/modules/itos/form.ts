import axios from "axios";

const initialState = {
  story: "",
  eventId: 0
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "CHANGE_STORY":
      return Object.assign({}, state, {
        story: action.value
      });

    case "SEND_ITO":
      axios
        .post("/api/v1/itos", {
          itos: {
            story: state.story,
            event_id: 1
          }
        }).then(res => {
          console.log(res.data);
        });
      return state;

    default:
      return state;
  }
};

export const changeStory = params => {
  return { type: "CHANGE_STORY", value: params };
};

export const sendIto = params => {
  return { type: "SEND_ITO", value: params };
};

export default reducer;
