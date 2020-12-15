import React, { useEffect, useState } from "react";

//Vendor
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Redux
import { connect } from "react-redux";
import toggleAction from "../../../redux/actions/toggleActions";
import {
  createMigrationAction,
  resetMigrationAction,
  updateMigrationAction
} from "../../../redux/actions/migrationActions";

function MigrationModal({
  createMigrationAction,
  members,
  migration,
  resetMigrationAction,
  show,
  toggleAction,
  updateMigrationAction
}) {
  const [details, setDetails] = useState(migration || {});

  //Step 1. Reset migration on unmount
  useEffect(() => {
    return () => resetMigrationAction();
  }, []);

  //Step 2. Override local state when new migration is passed.
  useEffect(() => {
    setDetails(migration);
  }, [migration.id]);

  // actions used by the onSubmit event of the form
  const actions = {
    error: e => console.log(e),
    save: () => {
      let executionMethod = details.id
        ? updateMigrationAction
        : createMigrationAction;
      executionMethod({ ...migration, ...details });
    },
    toggle: () => toggleAction({ details: {}, resource: "migration-modal" }),
    update: ({ target }) => {
      setDetails({ ...details, [target.name]: target.value });
    }
  };

  return (
    <Modal onHide={actions.toggle} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Migration - {migration.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onError={actions.error} onSubmit={actions.save}>
          <Form.Group>
            <Form.Label>App Name</Form.Label>
            <Form.Control
              name="app_name"
              onChange={actions.update}
              placeholder="Something Simple..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Member</Form.Label>
            <Form.Control as="select" name="ownerId" onChange={actions.update}>
              {members.map((props, i) => (
                // loop members each option gets member index as key with value of props.id and props.name
                <option key={`member-${i}`} value={props.id}>
                  {props.name}
                </option>
              ))}
            </Form.Control>
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
    members: state.member.data,
    migration: state.app.migration,
    show: state.toggle.migrationModal
  };
}

const mapDispatchToProps = {
  createMigrationAction,
  resetMigrationAction,
  toggleAction,
  updateMigrationAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationModal);
