import React, { memo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import JBGLogo from "../static/JBG_pic.png";
import { logout } from "../store/actionCreators";

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

const LogoutButton = styled.span`
  width: 70px;
  height: 40px;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 3px;
  background: #3474eb;
  margin-left: 40px;
  cursor: pointer;
`;

const Header = memo(({ logoutHandler }) => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <LogoImg src={JBGLogo} alt="logo" />
        <span>Earthquake Information Web Portal</span>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </StyledHeader>
    </HeaderWrapper>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler() {
      dispatch(logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
