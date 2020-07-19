import { cardActionTypes } from "./card.types";

export const toggleCardIcon = () => ({
  type: cardActionTypes.toggleCardIcon,
});

export const addItem = (item) => ({
  type: cardActionTypes.addItem,
  payload: item,
});
