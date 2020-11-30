import React from "react";
import { connect } from "react-redux";
import * as migrationActions from "../../redux/actions/migrationActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import MigrationList from "./MigrationList";

import PropTypes from "prop-types";

class MigrationsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadMigrations().catch((error) => {
      alert("Loading migrations failed" + error);
    });
  }

  render() {
    return <MigrationList migrations={this.props.migrations} />;
  }
}

MigrationsPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MigrationsPage);
