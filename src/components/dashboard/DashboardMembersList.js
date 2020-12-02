import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const DashboardMembersList = ({
  members,
  handleMemberEnter,
  handleMemberLeave,
}) => {
  return (
    <>
      {members.map((member) => {
        return (
          <div
            className="avatar_box"
            key={member.id}
            onMouseEnter={(event) => {
              event.preventDefault();
              handleMemberEnter(member);
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              handleMemberLeave(member);
            }}
          >
            <img className="avatar" src={member.pic} alt={member.sname} />
          </div>
        );
      })}
    </>
  );
};

DashboardMembersList.propTypes = {
  members: PropTypes.array.isRequired,
  handleMemberEnter: PropTypes.func.isRequired,
  handleMemberLeave: PropTypes.func.isRequired,
};

export default DashboardMembersList;
