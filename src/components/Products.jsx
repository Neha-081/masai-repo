import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ProductCard from "./ProductCard";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  async function getSubscriptionInfo() {
    const url = 'https://dummyjson.com/products';
    try {
      const { data } = await Axios.get(url);
      console.log("data-------",data);
      setProductsData(data.products);
      return data;
    } catch (e) {
      console.error('getSubscriptionInfo error\n', e);
    }
  };

  useEffect(() => {
    getSubscriptionInfo();
  }, [])
  

  return (
    <div className="products-cont">
   {productsData && productsData.map((item) => (
    <ProductCard item={item} />
   ))}
  </div>
  )
};

export default Products;