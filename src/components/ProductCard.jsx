import React from "react";
import '../styles/products.css'

const ProductCard = ({ item }) => {

  return (
    <div className="products">
      <img src={item.thumbnail} alt="mediaImage" />
      <h3>{item.title}</h3>
      <h3>{item.description}</h3>
      <h3>Brand - {item.brand}</h3>
      <h3>Price - {item.price}</h3>
    </div>
  )
};

export default ProductCard;