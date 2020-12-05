import React, { Suspense } from "react";

//Vendor
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Custom Components
const MigrationForm = React.lazy(() => import("../cards/Form"));

//Custom CSS
import "./style.css";

function Management() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Migrations Management</h1>
        </Col>
      </Row>
      <Suspense fallback={<>...</>}>
        <Row>
          <Col sm={12}>
            <MigrationForm />
          </Col>
        </Row>
      </Suspense>
    </Container>
  );
}

export default Management;
