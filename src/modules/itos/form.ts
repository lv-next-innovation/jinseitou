import axios from "axios";

const initialState = {
  influencer: "",
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

    case "CHANGE_INFLUENCER":
      return Object.assign({}, state, {
        influencer: action.value
      });

    case "SEND_ITO":
      axios
        .post("/api/v1/itos", {
          itos: {
            ito_id: 1,
            name: action.value.influencer,
            story: action.value.story,
            event_id: 1
          }
        });

      return state;

    default:
      return state;
  }
};

export const changeStory = params => {
  return { type: "CHANGE_STORY", value: params };
};

export const changeInfluencer = params => {
  return { type: "CHANGE_INFLUENCER", value: params };
};

export const sendIto = params => {
  return { type: "SEND_ITO", value: params };
};

export default reducer;
