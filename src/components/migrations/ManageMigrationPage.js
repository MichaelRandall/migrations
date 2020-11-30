import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadMigrations,
  saveMigration,
} from "../../redux/actions/migrationActions";
import * as memberActions from "../../redux/actions/memberActions";
import PropTypes from "prop-types";
import MigrationForm from "./MigrationForm";
import { newMigration } from "../../../tools/mockData";

function ManageMigrationPage({
  migrations,
  members,
  loadMembers,
  loadMigrations,
  saveMigration,
  ...props
}) {
  //local state defined, not redux state
  const [migration, setMigration] = useState({ ...props.migration });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (migrations.length === 0) {
      loadMigrations().catch((error) => {
        alert("Loading migrations failed" + error);
      });
    }

    if (members.length === 0) {
      loadMembers().catch((error) => {
        alert("Loading members failed" + error);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMigration((prevMigration) => ({
      ...prevMigration,
      [name]: name === "ownerId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveMigration(migration);
  }

  return (
    <MigrationForm
      migration={migration}
      errors={errors}
      members={members}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageMigrationPage.propTypes = {
  migration: PropTypes.object.isRequired,
  migrations: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  loadMigrations: PropTypes.func.isRequired,
  loadMembers: PropTypes.func.isRequired,
  saveMigration: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    migration: newMigration,
    migrations: state.migrations,
    members: state.members,
  };
}

const mapDispatchToProps = {
  loadMigrations,
  loadMembers: memberActions.loadMembers,
  saveMigration,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageMigrationPage);
