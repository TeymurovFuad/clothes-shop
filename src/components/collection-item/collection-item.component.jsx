import React from "react";

import "../../styles/css/collection-item.styles.css";

console.log("collection item");
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item card">
    <div
      className="image card-img-top img-thumbnail"
      style={{
        backgroundImage: "url(" + imageUrl + ")",
      }}
    ></div>
    <div className="collection-footer card-body">
      <span clanme="name card-title col-12">{name}</span>
      <span clanme="price card-title col-12">{price}₼</span>
    </div>
  </div>
);

export default CollectionItem;
