import React, { Suspense } from "react";

//Vendor
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Custom Components
import MigrationsList from "../cards/List";

import "./style.css";

function Migrations() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Migrations List</h1>
        </Col>
      </Row>
      <Suspense fallback={<>...</>}>
        <Row>
          <Col sm={12}>
            <MigrationsList />
          </Col>
        </Row>
      </Suspense>
    </Container>
  );
}

export default Migrations;
