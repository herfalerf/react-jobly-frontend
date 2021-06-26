import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";
import UserContext from "../user/UserContext";

//NavBar component, displays a navbar at the top of the page.  Logout functionis passed as a prop.

function NavBar({ logout }) {
  //current user is passed in from UserContext
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  //render for navbar when user is logged in.
  function loggedInNav() {
    return (
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavLink className="nav-link" exact to="/" onClick={logout}>
            Logout
          </NavLink>
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
  //render for navbar when user is logged out.
  function loggedOutNav() {
    return (
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </Nav>
      </Navbar>
    );
  }

  //logic for determining which navbar to render
  return <div> {currentUser ? loggedInNav() : loggedOutNav()}</div>;
}

export default NavBar;
