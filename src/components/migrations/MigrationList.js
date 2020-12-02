import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MigrationList = ({ migrations }) => (
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

MigrationList.propTypes = {
  migrations: PropTypes.array.isRequired,
};

export default MigrationList;
