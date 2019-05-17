import axios from "axios";

const initialState = {
  message: "",
  userId: 0
};

interface IAction {
  type: string;
  value: string;
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SEND_BLOG":
      // axios.post('/api/v1/blogs', {
      //   message: 'foo',
      //   user_id: 1
      // }).then((res) => {
      //   console.log(res.data);
      // });

      return Object.assign({}, state, {
        message: action.value.message,
        userId:  action.value.userId
      });
    default:
      return state;
  }
};

export const sendBlog = (params: IAction) => {
  return { type: "SEND_BLOG", value: params };
};

export default reducer;
