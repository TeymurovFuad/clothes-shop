import { cardActionTypes } from "./card.types";
import { addItemToCard, reduceItemFromCard } from "./card.utils";

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
    case cardActionTypes.reduceItem:
      return {
        ...state,
        cardItems: reduceItemFromCard(state.cardItems, action.payload),
      };
    case cardActionTypes.removeItem:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (cardItem) => cardItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cardReducer;
