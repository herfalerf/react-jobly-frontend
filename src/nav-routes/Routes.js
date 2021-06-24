import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import SearchForm from "../forms/SearchForm";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import Home from "../Home";

function Routes(login, signup, logout) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute exact path="/companies">
        <SearchForm />
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <SearchForm />
        <JobList />
      </PrivateRoute>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <PrivateRoute exact path="/profile">
        <ProfileForm />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
