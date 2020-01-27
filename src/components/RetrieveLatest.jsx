import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { retrieveDataFromBackend } from "../store/actionCreators";

const RetrieveLatestWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const StyledRetrieveLatest = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const RetrieveButton = styled.div`
  width: 160px;
  height: 50px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
  background: #283ced;
  outline: none;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
    outline: none;
  }
`;

const RetrieveLatest = memo(({ retrieveAllData }) => {
  return (
    <RetrieveLatestWrapper>
      <StyledRetrieveLatest>
        <RetrieveButton onClick={() => retrieveAllData()}>
          Retrieve
        </RetrieveButton>
      </StyledRetrieveLatest>
    </RetrieveLatestWrapper>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    retrieveAllData() {
      dispatch(retrieveDataFromBackend());
    }
  };
};

RetrieveLatest.propTypes = {
  retrieveAllData: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(RetrieveLatest);
