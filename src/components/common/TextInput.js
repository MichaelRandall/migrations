import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  migration_id,
  migration_owner,
  migration_type,
  os,
  app_name,
  onChange,
  placeholder,
  value,
  error,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className="field">
      <input
        type="text"
        owner={migration_owner}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
