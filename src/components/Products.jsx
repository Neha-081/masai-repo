import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(12);
  const [skip, setSkip] = useState(1);
  const [loading,setLoading]= useState(false);
  console.log(skip,"skip");

  async function getSubscriptionInfo() {
    const url = `https://dummyjson.com/products?limit=${page}&skip=${skip}`;
    try {
      const { data } = await Axios.get(url);
      console.log("data-------",data);
      setProductsData(data.products);
      setLoading(false);
      return data;
    } catch (e) {
      console.error('getSubscriptionInfo error\n', e);
    }
  };

  useEffect(() => {
    getSubscriptionInfo(page)
},[page, skip])
  

  return (
    <div className="products-main">
      {loading && <div>loading...</div>}
    <div className="products-cont">
   {productsData && productsData.map((item) => (
    <ProductCard item={item} />
   ))}
  </div>
   <Pagination page={page} productsData={productsData} setLoading={setLoading} skip={skip} setSkip={setSkip}/>
  </div>
  )
};

export default Products;