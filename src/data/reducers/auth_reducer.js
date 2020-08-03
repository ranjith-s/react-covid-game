import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
  is_authenticated: false,
  username: "",
  loginLoading: false,
  stats: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return Object.assign({}, state, {
        is_authenticated: true,
        username: action.data.username,
        stats: action.data.stats,
      });
    case ACTION_TYPES.LOGOUT:
      return Object.assign({}, state, {
        is_authenticated: false,
        username: "",
        stats: {},
      });
    case ACTION_TYPES.LOADING:
      return Object.assign({}, state, {
        loginLoading: action.data,
      });
    default:
      return state;
  }
};

export default AuthReducer;
