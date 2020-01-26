import React from "react";
import styled from "styled-components";
import JBGLogo from "../static/JBG_pic.png";

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
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const LogoImg = styled.img`
  height: 60px;
  width: auto;
  margin-right: 30px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <LogoImg src={JBGLogo} alt="logo" />
        Earthquake Information Web Portal
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
