import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const MemberList = ({ members, handleMemberHover }) => {
  return (
    <>
      {members.map((member) => {
        return (
          <div
            className="avatar_box"
            key={member.id}
            onMouseOver={(event) => {
              event.preventDefault();
              handleMemberHover(member);
            }}
          >
            <img className="avatar" src={member.pic} alt={member.sname} />
          </div>
        );
      })}
    </>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  handleMemberHover: PropTypes.func.isRequired,
};

export default MemberList;
