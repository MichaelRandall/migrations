import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

// note: name of text input corresponds to the property for example: name=app_name, value=migration.app_name
const MigrationForm = ({
  migration,
  members,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{migration.id ? "Edit" : "Add"} Migration</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="app_name"
        label="App Name"
        value={migration.app_name}
        onChange={onChange}
        error={errors.app_name}
      />
      <SelectInput
        name="ownerId"
        label="Member"
        value={members.id || ""}
        defaultOption="Select Member"
        options={members.map((member) => ({
          value: member.id,
          text: member.name,
        }))}
        onChange={onChange}
        error={errors.member}
      />

      {/* <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      /> */}

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

MigrationForm.propTypes = {
  members: PropTypes.array.isRequired,
  migration: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default MigrationForm;
