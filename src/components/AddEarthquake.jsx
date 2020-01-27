import React, { memo } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addId,
  addMag,
  addPlace,
  addTime,
  addMoreInfo,
  addLat,
  addLong,
  submitAddData
} from "../store/actionCreators";

const AddEarthquakeWrapper = styled.div`
  margin: 30px 0;
  width: 100%;
`;

const StyledAddEarthquake = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const AddEarthquake = memo(
  ({
    addData,
    addIdHandler,
    addMagHandler,
    addPlaceHandler,
    addTimeHandler,
    addMoreInfoHandler,
    addLatHandler,
    addLongHandler,
    addSubmit
  }) => {
    return (
      <AddEarthquakeWrapper>
        <StyledAddEarthquake>
          <Form>
            <Form.Group controlId="ID">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" onChange={addIdHandler} />
            </Form.Group>
            <Form.Group controlId="Magnitude">
              <Form.Label>Magnitude</Form.Label>
              <Form.Control type="text" onChange={addMagHandler} />
            </Form.Group>
            <Form.Group controlId="Place">
              <Form.Label>Place</Form.Label>
              <Form.Control type="text" onChange={addPlaceHandler} />
            </Form.Group>
            <Form.Group controlId="Time">
              <Form.Label>Time</Form.Label>
              <Form.Control type="text" onChange={addTimeHandler} />
            </Form.Group>
            <Form.Group controlId="MoreInfo">
              <Form.Label>MoreInfo</Form.Label>
              <Form.Control type="text" onChange={addMoreInfoHandler} />
            </Form.Group>
            <Form.Group controlId="Lat">
              <Form.Label>Lat</Form.Label>
              <Form.Control type="text" onChange={addLatHandler} />
            </Form.Group>
            <Form.Group controlId="Long">
              <Form.Label>Long</Form.Label>
              <Form.Control type="text" onChange={addLongHandler} />
            </Form.Group>
            <Button type="submit" onClick={() => addSubmit(addData)}>
              Submit form
            </Button>
          </Form>
        </StyledAddEarthquake>
      </AddEarthquakeWrapper>
    );
  }
);

const mapStateToProps = state => {
  return {
    addData: state.get("addData")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIdHandler(e) {
      dispatch(addId(e.target.value));
    },
    addMagHandler(e) {
      dispatch(addMag(e.target.value));
    },
    addPlaceHandler(e) {
      dispatch(addPlace(e.target.value));
    },
    addTimeHandler(e) {
      dispatch(addTime(e.target.value));
    },
    addMoreInfoHandler(e) {
      dispatch(addMoreInfo(e.target.value));
    },
    addLatHandler(e) {
      dispatch(addLat(e.target.value));
    },
    addLongHandler(e) {
      dispatch(addLong(e.target.value));
    },
    addSubmit(data) {
      dispatch(submitAddData(data));
    }
  };
};

AddEarthquake.propTypes = {
  addData: PropTypes.object.isRequired,
  addIdHandler: PropTypes.func.isRequired,
  addMagHandler: PropTypes.func.isRequired,
  addPlaceHandler: PropTypes.func.isRequired,
  addTimeHandler: PropTypes.func.isRequired,
  addMoreInfoHandler: PropTypes.func.isRequired,
  addLatHandler: PropTypes.func.isRequired,
  addLongHandler: PropTypes.func.isRequired,
  addSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEarthquake);
