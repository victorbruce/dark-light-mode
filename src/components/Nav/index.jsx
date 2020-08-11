import React from "react";
import { Store } from "../../store/store";
import { toggleDark, toggleLight } from "../../store/actions/theme";

import LightMode from "../Icons/LightMode";
import DarkMode from "../Icons/DarkMode";

const Nav = () => {
  const { state, dispatch } = React.useContext(Store);

  const handleToggleDark = () => {
    toggleDark(dispatch);
  };

  const handleToggleLight = () => {
    toggleLight(dispatch);
  };

  return (
    <div className={`${state.theme === "Dark" ? "Nav--dark" : "Nav"}`}>
      <div className="Nav__inner">
        <div className="Nav__logo">
          <span>Dark | Light</span>
        </div>
        <div className="Nav__links">
          <span>{state.theme} Theme On:</span>
          {state.theme === "Light" ? (
            <span
              className="Nav__links__svg"
              onClick={handleToggleDark}
              title="Switch to Dark Mode"
            >
              <DarkMode />
            </span>
          ) : (
            <span
              className="Nav__links__svg"
              onClick={handleToggleLight}
              title="Switch to Light Mode"
            >
              <LightMode />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
