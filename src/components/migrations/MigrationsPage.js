import React from "react";
import { connect } from "react-redux";
import * as migrationActions from "../../redux/actions/migrationActions";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class MigrationsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadMigrations().catch((error) => {
      alert("Loading migrations failed" + error);
    });
  }

  render() {
    return (
      <>
        <h5>Migrations</h5>
        {this.props.migrations.map((migration) => (
          <div key={migration.app_name}>{migration.app_name}</div>
        ))}
      </>
    );
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
