import * as actionTypes from "./UserActionType";
import { User } from "../../models/User";
import { store } from "../store";

export const setUser = (user: User): void => {
  store.dispatch({
    type: actionTypes.SET_USER,
    payload: { user },
  });
};
