import { combineReducers } from "redux";
import { shopReducer as shop } from "./shop";

export default combineReducers({
  shop,
  // additional reducers can be added here
});
