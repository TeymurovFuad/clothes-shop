import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopItems } from "../../redux/shop/shop.selector";

import "../../styles/css/collections-overview.styles.css";

const CollectionOverview = ({ items }) => {
  return (
    <div className="collections-overview">
      {items.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
});

export default connect(mapStateToProps)(CollectionOverview);
