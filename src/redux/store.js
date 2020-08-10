import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };

// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./root-reducer";
// import { persistStore } from "redux-persist";

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// const persistor = persistStore(store);

// export { store, persistor };
