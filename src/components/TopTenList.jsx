import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { getTopTenList, editItem } from "../store/actionCreators";

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

const TopTenList = ({ topTenList, loadTopTenList, handleEdit }) => {
  useEffect(() => {
    loadTopTenList();
  }, [loadTopTenList]);
  return (
    <TopTenListWrapper>
      <StyledTopTenList>
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
                <td>{item.properties.time}</td>
                <td>{item.properties.title}</td>
                <td>{item.geometry.coordinates[0].toFixed(2)}</td>
                <td>{item.geometry.coordinates[1].toFixed(2)}</td>
                <EditTd onClick={() => handleEdit(item._id)}>Edit</EditTd>
              </tr>
            ))}
          </tbody>
        </Table>
      </StyledTopTenList>
    </TopTenListWrapper>
  );
};

const mapStateToProps = state => {
  return {
    topTenList: state.get("topTenList")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTopTenList() {
      dispatch(getTopTenList());
    },
    handleEdit(_id) {
      dispatch(editItem(_id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTenList);
