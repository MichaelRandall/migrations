import React from "react";

//Vendor
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>About</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>
            This web application tracks the status of migrations from
            on-premises or from IL2 to the IL4 environment. This app was created
            using React, Redux, React Router, and other helpful libraries.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
