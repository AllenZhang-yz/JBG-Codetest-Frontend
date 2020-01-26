import { combineReducers } from "redux";

import navigation from "./navigationReducer";
import weather from "./weatherReducer";

const reducer = combineReducers({
  navigation,
  weather
});

export default reducer;
