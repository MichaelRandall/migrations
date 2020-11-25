import React from "react";
import { connect } from "react-redux";
import * as memberActions from "../../redux/actions/memberActions";
import { bindActionCreators } from "redux";
import "./members.css";
import MemberList from "./MemberList";
import MemberDetails from "./MemberDetails";

import PropTypes from "prop-types";

class MembersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadMembers().catch((error) => {
      alert("Loading members failed" + error);
    });
  }

  handleMemberHover = ({ member }) => {
    alert(member.name);
  };

  render() {
    return (
      <>
        <h5>Members</h5>
        {/* <div id="members_display"> */}
        <div>
          <MemberList
            members={this.props.members}
            handleMemberHover={this.handleMemberHover}
          />
        </div>

        {/* <MemberDetails /> */}
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
