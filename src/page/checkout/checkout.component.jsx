import React from "react";
import CheckoutItem from "../../components/checkout/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "../../styles/css/checkout.styles.css";

import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/card/card.selectors";

const Checkout = ({ cardItems, total }) => {
  return (
    <div className="checkout-page">
      {/* <div className="checkout-header">
        <div className="header-block"></div>
      </div> */}
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cardItems.map((cardItem, index) => (
            <CheckoutItem
              key={cardItem.id}
              cardItem={cardItem}
              index={index + 1}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
            <th>You will pay:</th>
            <th>{total}&#8380;</th>
          </tr>
        </tfoot>
      </table>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCardTotal,
});

export default connect(mapStateToProps)(Checkout);
