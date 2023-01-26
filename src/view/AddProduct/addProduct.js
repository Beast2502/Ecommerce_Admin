import React from "react";

import "./addProduct.css";

import Table from "../../components/Table/bannerTable";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        <p>Products </p>
        <button className="btn"><NavLink to={"./addDetails"} className='nav-link'>ADD</NavLink></button>
      </div>
      <Table />
    </div>
  );
};

export default AddProduct;
