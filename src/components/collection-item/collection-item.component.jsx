import React from "react";
import "../../styles/css/collection-item.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/card/card.actions";

const CollectionItem = ({ item, addItem }) => {
  console.log("collection item");
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item card text-center">
      <div
        className="image card-img-top img-thumbnail"
        style={{
          backgroundImage: "url(" + imageUrl + ")",
        }}
      ></div>
      <div className="collection-footer card-body">
        <span clanme="name card-title col-12">{name}</span>
        <span clanme="price card-title col-12">{price}&#8380;</span>
      </div>
      <CustomButton onClick={() => addItem(item)} addToCard>
        Add to card
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
