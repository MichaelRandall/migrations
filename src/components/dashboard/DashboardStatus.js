import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as memberActions from "../../redux/actions/memberActions";
import * as migrationActions from "../../redux/actions/migrationActions";
import PropTypes from "prop-types";
// import LineChart from "./LineChart";
import BarChart from "./BarChart";

function DashboardStatus({ migrations, members, loadMembers, loadMigrations }) {
  console.log("Dashboard");
  console.log(typeof migrations);

  useEffect(() => {
    if (migrations.length === 0) {
      loadMigrations().catch((error) => {
        alert("Loading migrations failed" + error);
      });
    }

    if (members.length === 0) {
      loadMembers().catch((error) => {
        alert("Loading members failed" + error);
      });
    }
  }, [migrations]);

  const groupdStatusz = migrations.reduce((p, c) => {
    var status = c.status;
    if (!p.hasOwnProperty(status)) {
      p[status] = 0;
    }
    p[status]++;
    return p;
  }, {});

  const groupdMembersz = migrations.reduce((p, c) => {
    var owner = c.migration_ownerId;
    if (!p.hasOwnProperty(owner)) {
      p[owner] = 0;
    }
    p[owner]++;
    return p;
  }, {});

  return <BarChart migrations={groupdMembersz} />;
}

DashboardStatus.propTypes = {
  migrations: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  loadMigrations: PropTypes.func.isRequired,
  loadMembers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    migrations: state.migrations,
    members: state.members,
  };
}

const mapDispatchToProps = {
  loadMigrations: migrationActions.loadMigrations,
  loadMembers: memberActions.loadMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStatus);
