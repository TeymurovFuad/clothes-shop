import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "../../styles/css/card-dropdown.styles.css";
import CardItem from "./card-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardItems } from "../../redux/card/card.selectors";

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

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
});

export default connect(mapStateToProps)(CardDropdown);
