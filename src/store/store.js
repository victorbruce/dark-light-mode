import React from "react";
import reducer from './reducers/theme';

const initialState = {
  theme: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'Dark'
};

// Create Store
export const Store = React.createContext(initialState);

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
