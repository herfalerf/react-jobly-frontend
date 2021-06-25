import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./user/UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);
  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      {currentUser ? (
        <h3>Welcome Back, {currentUser.firstName || currentUser.username}!</h3>
      ) : (
        <p>
          <Link className="btn btn-primary font-weight-bold-mr-3" to="/login">
            Log in
          </Link>
          <Link className="btn btn-primary font-weight-bold-mr-3" to="/signup">
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
};

export default Home;
