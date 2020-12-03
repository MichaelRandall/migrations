import React from "react";
import DashboardMigrations from "../dashboard/DashboardMigrations";
import DashboardMembers from "../dashboard/DashboardMembers";
import DashboardStatus from "../dashboard/DashboardStatus";

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
        <DashboardMembers />
      </div>
      <div id="members_details" className="layout_section">
        Details + more to come
      </div>
      <div id="migrations" className="layout_section">
        <DashboardMigrations />
      </div>
      <div id="stats_holder">
        <DashboardStatus />
      </div>
      {/* <div id="stats-left" className="layout_section">
        <DashboardStatus />
      </div>
      <div id="stats-center" className="layout_section">
        <DashboardStatus />
      </div>
      <div id="stats-right" className="layout_section">
        <DashboardStatus />
      </div> */}
    </div>
  </>
);

export default DashboardPage;
