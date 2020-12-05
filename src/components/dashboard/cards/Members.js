import React, { useEffect } from "react";

//Vendor
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//Redux
import { connect } from "react-redux";
import { getMembersAction } from "../../../redux/actions/memberActions";
import { getMigrationAction } from "../../../redux/actions/migrationActions";

function Members({ getMembersAction, getMigrationAction, members }) {
  //Step 1. Startup Actions
  useEffect(() => {
    getMembersAction();
    getMigrationAction();
  }, []);

  return members.map((props, i) => (
    <div className="flex-row flex-left" key={`user-${i}`}>
      <OverlayTrigger
        overlay={
          <Popover>
            <Popover.Content>
              <p className="m-0">Name: {props.sname}</p>
              <p className="m-0">Alias: {props.alias}</p>
            </Popover.Content>
          </Popover>
        }
        placement="right"
        trigger="hover"
      >
        <Image
          alt={props.sname}
          className="avatar"
          roundedCircle
          src={props.pic}
          style={{ marginRight: 10, width: "30px" }}
        />
      </OverlayTrigger>

      <div className="">{props.sname}</div>
    </div>
  ));
}

// state.migrations uses js reduce function
function mapStateToProps(state) {
  return {
    members: state.member.data.map(member => {
      return {
        ...member,
        migrations: state.app.migrations.reduce(
          (a, b) => (b.migration_ownerId === member.id ? ++a : a),
          0
        )
      };
    })
  };
}

const mapDispatchToProps = {
  getMembersAction,
  getMigrationAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
