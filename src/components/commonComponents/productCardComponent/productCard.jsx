import React from "react";
import "./productCard.css";

function ProductCard(props) {

  return (
    <div className="cardMainBox">
      <img src={props.item.image} className="cardImage" alt="Product" />
      <h2 className="productTitleText">{props.item.title}</h2>
      <p className="productSubText">{props.item.description}</p>
    </div>
  );
}

export default ProductCard;
