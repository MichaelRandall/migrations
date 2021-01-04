import React, { useEffect, useState } from "react";

//Redux
import { connect } from "react-redux";
import { getMigrationAction } from "../../../redux/actions/migrationActions";

function MigrationForm({ getMigrationAction, migration, name }) {
  const [details, setDetails] = useState(migration || {});
  console.log(details);

  useEffect((name) => {
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
