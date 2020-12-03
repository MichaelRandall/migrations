import React from "react";
import { connect } from "react-redux";
import * as memberActions from "../../redux/actions/memberActions";
import * as migrationActions from "../../redux/actions/migrationActions";
import { bindActionCreators } from "redux";
import DashboardMembersList from "./DashboardMembersList";

import PropTypes from "prop-types";

class DashboardMembers extends React.Component {
  componentDidMount() {
    const { members, migrations, actions } = this.props;
    if (members.length === 0) {
      actions.loadMembers().catch((error) => {
        alert("Loading members failed" + error);
      });
    }

    if (migrations.length === 0) {
      actions.loadMigrations().catch((error) => {
        alert("Loading migrations failed" + error);
      });
    }
  }

  handleMemberEnter = (member) => {
    // event.target.style.border = "black";
    const myString = `${member.name} \n Migrations: ${member.migrations}`;
    document.getElementById("members_details").innerText = myString;
  };

  // handleMemberLeave = (event, member) => {
  //   event.target.style.border = "Red";
  //   const myString = `Name: ${member.name} \n Migrations: ${member.migrations}`;
  //   document.getElementById("members_details").innerText = myString;
  // };

  render() {
    return (
      <DashboardMembersList
        members={this.props.members}
        handleMemberEnter={this.handleMemberEnter}
      />
    );
  }
}

DashboardMembers.propTypes = {
  members: PropTypes.array.isRequired,
  migrations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// state.migrations uses js reduce function
function mapStateToProps(state) {
  return {
    members: state.members.map((member) => {
      return {
        ...member,
        migrations: state.migrations.reduce(
          (acc, cur) => (cur.migration_ownerId === member.id ? ++acc : acc),
          0
        ),
      };
    }),
    migrations: state.migrations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMembers: bindActionCreators(memberActions.loadMembers, dispatch),
      loadMigrations: bindActionCreators(
        migrationActions.loadMigrations,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMembers);
