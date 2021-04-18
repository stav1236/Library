import { combineReducers } from "redux";

import StoreStateType from "./StoreStateType";
import userReducer from "./User/UserReducer";

export default combineReducers<StoreStateType>({
  user: userReducer,
});
