import { CLICK_BUTTON, GET_TOP_TEN } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  buttonList: [
    "Top Ten",
    "Add Earthquake",
    "Earthquake Detail",
    "Retrieve Latest"
  ],
  selectedButton: 0,
  topTenList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      return state.set("selectedButton", action.idx);
    case GET_TOP_TEN:
      return state.set("topTenList", action.data);
    default:
      return state;
  }
};
