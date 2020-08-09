import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// const colelctionIdMap = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionUrlParam]

    // ,(collections) => collections[collectionUrlParam]
  );
