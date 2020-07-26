import React from "react";
import "../../styles/css/checkout.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/fontawesome-free-solid";

const CheckoutItem = ({ cardItem: { name, imageUrl, quantity, price } }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td className="imgHover">
        <img src={imageUrl} alt={name} />
        <span className="large">
          <img src={imageUrl} alt={name} className="large-image" />
        </span>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <span>
          <FontAwesomeIcon className="text-warning" icon={faMinusCircle} />
        </span>
        &nbsp;
        {quantity}
        &nbsp;
        <span>
          <FontAwesomeIcon className="text-warning" icon={faPlusCircle} />
        </span>
      </td>
      <td>{price * quantity}&#8380;</td>
      <td>
        <FontAwesomeIcon className="text-danger" icon={faTrash} />
      </td>
    </tr>
  );
};

export default CheckoutItem;
