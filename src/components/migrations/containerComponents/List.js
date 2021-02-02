import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { getMigrations } from "../../../redux/actions/migrationsActions";
import { getMembers } from "../../../redux/actions/membersActions";

function MigrationList({ getMigrations, migrations, getMembers, members }) {
  useEffect(() => {
    getMigrations();
  }, []);

  useEffect(() => {
    getMembers();
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
    members: state.app.members,
  };
}

const mapDispatchToProps = {
  getMigrations,
  getMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationList);
