import React, { useEffect, useState } from "react";

//Redux
import { connect } from "react-redux";
import { getMigrationAction } from "../../../redux/actions/migrationActions";

function MigrationForm({ getMigrationAction, migration, name }) {
  const [details, setDetails] = useState(migration || {});
  console.log("DOES NAME COME THROUGH: " + name);
  console.log("THIS IS MIGRATION " + JSON.stringify(migration));
  console.log("THIS IS DETAILS " + JSON.stringify(details));

  useEffect((name) => {
    // console.log("THIS WORKS");
    console.log("WHERE IS NAME: " + name);
    return () => getMigrationAction(name);
  }, []);

  return (
    <>
      <h2>{name}</h2>
      <p>{migration.app_name}</p>
    </>
  );
}

function mapStateToProps(state) {
  return {
    migration: state.app.migration,
  };
}

const mapDispatchToProps = {
  getMigrationAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationForm);
