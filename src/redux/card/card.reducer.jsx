import { cardActionTypes } from "./card.types";
import { addItemToCard } from "./cadr.utils";

const initialState = {
  hidden: true,
  cardItems: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.types) {
    case cardActionTypes.toggleCardICon:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cardActionTypes.addItem:
      return {
        ...state,
        cardItems: addItemToCard(state.cardItems, action.payload),
      };
    default:
      return state;
  }
};

export default cardReducer;
