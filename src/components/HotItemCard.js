import React from "react";
import "../styles/HotItemCard.css";

const HotItemCard = ({ index, image, price, name }) => {
  return (
    <div class="HotItemCard">
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
