import * as ACTION_TYPES from "../actions/action_types";

const initialState = {
  corona: 50,
  gameOver: false,
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PREVENT:
      return {
        corona: state.corona - 10,
        gameOver: state.corona - 10 <= 0,
      };
    case ACTION_TYPES.RESET:
      return {
        corona: 50,
        gameOver: false,
      };
    default:
      return state;
  }
};

export default GameReducer;
