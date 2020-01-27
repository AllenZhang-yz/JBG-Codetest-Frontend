import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";

const App = memo(({ loginSuc }) => {
  return (
    <Fragment>
      {loginSuc ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={LoggedIn} />
    </Fragment>
  );
});

const mapStateToProps = state => {
  return {
    loginSuc: state.get("loginSuc")
  };
};

export default connect(mapStateToProps, null)(App);
