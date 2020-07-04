import React from "react";

import "../../styles/css/collection-item.styles.css";

console.log("collection item");
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: "url(" + imageUrl + ")",
      }}
    ></div>
    <div className="collection-footer">
      <span clanme="name">{name}</span>
      <span clanme="price">{price}₼</span>
    </div>
  </div>
);

export default CollectionItem;
