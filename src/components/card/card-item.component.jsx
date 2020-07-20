import React from "react";
import "../../styles/css/card-item.styles.css";

const CardItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="card-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}₼
      </span>
    </div>
  </div>
);

export default CardItem;
