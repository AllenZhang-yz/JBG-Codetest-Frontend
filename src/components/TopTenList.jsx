import React, { useEffect, memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import dayjs from "dayjs";
import {
  getTopTenList,
  toggleEditMode,
  storeEditData,
  changeMag,
  changeMoreInfo,
  changeLat,
  changeLong,
  submitEditedData
} from "../store/actionCreators";

const TopTenListWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const StyledTopTenList = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const EditTd = styled.td`
  cursor: pointer;
  color: #909af5;
  :hover {
    color: #283ced;
  }
`;

const TopTenList = memo(
  ({
    topTenList,
    loadTopTenList,
    showEditHandler,
    showEdit,
    editData,
    changeMagHandler,
    changeMoreInfoHandler,
    changeLatHandler,
    changeLongHandler,
    editSubmit
  }) => {
    useEffect(() => {
      loadTopTenList();
    }, [loadTopTenList]);
    return (
      <TopTenListWrapper>
        <StyledTopTenList>
          {!showEdit && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Magnitude</th>
                  <th>Place</th>
                  <th>Time</th>
                  <th>More info</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {topTenList.map(item => (
                  <tr key={item._id}>
                    <td>{item.id}</td>
                    <td>{item.properties.mag}</td>
                    <td>{item.properties.place}</td>
                    <td>
                      {dayjs(item.properties.time).format(
                        "YYYY-MM-DD HH:mm:ss A"
                      )}
                    </td>
                    <td>{item.properties.title}</td>
                    <td>{item.geometry.coordinates[0].toFixed(2)}</td>
                    <td>{item.geometry.coordinates[1].toFixed(2)}</td>
                    <EditTd onClick={() => showEditHandler(item)}>Edit</EditTd>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {showEdit && (
            <Form>
              <Form.Group controlId="ID">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.id}
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="Magnitude">
                <Form.Label>Magnitude</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.properties.mag}
                  onChange={changeMagHandler}
                />
              </Form.Group>
              <Form.Group controlId="Place">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.properties.place}
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="Time">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  value={dayjs(editData.properties.time).format(
                    "YYYY-MM-DD HH:mm:ss A"
                  )}
                  disabled
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="MoreInfo">
                <Form.Label>MoreInfo</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.properties.title}
                  onChange={changeMoreInfoHandler}
                />
              </Form.Group>
              <Form.Group controlId="Lat">
                <Form.Label>Lat</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.geometry.coordinates[0]}
                  onChange={changeLatHandler}
                />
              </Form.Group>
              <Form.Group controlId="Long">
                <Form.Label>Long</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.geometry.coordinates[1]}
                  onChange={changeLongHandler}
                />
              </Form.Group>
              <Button type="submit" onClick={() => editSubmit(editData)}>
                Submit form
              </Button>
            </Form>
          )}
        </StyledTopTenList>
      </TopTenListWrapper>
    );
  }
);

const mapStateToProps = state => {
  return {
    topTenList: state.get("topTenList"),
    showEdit: state.get("showEdit"),
    editData: state.get("editData")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTopTenList() {
      dispatch(getTopTenList());
    },
    showEditHandler(data) {
      dispatch(storeEditData(data));
      dispatch(toggleEditMode(true));
    },
    changeMagHandler(e) {
      dispatch(changeMag(e.target.value));
    },
    changeMoreInfoHandler(e) {
      dispatch(changeMoreInfo(e.target.value));
    },
    changeLatHandler(e) {
      dispatch(changeLat(e.target.value));
    },
    changeLongHandler(e) {
      dispatch(changeLong(e.target.value));
    },
    editSubmit(data) {
      dispatch(submitEditedData(data));
    }
  };
};

TopTenList.propTypes = {
  topTenList: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  loadTopTenList: PropTypes.func.isRequired,
  showEditHandler: PropTypes.func.isRequired,
  showEdit: PropTypes.bool.isRequired,
  editData: PropTypes.object,
  changeMagHandler: PropTypes.func.isRequired,
  changeMoreInfoHandler: PropTypes.func.isRequired,
  changeLatHandler: PropTypes.func.isRequired,
  changeLongHandler: PropTypes.func.isRequired,
  editSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTenList);
