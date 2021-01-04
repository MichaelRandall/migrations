import React, { Suspense } from "react";

//Custom Components
const MigrationForm = React.lazy(() => import("../containerComponents/Form"));

//Custom CSS
import "./style.css";

function Management(props) {
  return <MigrationForm name={props.match.params.name} />;
}

export default Management;
