import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Dashboard
      </NavLink>
      {" | "}
      <NavLink to="/members" activeStyle={activeStyle}>
        Members
      </NavLink>
      {" | "}
      <NavLink to="/migrations" activeStyle={activeStyle}>
        Migrations
      </NavLink>
      {" | "}
      <NavLink to="/status" activeStyle={activeStyle}>
        Status
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
