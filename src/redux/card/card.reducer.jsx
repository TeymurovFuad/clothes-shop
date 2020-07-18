import cardActionTypes from "./card.types";

const initialState = {
  hidden: true,
};

const cardReducer = (state = initialState, action) => {
  switch (action.types) {
    case cardActionTypes.toggleCardICon:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cardReducer;
