import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./NotFound";

function Routes(login, signup, logout) {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/companies"></Route>
      <Route exact path="/companies/:name"></Route>
      <Route exact path="/jobs"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/signup"></Route>
      <Route exact path="/profile"></Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
