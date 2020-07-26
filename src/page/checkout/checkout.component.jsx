import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "../../styles/css/checkout.styles.css";

import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/card/card.selectors";

const allTotal = 0;

const Checkout = ({ cardItems, total }) => (
  <div className="checkout-page">
    {/* <div className="checkout-header">
        <div className="header-block"></div>
      </div> */}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {cardItems.map((cardItem) => (
          <tr>
            <th scope="row">1</th>
            <td className="imgHover">
              <img src={cardItem.imageUrl} alt={cardItem.name} />
              <span className="large">
                <img
                  src={cardItem.imageUrl}
                  alt={cardItem.name}
                  className="large-image"
                />
              </span>
            </td>
            <td>{cardItem.name}</td>
            <td>{cardItem.price}₼</td>
            <td>{cardItem.quantity}</td>
            <td>{cardItem.price * cardItem.quantity}₼</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>You will pay:</th>
          <th>{total}₼</th>
        </tr>
      </tfoot>
    </table>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCardTotal,
});

export default connect(mapStateToProps)(Checkout);
