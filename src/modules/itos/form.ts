const initialState = {
  content: ""
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "CHANGE_CONTENT":
      return Object.assign({}, state, {
        content: action.value
      });

    default:
      return state;
  }
};

export const changeContent = (params: IAction) => {
  return { type: "CHANGE_CONTENT", value: params }
};

export default reducer;
