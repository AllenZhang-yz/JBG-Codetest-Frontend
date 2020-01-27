import React, { memo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { handleEnteredId, retrieveDetailFromId } from "../store/actionCreators";

const EarthquakeDetailWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const StyledEarthquakeDetail = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const InputDiag = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
  border-bottom: 1px solid #283ced;
  margin: 0 10px 20px 10px;
  padding: 0 10px;
`;

const DetailFetch = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background: #283ced;
  color: white;
  outline: none !important;
  border-radius: 3px;
  &:active {
    transform: translateY(1px);
  }
`;

const Details = styled.div`
  margin: 30px 0;
`;

const Detail = styled.div`
  margin-bottom: 20px;
`;

const DetailsTitle = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;

const FailInfo = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: red;
`;

const EarthquakeDetail = memo(
  ({
    enteredId,
    enteredIdHandler,
    retrieveDetail,
    retrievedDetail,
    retrieveSuc
  }) => {
    return (
      <EarthquakeDetailWrapper>
        <StyledEarthquakeDetail>
          Please enter earthquake ID:{" "}
          <InputDiag
            type="text"
            onChange={enteredIdHandler}
            value={enteredId}
          />
          <DetailFetch onClick={() => retrieveDetail(enteredId)}>
            Retrieve
          </DetailFetch>
          {retrievedDetail && retrieveSuc && (
            <Details>
              <Detail>
                <DetailsTitle>Database ID: </DetailsTitle>
                {retrievedDetail._id}
              </Detail>
              <Detail>
                <DetailsTitle>ID: </DetailsTitle>
                {retrievedDetail.id}
              </Detail>
              <Detail>
                <DetailsTitle>Magnitude: </DetailsTitle>
                {retrievedDetail.properties.mag}
              </Detail>
              <Detail>
                <DetailsTitle>Place: </DetailsTitle>
                {retrievedDetail.properties.place}
              </Detail>
              <Detail>
                <DetailsTitle>Time: </DetailsTitle>

                {dayjs(retrievedDetail.properties.time).format(
                  "YYYY-MM-DD HH:mm:ss A"
                )}
              </Detail>
              <Detail>
                <DetailsTitle>More Info: </DetailsTitle>
                {retrievedDetail.properties.title}
              </Detail>
              <Detail>
                <DetailsTitle>Latitude: </DetailsTitle>
                {retrievedDetail.geometry.coordinates[0]}
              </Detail>
              <Detail>
                <DetailsTitle>Latitude: </DetailsTitle>
                {retrievedDetail.geometry.coordinates[1]}
              </Detail>
            </Details>
          )}
          {retrieveSuc === false && (
            <FailInfo>The Earthquake information does not exist!</FailInfo>
          )}
        </StyledEarthquakeDetail>
      </EarthquakeDetailWrapper>
    );
  }
);

const mapStateToProps = state => {
  return {
    enteredId: state.get("enteredId"),
    retrievedDetail: state.get("retrievedDetail"),
    retrieveSuc: state.get("retrieveSuc")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enteredIdHandler(e) {
      dispatch(handleEnteredId(e.target.value));
    },
    retrieveDetail(enteredId) {
      dispatch(retrieveDetailFromId(enteredId));
    }
  };
};

EarthquakeDetail.propTypes = {
  enteredId: PropTypes.string,
  enteredIdHandler: PropTypes.func.isRequired,
  retrieveDetail: PropTypes.func.isRequired,
  retrievedDetail: PropTypes.object,
  retrieveSuc: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakeDetail);
