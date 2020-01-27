import React, { memo } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Email } from "styled-icons/material/Email";
import { Exclamation } from "styled-icons/evil/Exclamation";
import PropTypes from "prop-types";
import JBGLogo from "../static/JBG_pic.png";
import {
  usernameHandler,
  passwordHandler,
  sendLoginData
} from "../store/actionCreators";

const LoginPage = styled.div`
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 350px;
  height: 300px;
  margin: 0 auto;
  background-color: #ffffff;
  text-align: center;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  height: 40px;
  width: auto;
`;

const LoginLabel = styled.div`
  font-size: 40px;
  font-weight: normal;
  margin: 30px 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.input`
  margin: 2px 0;
  height: 25px;
  width: 250px;
  padding-left: 30px;
  background-color: #dcdfe0;
  border: none;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  width: 90px;
  height: 40px;
  background-color: #538eed;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

const EmailIcon = styled(Email)`
  height: 20px;
  width: auto;
  position: absolute;
  right: 228px;
  top: 6px;
`;

const ExclamationIcon = styled(Exclamation)`
  height: 20px;
  width: auto;
  position: absolute;
  right: 228px;
  top: 34px;
`;

const Login = memo(
  ({ username, password, onChangeUsername, onChangePwd, loginHandler }) => {
    return (
      <LoginPage>
        <LoginContainer>
          <LoginTitle>
            <Img src={JBGLogo} alt="logo" />
            <LoginLabel>Login</LoginLabel>
          </LoginTitle>
          <LoginForm>
            <EmailIcon />
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onChangeUsername}
              required
            />
            <ExclamationIcon />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChangePwd}
              required
            />
            <SubmitButton onClick={e => loginHandler(username, password, e)}>
              log in
            </SubmitButton>
          </LoginForm>
        </LoginContainer>
      </LoginPage>
    );
  }
);

const mapStateToProps = state => {
  return {
    username: state.get("username"),
    password: state.get("password")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeUsername(e) {
      dispatch(usernameHandler(e.target.value));
    },
    onChangePwd(e) {
      dispatch(passwordHandler(e.target.value));
    },
    loginHandler(username, password, e) {
      e.preventDefault();
      dispatch(sendLoginData(username, password));
    }
  };
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePwd: PropTypes.func.isRequired,
  loginHandler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
