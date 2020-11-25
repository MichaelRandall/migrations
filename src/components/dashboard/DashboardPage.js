import React from "react";
import MembersPage from "../members/MembersPage";
import MigrationsPage from "../migrations/MigrationsPage";

import "./Dashboard.css";

const DashboardPage = () => (
  <>
    <div>
      <h1>SSI Migration Tracker</h1>
      {/* <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link> */}
    </div>
    <div id="dashboard">
      <div id="members_holder">
        <div id="members_images">
          <MembersPage />
        </div>
        <div id="members_details">Details plus more things</div>
      </div>
      <div id="migrations_holder">
        <MigrationsPage />
      </div>
      <div className="stats" id="stat1">
        stat
      </div>
      <div className="stats" id="stat2">
        stat
      </div>
      <div className="stats" id="stat3">
        stat
      </div>
      <div className="stats" id="stat4">
        stat
      </div>
      <div className="stats" id="stat5">
        stat
      </div>
      <div className="stats" id="stat6">
        stat
      </div>
    </div>
  </>
);

export default DashboardPage;
