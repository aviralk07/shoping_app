import React from "react";
import "./product.css";
import Button from "react-bootstrap/Button";
import { CurrencyInr } from "phosphor-react";
export const product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="" className="product-image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          {/* &#8377; */}
          <CurrencyInr size={19} color="#a73fac" weight="bold" />
          {price}
        </p>
        <p>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" />
        </p>
      </div>
      <Button variant="outline-primary" className="custom-button">
        Buy Now
      </Button>
      <br />
      <br />
     
    </div>
  );
};
