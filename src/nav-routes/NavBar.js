import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Signup">Signup</NavLink>
            <NavLink to="/Logout">Logout</NavLink>
            <NavLink to="/Companies">Companies</NavLink>
            <NavLink to="/Jobs">Jobs</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
