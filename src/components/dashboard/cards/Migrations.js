import React, { useEffect } from "react";

//Vendor
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

//Redux
import { connect } from "react-redux";
import { getMigrationsAction } from "../../../redux/actions/migrationActions";

//Custom Methods
import { migrationColorCode } from "../../../dist/js/support";

function Migrations({ getMigrationsAction, migrations }) {
  //Step 1. On mount load data
  useEffect(() => {
    getMigrationsAction();
  }, []);

  return (
    <ListGroup>
      <ListGroup.Item key="list-header-0">Migrations</ListGroup.Item>
      {migrations.map((props, i) => (
        <ListGroup.Item
          key={`migration-${i}`}
          style={{ borderLeft: migrationColorCode(props.status) }}
        >
          <Link to={`/migration/${props.app_name}`}>{props.app_name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function mapStateToProps(state) {
  return {
    migrations: state.app.migrations
  };
}

const mapDispatchToProps = {
  getMigrationsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Migrations);
