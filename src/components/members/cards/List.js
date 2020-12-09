import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getMembersAction } from "../../../redux/actions/memberActions";

function MembersList({ getMembersAction, data }) {
  useEffect(() => {
    getMembersAction();
  }, []);

  return (
    <table className="table table_format">
      <thead>
        <tr>
          <th>Member</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data1) => {
          return (
            <tr key={data1.id}>
              <td>{data1.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // return members.map((member, i) => (
  //   <OverlayTrigger
  //     key={`user-avatar-${i}`}
  //     overlay={
  //       <Popover>
  //         <Popover.Title>{member.sname}</Popover.Title>
  //         <Popover.Content>Something</Popover.Content>
  //       </Popover>
  //     }
  //     trigger="hover"
  //   >
  //     <Image
  //       className="avatar"
  //       src={member.pic}
  //       alt={member.sname}
  //       roundedCircle
  //     />
  //   </OverlayTrigger>
  // ));
}

// state.migrations uses js reduce function
function mapStateToProps(state) {
  return {
    members: state.app.data,
  };
}

const mapDispatchToProps = {
  getMembersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
