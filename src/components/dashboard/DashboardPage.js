import React from "react";
import MembersPage from "../members/MembersPage";
import MigrationsPage from "../migrations/MigrationsPage";

import "./Dashboard.css";

const DashboardPage = () => (
  <>
    <div>
      <h1>SSI Migrations</h1>
      {/* <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link> */}
    </div>
    <div id="dashboard">
      <div id="members" className="layout_section">
        <MembersPage />
      </div>
      <div id="members_details" className="layout_section">
        Details plus more things
      </div>
      <div id="migrations" className="layout_section">
        <MigrationsPage />
      </div>
      <div id="stats" className="layout_section">
        <div className="stats">stat</div>
        <div className="stats">stat</div>
        <div className="stats">stat</div>
      </div>
    </div>
  </>
);

export default DashboardPage;
