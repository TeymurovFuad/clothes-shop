import React from "react";

import "../../styles/css/collection-preview.styles.css";

import CollectionItem from "../collection-item/collection-item.component";

console.log("collection preview");
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherItemProps }) => (
          // <div key={item.id}>
          //   {item.name} | {item.price} | {item.imageUrl}
          // </div>
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
