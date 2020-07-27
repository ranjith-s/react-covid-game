import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
  is_authenticated: false,
  username: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        is_authenticated: true,
        username: action.username,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        is_authenticated: false,
        username: "",
      };
    default:
      return state;
  }
};

export default AuthReducer;
