import AuthReducer from "./auth_reducer";
import GameReducer from "./game_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth_reducer: AuthReducer,
  game_reducer: GameReducer,
});

export default rootReducer;
