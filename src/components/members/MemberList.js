import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import "./members.css";

const MemberList = ({ members, handleMemberHover }) => {
  return (
    <>
      <div className="members_container">
        {members.map((member) => {
          return (
            <div
              key={member.id}
              className="card text-black border-0"
              style={{ width: 60 }}
              onMouseOver={() => {
                event.preventDefault();
                handleMemberHover({ member });
              }}
            >
              <img
                className="card-img-top img-rounded"
                src={member.pic}
                alt={member.sname}
                style={{ width: 50, margin: "auto" }}
              />
              {/* <a href="www.google.com" className="card-link stretched-link" /> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  handleMemberHover: PropTypes.func.isRequired,
};

export default MemberList;
