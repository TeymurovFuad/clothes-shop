import React from "react";
import ShopData from "../../data/shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    console.log("shop page");
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
