import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Buttons from "./Buttons";
import TopTenList from "./TopTenList";
import AddEarthquake from "./AddEarthquake";
import EarthquakeDetail from "./EarthquakeDetail";
import RetrieveLatest from "./RetrieveLatest";

const LoggedIn = ({ selectedButton }) => {
  return (
    <Fragment>
      <Header />
      <Buttons />
      {selectedButton === 0 && <TopTenList />}
      {selectedButton === 1 && <AddEarthquake />}
      {selectedButton === 2 && <EarthquakeDetail />}
      {selectedButton === 3 && <RetrieveLatest />}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedButton: state.get("selectedButton")
  };
};

LoggedIn.propTypes = {
  selectedButton: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(LoggedIn);
