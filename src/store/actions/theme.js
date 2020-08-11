export const toggleDark = (dispatch) => {
  localStorage.setItem("theme", JSON.stringify("Dark"));

  return dispatch({
    type: "TOGGLE_DARK",
    payload: "Dark",
  });
};

export const toggleLight = (dispatch) => {
  localStorage.setItem("theme", JSON.stringify("Light"));

  return dispatch({
    type: "TOGGLE_LIGHT",
    payload: "Light",
  });
};
