import React from "react";
import "../../styles/css/card-icon.styles.css";
import { ReactComponent as ShoppingBagIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCardIcon } from "../../redux/card/card.actions";
import { selectCardItemsCount } from "./card.selectors";

const CardIcon = ({ toggleCardIcon, totalItems }) => (
  <div className="card-icon" onClick={toggleCardIcon}>
    <ShoppingBagIcon className="shopping-icon" />
    {/* style="background-color:"{`${totalItems< 10? "ff"+totalItems+"fff":"ff"+totalItems+"f"+totalItems%10+"ff"}`} */}
    <span className="item-count">{totalItems}</span>
  </div>
);

console.log("card-icon");

const mapDispatchProps = (dispatch) => ({
  toggleCardIcon: () => dispatch(toggleCardIcon()),
});

const mapStateToProps = (state) => ({
  totalItems: selectCardItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchProps)(CardIcon);

// const err = new Error();
// throw err.message;
