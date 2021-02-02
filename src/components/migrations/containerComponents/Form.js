import React, { useEffect, useState } from "react";

//Vendor
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Redux
import { connect } from "react-redux";
// import {
//   createMigrationAction,
//   resetMigrationAction,
//   updateMigrationAction,
// } from "../../../redux/actions/migrationsActions";

function MigrationForm({
  // createMigrationAction,
  members,
  migration,
  // resetMigrationAction,
  // updateMigrationAction,
}) {
  // const [error, setError] = useState(false);
  const [details, setDetails] = useState(migration || {});

  console.log("THESE ARE DETAILS " + JSON.stringify(details));

  //Step 1. Reset migration on unmount
  // useEffect(() => {
  //   return () => resetMigrationAction();
  // }, []);

  //Step 2. Override local state when new migration is passed.
  useEffect(() => {
    setDetails(migration);
  }, [migration.id]);

  // actions used by the onSubmit event of the form
  const actions = {
    error: (e) => {
      useState(e);
    },
    // Where are details coming from?
    // Save checks if details.id has a value and if does, the executionMethod is set to updateMigrationAction
    // If details.id is null or empty, the createMigrationAction is assigned to executionMethod
    // Then the executionMethod (createMigrationActions) function is called with spread migration and spread details
    // At this point, details should have values from the form in it????
    // save: () => {
    //   let executionMethod = details.id
    //     ? createMigrationAction
    //     : createMigrationAction;
    //   executionMethod({ ...migration, ...details });
    // },
    update: ({ target }) => {
      setDetails({ ...details, [target.name]: target.value });
    },
  };

  return (
    <Form onSubmit={actions.save}>
      <h2>{migration.id ? "Edit" : "Add"} Migration</h2>
      {
        <div className="alert alert-danger" role="alert">
          Good stuff
        </div>
      }
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
      <Button type="submit" className="btn btn-primary">
        Save
      </Button>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    members: state.member.data,
    migration: state.app.migration,
  };
}

// const mapDispatchToProps = {
//   createMigrationAction,
//   resetMigrationAction,
//   updateMigrationAction,
// };

export default connect(mapStateToProps)(MigrationForm);