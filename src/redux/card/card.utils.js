// ADD ITEM TO CARD

export const addItemToCard = (cardItems, cardItemToAdd) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === cardItemToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...cardItemToAdd, quantity: 1 }];
};

// RDUCE CARD ITEM

export const reduceItemFromCard = (cardItems, cardItemToReduce) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToReduce.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === cardItemToReduce.id
        ? { ...cardItem, quantity: cardItem.quantity - 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...cardItemToReduce, quantity: 1 }];
};
