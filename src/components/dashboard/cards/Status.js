import React, { useEffect, useRef, useState } from "react";

//Vendor
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Redux
import { connect } from "react-redux";

//Custom Components
import Column from "../charts/Column";

function Status({ migrations, members }) {
  const [height, setHeight] = useState(350);
  const cardRef = useRef();

  //Step 1. Onmount, determine size of bar chart based on screen size
  useEffect(() => {
    let height = cardRef.current.offsetWidth * 0.4;
    setHeight(height < 200 ? 200 : height);
  }, []);

  const byStatus = migrations.reduce((p, c) => {
    let status = c.status;
    if (!p.hasOwnProperty(status)) p[status] = 0;
    p[status]++;
    return p;
  }, {});

  const byMember = migrations.reduce((p, c) => {
    let owner = members.find(m => m.id === c.migration_ownerId);
    if (!p.hasOwnProperty(owner.sname)) p[owner.sname] = 0;
    p[owner.sname]++;
    return p;
  }, {});

  console.log(height);

  return (
    <Row>
      <Col>
        <Card className="flex-center" ref={cardRef}>
          <Card.Body style={{ minHeight: 300 }}>
            <Card.Title>Migrations by Status</Card.Title>
            <Column
              height={height}
              labels={Object.keys(byStatus)}
              values={Object.values(byStatus)}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="flex-center">
          <Card.Body style={{ minHeight: 300 }}>
            <Card.Title>Migrations by Member</Card.Title>
            <Column
              height={height}
              labels={Object.keys(byMember)}
              values={Object.values(byMember)}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

function mapStateToProps(state) {
  return {
    migrations: state.app.migrations,
    members: state.member.data
  };
}

export default connect(mapStateToProps)(Status);
