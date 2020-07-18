import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "../../styles/css/card-dropdown.styles.css";

const CardDropdown = () => (
  <div className="card-dropdown">
    <div className="card-items"></div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CardDropdown;
