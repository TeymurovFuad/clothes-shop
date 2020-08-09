import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cardReducer from "./card/card.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//TO CACHE DATA
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["card"],
};

const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
