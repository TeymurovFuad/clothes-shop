import { cardActionTypes } from "./card.types";
import { addItemToCard } from "./card.utils";

const initialState = {
  hidden: true,
  cardItems: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActionTypes.toggleCardIcon:
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
