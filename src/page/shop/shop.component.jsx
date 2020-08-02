import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopItems } from "../../redux/shop/shop.selector";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ShopPage = ({ items }) => {
  console.log("shop components");
  return (
    <div className="shop-page">
      {items.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
