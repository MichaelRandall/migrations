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
      placement="right"
      key={`user-avatar-${i}`}
      overlay={
        <Popover>
          <Popover.Title>Identity</Popover.Title>
          <Popover.Content>
            {member.sname}: {member.alias}
          </Popover.Content>
        </Popover>
      }
      trigger={["hover", "hover"]}
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
