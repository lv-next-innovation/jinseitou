const initialState = {
  foo: ""
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "TEST":
      return Object.assign({}, state, {
        foo: action.value
      });
    default:
      return state;
  }
};

export const test = (foo: IAction) => {
  return { type: "TEST", value: "bar" };
};

export default reducer;
