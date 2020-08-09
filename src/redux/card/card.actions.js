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

export const reduceItem = (item) => {
  console.log("reduceItem action was called");
  return {
    type: cardActionTypes.reduceItem,
    payload: item,
  };
};

export const removeItem = (item) => {
  console.log("removeItem action was called");
  return {
    type: cardActionTypes.removeItem,
    payload: item,
  };
};
