import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "./Button";

const ButtonsWrapper = styled.div`
  width: 100%;
`;

const StyledButtons = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Buttons = ({ buttonList, selectedButton }) => {
  return (
    <ButtonsWrapper>
      <StyledButtons>
        {buttonList.map((item, index) => (
          <Button key={index} index={index} selected={selectedButton === index}>
            {item}
          </Button>
        ))}
      </StyledButtons>
    </ButtonsWrapper>
  );
};

const mapStateToProps = state => {
  return {
    buttonList: state.get("buttonList"),
    selectedButton: state.get("selectedButton")
  };
};

export default connect(mapStateToProps, null)(Buttons);
