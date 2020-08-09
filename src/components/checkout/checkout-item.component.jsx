import React from "react";
import "../../styles/css/checkout.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/fontawesome-free-solid";

import { connect } from "react-redux";
import { removeItem, addItem, reduceItem } from "../../redux/card/card.actions";

const CheckoutItem = ({ cardItem, removeItem, addItem, reduceItem, index }) => {
  const { name, imageUrl, quantity, price } = cardItem;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td className="imgHover">
        <img src={imageUrl} alt={name} />
        <span className="large">
          <img src={imageUrl} alt={name} className="large-image" />
        </span>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td className="d-flex flex-row align-items-baseline">
        <span
          onClick={() =>
            cardItem.quantity > 1 ? reduceItem(cardItem) : removeItem(cardItem)
          }
          className="btn"
        >
          <FontAwesomeIcon className="text-warning" icon={faMinusCircle} />
        </span>
        &nbsp;
        {quantity}
        &nbsp;
        <span onClick={() => addItem(cardItem)} className="btn">
          <FontAwesomeIcon className="text-warning" icon={faPlusCircle} />
        </span>
      </td>
      <td>{price * quantity}&#8380;</td>
      <td>
        <button onClick={() => removeItem(cardItem)} className="btn">
          <FontAwesomeIcon className="text-danger" icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
