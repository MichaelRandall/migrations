import React from "react";
import { connect } from "react-redux";
import * as migrationActions from "../../redux/actions/migrationActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

class DashboardMigrationsList extends React.Component {
  componentDidMount() {
    this.props.actions.loadMigrations().catch((error) => {
      alert("Loading migrations failed" + error);
    });
  }

  render() {
    return (
      <>
        {this.props.migrations.map((migration) => {
          let status = "";
          let statusStyle = "";
          switch (migration.status) {
            case "Not-Started":
              status = migration.status;
              statusStyle = { color: "red" };
              break;
            case "In-Progress":
              status = migration.status;
              statusStyle = { color: "yellow" };
              break;
            case "Complete":
              status = migration.status;
              statusStyle = { color: "green" };
              break;
            case "Stuck":
              status = migration.status;
              statusStyle = { color: "red" };
              break;
            default:
              status = "Not Started";
              statusStyle = { color: "red" };
          }
          return (
            <div key={migration.app_name}>
              <Link to={"/migration/" + migration.app_name}>
                {migration.app_name}
              </Link>{" "}
              <span style={statusStyle}>{status}</span>
            </div>
          );
        })}
      </>
    );
  }
}

DashboardMigrationsList.propTypes = {
  migrations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    migrations: state.migrations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(migrationActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardMigrationsList);
