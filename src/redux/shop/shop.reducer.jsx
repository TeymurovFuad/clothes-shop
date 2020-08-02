import ShopData from "../../data/shop.data";

const initialState = {
  items: ShopData,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
