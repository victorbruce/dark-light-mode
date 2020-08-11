
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK":
      return { ...state, theme: action.payload };
    case "TOGGLE_LIGHT":
      return { ...state, theme: action.payload};
    default:
      return state;
  }
};

export default reducer;
