import { shopActionTypes } from "./shop.types";

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      console.log("action.payload", action);
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
