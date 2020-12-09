import React, { useEffect } from "react";

//Vendor
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//Redux
import { connect } from "react-redux";
import { getMembersAction } from "../../../redux/actions/memberActions";

// function MembersList({ getMembersAction, data }) {
function MemberList({ members }) {
  useEffect(() => {
    getMembersAction();
  }, []);

  return members.map((member, i) => (
    <OverlayTrigger
      key={`user-avatar-${i}`}
      overlay={
        <Popover>
          <Popover.Title>{member.sname}</Popover.Title>
          <Popover.Content>{member.alias}</Popover.Content>
        </Popover>
      }
      trigger="hover"
    >
      <Image
        className="avatar"
        src={member.pic}
        alt={member.sname}
        roundedCircle
      />
    </OverlayTrigger>
  ));
}

// state.migrations uses js reduce function
function mapStateToProps(state) {
  return {
    members: state.member.data,
  };
}

const mapDispatchToProps = {
  getMembersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
