import { fromJS } from "immutable";
import {
  fetchTopTenList,
  submitEditedDataToBackend,
  submitAddDataToBackend,
  retrieveDetail,
  retrieveData,
  sendAllData
} from "../utils/axios";
import {
  CLICK_BUTTON,
  GET_TOP_TEN,
  SHOW_EDIT,
  STORE_EDIT_DATA,
  CHANGE_MAG,
  CHANGE_MORE_INFO,
  CHANGE_LAT,
  CHANGE_LONG,
  ADD_ID,
  ADD_MAG,
  ADD_PLACE,
  ADD_TIME,
  ADD_MORE_INFO,
  ADD_LAT,
  ADD_LONG,
  HANDLE_ENTERED_ID,
  SET_RETRIEVED_DETAIL,
  SET_RETRIEVE_SUC
} from "./actionTypes";

const changeTopTenList = data => ({
  type: GET_TOP_TEN,
  data
});

const setRetrievedDetail = data => ({
  type: SET_RETRIEVED_DETAIL,
  data
});

const setRetrieveSuc = data => ({
  type: SET_RETRIEVE_SUC,
  data
});

export const clickButton = idx => ({
  type: CLICK_BUTTON,
  idx
});

export const getTopTenList = () => {
  return dispatch => {
    fetchTopTenList()
      .then(res => {
        dispatch(changeTopTenList(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const toggleEditMode = data => ({
  type: SHOW_EDIT,
  data
});

export const storeEditData = data => ({
  type: STORE_EDIT_DATA,
  data
});

export const changeMag = data => ({
  type: CHANGE_MAG,
  data
});

export const changeMoreInfo = data => ({
  type: CHANGE_MORE_INFO,
  data
});

export const changeLat = data => ({
  type: CHANGE_LAT,
  data
});

export const changeLong = data => ({
  type: CHANGE_LONG,
  data
});

export const submitEditedData = data => {
  return dispatch => {
    submitEditedDataToBackend(data)
      .then(res => {
        dispatch(toggleEditMode(false));
      })
      .catch(err => console.log(err));
  };
};

export const addId = data => ({
  type: ADD_ID,
  data: fromJS(data)
});

export const addMag = data => ({
  type: ADD_MAG,
  data: fromJS(data)
});

export const addPlace = data => ({
  type: ADD_PLACE,
  data: fromJS(data)
});

export const addTime = data => ({
  type: ADD_TIME,
  data: fromJS(data)
});

export const addMoreInfo = data => ({
  type: ADD_MORE_INFO,
  data: fromJS(data)
});

export const addLat = data => ({
  type: ADD_LAT,
  data: fromJS(data)
});

export const addLong = data => ({
  type: ADD_LONG,
  data: fromJS(data)
});

export const submitAddData = data => {
  return dispatch => {
    submitAddDataToBackend(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
};

export const handleEnteredId = _id => ({
  type: HANDLE_ENTERED_ID,
  _id: fromJS(_id)
});

export const retrieveDetailFromId = _id => {
  return dispatch => {
    if (_id) {
      retrieveDetail(_id)
        .then(res => {
          dispatch(setRetrievedDetail(res.data));
          dispatch(setRetrieveSuc(true));
        })
        .catch(err => {
          console.log(err);
          dispatch(setRetrievedDetail(null));
          dispatch(setRetrieveSuc(false));
        });
    }
  };
};

export const retrieveDataFromBackend = () => {
  return dispatch => {
    retrieveData()
      .then(res => {
        const data = res.data.features.slice(0, 100);
        console.log(data);
        dispatch(sendDataToDB(data));
      })
      .catch(err => console.log(err));
  };
};

export const sendDataToDB = data => {
  return dispatch => {
    sendAllData(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
};
