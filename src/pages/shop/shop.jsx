import React from "react";
import { PRODUCTS } from "../../products";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>AviTech Shop</h1>
      </div>
      <div className="product">
        {PRODUCTS.map((products) => (
          <PRODUCT />
        ))}
      </div>
    </div>
  );
};
