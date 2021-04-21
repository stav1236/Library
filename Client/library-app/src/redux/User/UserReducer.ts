import * as Actions from "./UserActionType";

import { User } from "models/User";
import { UNDIFNED_ID, UNDIFNED_NAME } from "utils/utils";

export const initialState: User = {
  _id: UNDIFNED_ID,
  name: UNDIFNED_NAME,
  favBook: UNDIFNED_ID,
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
