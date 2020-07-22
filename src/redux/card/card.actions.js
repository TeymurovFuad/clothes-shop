import { cardActionTypes } from "./card.types";

export const toggleCardIcon = () => ({
  type: cardActionTypes.toggleCardIcon,
});

export const addItem = (item) => {
  console.log("addItem action was called");
  return {
    type: cardActionTypes.addItem,
    payload: item,
  };
};
