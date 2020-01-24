import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clickButton } from "../store/actionCreators";

const StyledButton = styled.button`
  width: 205px;
  height: 45px;
  background: #b1a8e3;
  border-radius: 3px;
  font-size: 24px;
  color: white;
  outline: none;
  cursor: pointer;
  &.selected {
    background: #9453c2;
  }
`;

const Button = ({ children, handleSelectedButton, index, selected }) => {
  return (
    <StyledButton
      onClick={() => handleSelectedButton(index)}
      className={selected ? "selected" : ""}
    >
      {children}
    </StyledButton>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectedButton(idx) {
      dispatch(clickButton(idx));
    }
  };
};

export default connect(null, mapDispatchToProps)(Button);
