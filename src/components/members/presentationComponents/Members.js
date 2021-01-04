import React, { Suspense } from "react";

//Vendor
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Custom Components
const MembersList = React.lazy(() => import("../cards/List"));

//Custom CSS
import "./style.css";

function Members() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Members List</h1>
        </Col>
      </Row>
      <Suspense fallback={<>...</>}>
        <Row>
          <Col sm={12}>
            <MembersList />
          </Col>
        </Row>
      </Suspense>
    </Container>
  );
}

export default Members;
