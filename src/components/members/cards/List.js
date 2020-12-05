import React from "react";

//Vendor
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function MembersList({ members }) {
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

export default MembersList;
