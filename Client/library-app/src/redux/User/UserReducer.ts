import { User } from "models/User";
import * as Actions from "./UserActionType";

export const initialState : User = {
  _id: -999,
  name: "",
  favBook: -999,
};

const userReducer = (
  state = initialState,
  action: Actions.UserAction
): User => {
  switch (action.type) {
    case Actions.SET_USER:
      return { ...state, ...action.payload.user };
    default:
      return state;
  }
};

export default userReducer;
