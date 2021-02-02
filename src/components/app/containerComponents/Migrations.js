import React, { useEffect } from "react";

//Vendor
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

//Redux
import { connect } from "react-redux";
import { getMigrations } from "../../../redux/actions/migrationsActions";

//Custom Methods
import { migrationColorCode } from "../../../dist/js/support";

function Migrations({ getMigrations, migrations }) {
  //Step 1. On mount load data
  useEffect(() => {
    getMigrations();
  }, []);

  return (
    <ListGroup>
      <ListGroup.Item key="list-header-0">Current Migrations</ListGroup.Item>
      {migrations.map((props, i) => {
        if (props.status !== "Complete") {
          return (
            <ListGroup.Item
              key={`migration-${i}`}
              style={{ borderLeft: migrationColorCode(props.status) }}
            >
              <Link to={`/migration/${props.app_name}`}>{props.app_name}</Link>
            </ListGroup.Item>
          );
        }
      })}
    </ListGroup>
  );
}

function mapStateToProps(state) {
  return {
    migrations: state.app.migrations,
  };
}

const mapDispatchToProps = {
  getMigrations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Migrations);
