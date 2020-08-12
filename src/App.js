import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./container/Home";

const App = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
    </>
  );
};

export default App;
