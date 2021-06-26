import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import LoginForm from "../user/LoginForm";
import SignupForm from "../user/SignupForm";
import ProfileForm from "../user/ProfileForm";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import Home from "../Home";

//Routes component.  Obtains login and signup functions as props from app and passes them to LoginForm and SignupForm components.  Uses private route custom route component for private routes, and the NotFound component for bad routes.

function Routes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );
  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/companies">
          <CompanyList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>
        <PrivateRoute exact path="/profile">
          <ProfileForm />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
