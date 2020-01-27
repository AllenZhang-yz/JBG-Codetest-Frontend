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
  SET_RETRIEVE_SUC,
  HANDLE_PASSWORD,
  HANDLE_USERNAME,
  SET_LOGIN_SUC
} from "./actionTypes";
import { fromJS } from "immutable";

export const defaultState = fromJS({
  buttonList: [
    "Top Ten",
    "Add Earthquake",
    "Earthquake Detail",
    "Retrieve Latest"
  ],
  selectedButton: 0,
  topTenList: [],
  showEdit: false,
  editData: null,
  addData: {
    id: "",
    properties: {
      mag: "",
      place: "",
      time: "",
      title: ""
    },
    geometry: {
      coordinates: []
    }
  },
  enteredId: "",
  retrievedDetail: null,
  retrieveSuc: "",
  username: "",
  password: "",
  loginSuc: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      return state.set("selectedButton", action.idx);
    case GET_TOP_TEN:
      return state.set("topTenList", action.data);
    case SHOW_EDIT:
      return state.set("showEdit", action.data);
    case STORE_EDIT_DATA:
      return state.set("editData", action.data);
    case CHANGE_MAG:
      return state.setIn(["editData", "properties", "mag"], action.data);
    case CHANGE_MORE_INFO:
      return state.setIn(["editData", "properties", "title"], action.data);
    case CHANGE_LAT:
      return state.setIn(
        ["editData", "geometry", "coordinates", 0],
        action.data
      );
    case CHANGE_LONG:
      return state.setIn(
        ["editData", "geometry", "coordinates", 1],
        action.data
      );
    case ADD_ID:
      return state.setIn(["addData", "id"], action.data);
    case ADD_MAG:
      return state.setIn(["addData", "properties", "mag"], action.data);
    case ADD_PLACE:
      return state.setIn(["addData", "properties", "place"], action.data);
    case ADD_TIME:
      return state.setIn(["addData", "properties", "time"], action.data);
    case ADD_MORE_INFO:
      return state.setIn(["addData", "properties", "title"], action.data);
    case ADD_LAT:
      return state.setIn(
        ["addData", "geometry", "coordinates", 0],
        action.data
      );
    case ADD_LONG:
      return state.setIn(
        ["addData", "geometry", "coordinates", 1],
        action.data
      );
    case HANDLE_ENTERED_ID:
      return state.set("enteredId", action._id);
    case SET_RETRIEVED_DETAIL:
      return state.set("retrievedDetail", action.data);
    case SET_RETRIEVE_SUC:
      return state.set("retrieveSuc", action.data);
    case HANDLE_USERNAME:
      return state.set("username", action.data);
    case HANDLE_PASSWORD:
      return state.set("password", action.data);
    case SET_LOGIN_SUC:
      return state.set("loginSuc", action.data);
    default:
      return state;
  }
};
