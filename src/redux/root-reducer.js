import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import cardReducer from "./card/card.reducer";

export default combineReducers({
  user: userReducer,
  card: cardReducer,
});
