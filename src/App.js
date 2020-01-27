import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import TopTenList from "./components/TopTenList";
import AddEarthquake from "./components/AddEarthquake";
import EarthquakeDetail from "./components/EarthquakeDetail";
import RetrieveLatest from "./components/RetrieveLatest";

const App = ({ selectedButton }) => {
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

App.propTypes = {
  selectedButton: PropTypes.number.isRequired
};

export default connect(mapStateToProps, null)(App);
