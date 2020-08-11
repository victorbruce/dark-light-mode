import React from "react";

import logo from "../../assets/logo.svg";
import { Store } from "../../store/store";

const Header = () => {
  const { state } = React.useContext(Store);
  return (
    <header
      className={`${state.theme === "Dark" ? "Header Header--dark" : "Header"}`}
    >
      <img src={logo} className="Header__logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="Header__logo"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Header;
