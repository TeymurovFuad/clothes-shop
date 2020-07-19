import React from "react";
import "../../styles/css/card-icon.styles.css";
import { ReactComponent as ShoppingBagIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCardIcon } from "../../redux/card/card.actions";

const CardICon = ({ toggleCardIcon }) => (
  <div className="card-icon" onClick={toggleCardIcon}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchProps = (dispatch) => ({
  toggleCardIcon: () => dispatch(toggleCardIcon()),
});

export default connect(null, mapDispatchProps)(CardICon);
