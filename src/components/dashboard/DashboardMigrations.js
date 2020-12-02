import React from "react";
import { connect } from "react-redux";
import * as migrationActions from "../../redux/actions/migrationActions";
import { bindActionCreators } from "redux";
import DashboardMigrationsList from "./DashboardMigrationsList";

import PropTypes from "prop-types";

class DashboardMigrations extends React.Component {
  componentDidMount() {
    if (this.props.migrations.length === 0) {
      this.props.actions.loadMigrations().catch((error) => {
        alert("Loading migrations failed" + error);
      });
    }
  }

  render() {
    return <DashboardMigrationsList migrations={this.props.migrations} />;
  }
}

DashboardMigrations.propTypes = {
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
)(DashboardMigrations);
