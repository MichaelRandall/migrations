import React, { useEffect, useState } from "react";

//Vendor
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Redux
import { connect } from "react-redux";
import {
  createMigrationAction,
  resetMigrationAction,
  updateMigrationAction
} from "../../../redux/actions/migrationActions";

function MigrationForm({
  createMigrationAction,
  members,
  migration,
  resetMigrationAction,
  updateMigrationAction
}) {
  const [error, setError] = useState(false);
  //Step 1. Reset migration on unmount
  useEffect(() => {
    return () => resetMigrationAction();
  }, []);

  const actions = {
    error: e => useState(e),
    save: details => {
      console.log(details);
      let executionMethod = details.id
        ? updateMigrationAction
        : createMigrationAction;

      executionMethod({ ...migration, ...details });
    }
  };

  return (
    <Form onSubmit={actions.save} onError={actions.error}>
      <h2>{migration.id ? "Edit" : "Add"} Migration</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Form.Group>
        <Form.Label>App Name</Form.Label>
        <Form.Control name="app_name" placeholder="Something Simple..." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Member</Form.Label>
        <Form.Control as="select" name="ownerId">
          {members.map((props, i) => (
            <option key={`member-${i}`} value={props.id}>
              {props.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" className="btn btn-primary">
        Save
      </Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    members: state.member.data,
    migration: state.app.migration
  };
}

const mapDispatchToProps = {
  createMigrationAction,
  resetMigrationAction,
  updateMigrationAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationForm);
