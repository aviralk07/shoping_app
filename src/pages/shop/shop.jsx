import React from "react";
import { PRODUCTS } from "../../products";

import { product as Product } from "./product";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>AviTech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
