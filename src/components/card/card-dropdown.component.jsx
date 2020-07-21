import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "../../styles/css/card-dropdown.styles.css";
import CardItem from "./card-item.component";
import { connect } from "react-redux";

const CardDropdown = ({ cardItems }) => (
  <div className="card-dropdown">
    <div className="card-items">
      {cardItems.map((cardItem) => (
        <CardItem key={cardItem.id} item={cardItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);
console.log("card-dropdown");

const mapStateToProps = ({ card: { cardItems } }) => ({
  cardItems,
});

export default connect(mapStateToProps)(CardDropdown);
