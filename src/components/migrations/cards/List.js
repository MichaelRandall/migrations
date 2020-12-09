import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { getMigrationsAction } from "../../../redux/actions/migrationActions";

function MigrationList({ getMigrationsAction, migrations }) {
  useEffect(() => {
    getMigrationsAction();
  }, []);

  return (
    <table className="table table_format">
      <thead>
        <tr>
          <th>Application</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Type</th>
          <th>Operating System</th>
        </tr>
      </thead>
      <tbody>
        {migrations.map((migration) => {
          return (
            <tr key={migration.id}>
              <td>
                <Link to={"/migration/" + migration.app_name}>
                  {migration.app_name}
                </Link>
              </td>
              <td>{migration.ownerName}</td>
              <td>{migration.status}</td>
              <td>{migration.migration_type}</td>
              <td>{migration.os}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    migrations: state.app.migrations,
  };
}

const mapDispatchToProps = {
  getMigrationsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationList);
