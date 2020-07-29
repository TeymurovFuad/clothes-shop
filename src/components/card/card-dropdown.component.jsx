import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "../../styles/css/card-dropdown.styles.css";
import CardItem from "./card-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardItems } from "../../redux/card/card.selectors";
import { withRouter } from "react-router-dom";
import { toggleCardIcon } from "../../redux/card/card.actions";

const CardDropdown = ({ cardItems, history, dispatch }) => {
  console.log("dispatch: ", dispatch);
  return (
    <div className={`${cardItems.length ? "card-dropdown" : "empty-card"}`}>
      {cardItems.length ? (
        <div className="card-items">
          {cardItems.map((cardItem) => (
            <CardItem key={cardItem.id} item={cardItem} />
          ))}
          <span className="badge-info text-center">
            {cardItems.map((cardItem) => cardItem.quantity * cardItem.price)}
          </span>
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          Card is empty
        </div>
      )}
      {cardItems.length ? (
        <CustomButton
          onClick={() => {
            history.push("checkout");
            dispatch(toggleCardIcon());
          }}
        >
          Checkout
        </CustomButton>
      ) : (
        ""
      )}
    </div>
  );
};
const err = new Error();
console.error("error in cardDropDown: ", err.message);
console.log("card-dropdown");

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
});

export default withRouter(connect(mapStateToProps)(CardDropdown));
