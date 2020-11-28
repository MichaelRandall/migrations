import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const MigrationForm = ({ migration, members, onSave }) => {
  return (
    <form onSubmit={onSave}>
      <h5>{migration.migration_id ? "Edit" : "Add"} Migration</h5>
    </form>
  );
};

export default MigrationForm;
