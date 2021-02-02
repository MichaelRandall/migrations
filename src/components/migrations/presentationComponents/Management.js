import React, { Suspense } from "react";

//Custom Components
const MigrationForm = React.lazy(() => import("../containerComponents/Form"));

//Custom CSS
import "./style.css";

// This page should display a list of status for the migration

function Management(props) {
  return <MigrationForm name={props.match.params.name} />;
}

export default Management;
