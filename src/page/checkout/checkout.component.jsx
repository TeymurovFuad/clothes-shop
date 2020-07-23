import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "../../styles/css/checkout.styles.css";

import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/card/card.selectors";

const Checkout = ({ cardItems, total }) => (
  <div className="checkout-page">
    {/* <div className="checkout-header">
        <div className="header-block"></div>
      </div> */}
    {cardItems.map((cardItem) => cardItem.name)}
    {total}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCardTotal,
});

export default connect(mapStateToProps)(Checkout);
