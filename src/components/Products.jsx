import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(12);
  const [skip, setSkip] = useState(1);
  const [loading, setLoading] = useState(false);

  async function getProductsInfo() {
    const url = `https://dummyjson.com/products?limit=${page}&skip=${skip}`;
    try {
      const { data } = await Axios.get(url);
      console.log("data-------", data);
      setProductsData(data.products);
      setLoading(false);
      return data;
    } catch (e) {
      console.error('getProductsInfo error\n', e);
    }
  };

  useEffect(() => {
    getProductsInfo(page)
  }, [page, skip])


  return (
    <div className="products-main">
      <div className="products-cont">
        {productsData && productsData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
      {loading && <div>loading...</div>}
      <Pagination page={page} productsData={productsData} setLoading={setLoading} skip={skip} setSkip={setSkip} />
    </div>
  )
};

export default Products;