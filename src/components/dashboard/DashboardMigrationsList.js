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
              statusStyle = {
                borderLeft: "solid red 8px",
              };
              break;
            case "In-Progress":
              status = migration.status;
              statusStyle = {
                borderLeft: "solid yellow 8px",
              };
              break;
            case "Complete":
              status = migration.status;
              statusStyle = {
                borderLeft: "solid green 8px",
              };
              break;
            case "Stuck":
              status = migration.status;
              statusStyle = {
                borderLeft: "solid red 8px",
              };
              break;
            default:
              status = "Not Started";
              statusStyle = {
                borderLeft: "solid red 8px",
              };
          }
          return (
            <div
              className="migration_items_holder"
              key={migration.app_name}
              style={statusStyle}
            >
              <Link to={"/migration/" + migration.app_name}>
                {migration.app_name}
              </Link>{" "}
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
