import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import "../../styles/css/collections-overview.styles.css";

const CollectionOverview = ({ items }) => {
  console.log("collection overview", items);
  return (
    <div className="collections-overview">
      {items.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
