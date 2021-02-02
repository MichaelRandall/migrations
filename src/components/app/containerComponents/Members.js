import React, { useEffect } from "react";

//Vendor
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//Redux
import { connect } from "react-redux";
import { getMembers } from "../../../redux/actions/membersActions";
import { getMigrations } from "../../../redux/actions/migrationsActions";

function Members({ getMembersAction, getMigrationsAction, members }) {
  //Step 1. Startup Actions
  useEffect(() => {
    getMembersAction();
    getMigrationsAction();
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
        trigger={["hover", "hover"]}
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
    members: state.member.data.map((member) => {
      return {
        ...member,
        migrations: state.app.migrations.reduce(
          (a, b) => (b.migration_ownerId === member.id ? ++a : a),
          0
        ),
      };
    }),
  };
}

const mapDispatchToProps = {
  getMembers,
  getMigrations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
