import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clickButton } from "../store/actionCreators";

const StyledButton = styled.button`
  width: 205px;
  height: 45px;
  line-height: 45px;
  background: #b1a8e3;
  border-radius: 3px;
  font-size: 20px;
  color: white;
  outline: none;
  border: none;
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  &.selected {
    background: #9453c2;
  }
  &:active {
    transform: translateY(1px);
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    justify-self: center;
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
