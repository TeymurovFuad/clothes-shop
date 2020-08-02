import React from "react";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selector";

import "../../styles/css/collection.styles.css";

const CollectionPage = ({ collection }) => {
  console.log("Collection page", collection);
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
