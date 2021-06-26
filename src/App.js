import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./nav-routes/NavBar";
import Routes from "./nav-routes/Routes";
import useLocalStorage from "./hooks/useLocalStorage";
import LoadingSpinner from "./common/LoadingSpinner";
import JoblyApi from "./api/api";
import UserContext from "./user/UserContext";
import jwt from "jsonwebtoken";

//Key for token to be stored in local storage.
export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=",
    infoLoaded,
    "currentUser=",
    currentUser,
    "token",
    token
  );

  //Load current user info on mount.  Determine if user is logged in or not.
  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            setApplicationIds(new Set(currentUser.applications));
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  //logout function, passed to the NavBar component.
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  //Signup function, passed to the NavBar component, which passes it to the SignupForm component.
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  //Login function, passed to the NavBar component, which passes it to the LoginForm component.
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  //Function for setting an application id in the list of application ids, stored in UserContext and used by the JobCard component.
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  //function for applying to a job.  Stored in the UserContext and used by the JobCard component.
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    //context provider which stores the current user state as well as the job application functions
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}
      >
        <div className="App">
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
