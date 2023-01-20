import React from "react";

import "./addProduct.css";

import Button from "../../components/Button/Button"
import Table from "../../components/Table/bannerTable";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        <p>Products </p>
        <Button name={"ADD"} color={"orange"} />
        <NavLink to={"./addDetails"}>ADD</NavLink>
      </div>
      <Table />
    </div>
  );
};

export default AddProduct;
