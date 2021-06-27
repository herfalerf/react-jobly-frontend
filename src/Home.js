import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./user/UserContext";

//Home component, displays a welcome message if user is logged in, displays links to login/signup form if no current user.

const Home = () => {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);
  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-4">Jobly</h1>
        <p className="lead">All the jobs in one convenient place.</p>
        {currentUser ? (
          <h3>
            Welcome Back, {currentUser.firstName || currentUser.username}!
          </h3>
        ) : (
          <p>
            <Link className="btn btn-primary font-weight-bold m-2" to="/login">
              Log in
            </Link>
            <Link className="btn btn-primary font-weight-bold m-2" to="/signup">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
