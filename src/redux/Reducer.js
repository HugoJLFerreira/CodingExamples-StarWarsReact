import initialState from "../store/InitialState";
import { SET_PLANETS, SET_USERS } from "./Actions";

function rootReducer(state = initialState, action) {
  if (action.type === SET_PLANETS) {
    return Object.assign({}, state, {
      planets: action.planets,
    });
  }

  if (action.type === SET_USERS) {
    return Object.assign({}, state, {
      users: action.users,
    });
  }
}

export default rootReducer;
