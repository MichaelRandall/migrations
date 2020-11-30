import React from "react";
import { connect } from "react-redux";
import * as memberActions from "../../redux/actions/memberActions";
import { bindActionCreators } from "redux";
import MemberList from "./MemberList";

import PropTypes from "prop-types";

class MembersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadMembers().catch((error) => {
      alert("Loading members failed" + error);
    });
  }

  handleMemberHover = (member) => {
    document.getElementById("members_details").innerText = member.name;
  };

  render() {
    return (
      <>
        <MemberList
          members={this.props.members}
          handleMemberHover={this.handleMemberHover}
        />
      </>
    );
  }
}

MembersPage.propTypes = {
  members: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    members: state.members,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersPage);
