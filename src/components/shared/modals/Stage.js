import React, { useEffect, useState } from "react";

//Vendor
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Redux
import { connect } from "react-redux";
import toggleAction from "../../../redux/actions/toggleActions";
import {
  getStagesAction,
  resetStagesAction,
  updateStagesAction
} from "../../../redux/actions/stageActions";

function StageModal({
  getStagesAction,
  stage,
  stages,
  resetStageAction,
  show,
  toggleAction,
  updateStageAction
}) {
  const [details, setDetails] = useState(stage || {});

  //Step 1. Reset migration on unmount
  useEffect(() => {
    return () => resetStageAction();
  }, []);

  //Step 2. Override local state when new migration is passed.
  useEffect(() => {
    setDetails(stage);
  }, [stage.id]);

  // actions used by the onSubmit event of the form
  const actions = {
    error: e => console.log(e),
    save: () => {
      let executionMethod = details.id ? updateStagesAction : getStagesAction;
      executionMethod({ ...stage, ...details });
    },
    toggle: () => toggleAction({ details: {}, resource: "stage-modal" }),
    update: ({ target }) => {
      setDetails({ ...details, [target.name]: target.value });
    }
  };

  return (
    <Modal onHide={actions.toggle} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>
          stage - {stage.first_name} {stage.last_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onError={actions.error} onSubmit={actions.save}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              onChange={actions.update}
              placeholder="John"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              onChange={actions.update}
              placeholder="Smith"
            />
          </Form.Group>
          <div className="flex-row">
            <Button className="btn btn-default">Cancel</Button>
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    stage: state.stage.details,
    stages: state.stage.data,
    show: state.toggle.stageModal
  };
}

const mapDispatchToProps = {
  getStagesAction,
  resetStagesAction,
  toggleAction,
  updateStagesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(StageModal);
