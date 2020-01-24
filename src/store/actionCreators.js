import axios from "axios";
import { CLICK_BUTTON, GET_TOP_TEN } from "./actionTypes";

const changeTopTenList = data => ({
  type: GET_TOP_TEN,
  data
});

export const clickButton = idx => ({
  type: CLICK_BUTTON,
  idx
});

export const getTopTenList = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/api/earthquake/")
      .then(res => {
        console.log(res.data);
        dispatch(changeTopTenList(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const editItem = _id => {
  return dispatch => {};
};
