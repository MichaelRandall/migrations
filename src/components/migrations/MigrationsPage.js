import React from "react";
import { connect } from "react-redux";
import * as migrationActions from "../../redux/actions/migrationActions";
import * as memberActions from "../../redux/actions/memberActions";
import { bindActionCreators } from "redux";
import MigrationList from "./MigrationList";
import "./Migrations.css";

import PropTypes from "prop-types";

class MigrationsPage extends React.Component {
  componentDidMount() {
    const { migrations, members, actions } = this.props;
    if (migrations.length === 0) {
      actions.loadMigrations().catch((error) => {
        alert("Loading migrations failed" + error);
      });
    }

    if (members.length === 0) {
      actions.loadMembers().catch((error) => {
        alert("Loading members failed" + error);
      });
    }
  }

  render() {
    return <MigrationList migrations={this.props.migrations} />;
  }
}

MigrationsPage.propTypes = {
  migrations: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    migrations:
      state.members.length === 0
        ? []
        : state.migrations.map((migration) => {
            return {
              ...migration,
              ownerName: state.members.find(
                (a) => a.id === migration.migration_ownerId
              ).name,
            };
          }),
    members: state.members,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMigrations: bindActionCreators(
        migrationActions.loadMigrations,
        dispatch
      ),
      loadMembers: bindActionCreators(memberActions.loadMembers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MigrationsPage);
