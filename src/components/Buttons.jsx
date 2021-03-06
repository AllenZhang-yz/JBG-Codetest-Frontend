import React, { memo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonsWrapper = styled.div`
  width: 100%;
`;

const StyledButtons = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 15px;
  }
`;

const Buttons = memo(({ buttonList, selectedButton }) => {
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
});

const mapStateToProps = state => {
  return {
    buttonList: state.get("buttonList"),
    selectedButton: state.get("selectedButton")
  };
};

Buttons.propTypes = {
  buttonList: PropTypes.object.isRequired,
  selectedButton: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(Buttons);
