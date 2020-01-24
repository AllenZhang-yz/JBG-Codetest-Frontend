import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const StyledHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 120px;
  line-height: 120px;
  background: #c9ccd1;
  color: white;
  font-size: 34px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>Earthquake Information Web Portal</StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
