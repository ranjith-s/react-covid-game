import * as ACTION_TYPES from "./action_types";

export const login = (username) => {
  return {
    type: ACTION_TYPES.LOGIN,
    username: username,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const prevent = () => {
  return {
    type: ACTION_TYPES.PREVENT,
  };
};

export const reset = () => {
  return {
    type: ACTION_TYPES.RESET,
  };
};
