import React from "react";
import '../styles/pagination.css';

const Pagination = ({ page, productsData, setLoading, skip, setSkip }) => {

  return (
    <div className="pagination">
      <button className={`${skip === 1 ? `disable` : ''}`} disabled={skip === 1} onClick={() => {
        setSkip(skip - 1)
        setLoading(true)
      }}>Prev</button>
      <h5 >Page:{skip}</h5>
      <button disabled={page > productsData.length} className="btn btn-secondary" onClick={() => {
        setSkip(skip + 1)
        setLoading(true)
      }}>Next</button>
    </div>
  )
};

export default Pagination;