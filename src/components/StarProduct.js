import React from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProduct[0].url}>
          {" "}
          <img src={starProduct[0].image} alt="Product 1" />{" "}
        </a>
      </div>
      <div>
        <a href={starProduct[1].url}>
          {" "}
          <img src={starProduct[1].image} alt="Product 2" />{" "}
        </a>
        <a href={starProduct[2].url}>
          {" "}
          <img src={starProduct[2].image} alt="Product 3" />{" "}
        </a>
        <a href={starProduct[3].url}>
          {" "}
          <img src={starProduct[3].image} alt="Product 4" />{" "}
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
