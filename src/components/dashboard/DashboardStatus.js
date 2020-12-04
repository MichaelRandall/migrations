import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as memberActions from "../../redux/actions/memberActions";
import * as migrationActions from "../../redux/actions/migrationActions";
import PropTypes from "prop-types";
// import LineChart from "./LineChart";
import BarChart from "./BarChart";
import _ from "lodash";

function DashboardStatus({ migrations, members, loadMembers, loadMigrations }) {
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
  }, []);

  return (
    //   <MigrationsPerUser />
    //   <MigrationStateByUser />
    //   <MigrationForm
    //   migration={migration}
    //   errors={errors}
    //   members={members}
    //   onChange={handleChange}
    //   onSave={handleSave}
    // />

    <BarChart migrations={migrations} />
  );
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
