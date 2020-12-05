import React from "react";

//Vendor
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Custom Components
const Migrations = React.lazy(() => import("../cards/Migrations"));
const Members = React.lazy(() => import("../cards/Members"));
const Status = React.lazy(() => import("../cards/Status"));

//Custom CSS
import "./style.css";

const DashboardPage = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <h1>SSI Migrations</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Members />
      </Col>
      <Col xs={12} sm={6}>
        <Migrations />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Status />
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;
