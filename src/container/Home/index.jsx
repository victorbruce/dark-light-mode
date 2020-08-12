import React from "react";
import { Store } from "../../store/store";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

const Home = () => {
  const { state } = React.useContext(Store);

  return (
    <div className={`${state.theme === "Dark" ? "App--dark" : "App"}`}>
      <Nav />
      <Header />
    </div>
  );
};

export default Home;
