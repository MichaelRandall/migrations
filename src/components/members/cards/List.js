import React, { useEffect } from "react";

//Vendor
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//Redux
import { connect } from "react-redux";
import { getMembersAction } from "../../../redux/actions/memberActions";

function MembersList({ getMembersAction, members }) {
  useEffect(() => {
    getMembersAction();
  }, []);

  return members.map((props, i) => (
    <OverlayTrigger
      key={`user-avatar-${i}`}
      overlay={
        <Popover>
          <Popover.Title>{props.sname}</Popover.Title>
          <Popover.Content>Something</Popover.Content>
        </Popover>
      }
      trigger="hover"
    >
      <Image
        className="avatar"
        src={props.pic}
        alt={props.sname}
        roundedCircle
      />
    </OverlayTrigger>
  ));
}

// state.migrations uses js reduce function
function mapStateToProps({ members }) {
  return {
    members: members,
  };
}

const mapDispatchToProps = {
  getMembersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
