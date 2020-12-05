import React from "react";

//Vendor
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function GlobalNavbar() {
  return (
    <Navbar variant="dark">
      <Link to="/">
        <Navbar.Brand>Migration Tracker</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">
          Dashboard
        </Link>
        <Link className="nav-link" to="/members">
          Members
        </Link>
        <Link className="nav-link" to="/migrations">
          Migrations
        </Link>
        <Link className="nav-link" to="/status">
          Status
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavbar;
