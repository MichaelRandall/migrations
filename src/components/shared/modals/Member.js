import React, { useEffect, useState } from "react";

//Vendor
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Redux
import { connect } from "react-redux";
import toggleAction from "../../../redux/actions/toggleActions";
// import {
//   createMemberAction,
//   resetMemberAction,
//   updateMemberAction,
// } from "../../../redux/actions/memberActions";

function MemberModal({
  // createMemberAction,
  member,
  // members,
  // resetMemberAction,
  show,
  toggleAction,
  // updateMemberAction,
}) {
  const [details, setDetails] = useState(member || {});

  //Step 1. Reset migration on unmount
  // useEffect(() => {
  //   return () => resetMemberAction();
  // }, []);

  //Step 2. Override local state when new migration is passed.
  useEffect(() => {
    setDetails(member);
  }, [member.id]);

  // actions used by the onSubmit event of the form
  const actions = {
    error: (e) => console.log(e),
    // save: () => {
    //   let executionMethod = details.id
    //     ? updateMemberAction
    //     : createMemberAction;
    //   executionMethod({ ...member, ...details });
    // },
    toggle: () => toggleAction({ details: {}, resource: "member-modal" }),
    update: ({ target }) => {
      setDetails({ ...details, [target.name]: target.value });
    },
  };

  return (
    <Modal onHide={actions.toggle} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>
          Member - {member.first_name} {member.last_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onError={actions.error} onSubmit={actions.save}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              onChange={actions.update}
              placeholder="John"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              onChange={actions.update}
              placeholder="Smith"
            />
          </Form.Group>
          <div className="flex-row">
            <Button className="btn btn-default">Cancel</Button>
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    member: state.member.details,
    members: state.member.data,
    show: state.toggle.memberModal,
  };
}

const mapDispatchToProps = {
  // createMemberAction,
  // resetMemberAction,
  toggleAction,
  // updateMemberAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberModal);
