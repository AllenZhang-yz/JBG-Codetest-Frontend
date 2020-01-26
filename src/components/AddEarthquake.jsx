import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

const AddEarthquake = ({
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
            <Form.Control
              type="text"
              // value={addData.id}
              onChange={addIdHandler}
            />
          </Form.Group>
          <Form.Group controlId="Magnitude">
            <Form.Label>Magnitude</Form.Label>
            <Form.Control
              type="text"
              // value={addData.properties.mag}
              onChange={addMagHandler}
            />
          </Form.Group>
          <Form.Group controlId="Place">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              // value={addData.properties.place}
              onChange={addPlaceHandler}
            />
          </Form.Group>
          <Form.Group controlId="Time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              // value={addData.properties.time}
              onChange={addTimeHandler}
            />
          </Form.Group>
          <Form.Group controlId="MoreInfo">
            <Form.Label>MoreInfo</Form.Label>
            <Form.Control
              type="text"
              // value={addData.properties.title}
              onChange={addMoreInfoHandler}
            />
          </Form.Group>
          <Form.Group controlId="Lat">
            <Form.Label>Lat</Form.Label>
            <Form.Control
              type="text"
              // value={addData.geometry.coordinates[0]}
              onChange={addLatHandler}
            />
          </Form.Group>
          <Form.Group controlId="Long">
            <Form.Label>Long</Form.Label>
            <Form.Control
              type="text"
              // value={addData.geometry.coordinates[1]}
              onChange={addLongHandler}
            />
          </Form.Group>
          <Button type="submit" onClick={() => addSubmit(addData)}>
            Submit form
          </Button>
        </Form>
      </StyledAddEarthquake>
    </AddEarthquakeWrapper>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AddEarthquake);
