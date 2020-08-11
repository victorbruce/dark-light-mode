import React from "react";
import { Store } from "./store/store";

import Nav from './components/Nav';
import Header from "./components/Header";

function App() {
  const { state } = React.useContext(Store);

  return (
    <div className={`${state.theme === "Dark" ? "App--dark" : "App"}`}>
      <Nav />
      <Header />
    </div>
  );
}

export default App;
