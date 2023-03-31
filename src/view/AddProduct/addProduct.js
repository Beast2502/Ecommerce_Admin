import React from "react";

import "./addProduct.css";

import Table from "../../components/Table/tables";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

const AddProduct = (props) => {

  const data  = props.products;
  return (
    <div className="product-container">
      <div className="product-header">
        <p>Products </p>
        <button className="btn"><NavLink to={"./addDetails"} className='nav-link'>ADD</NavLink></button>
      </div>
      <Table data={data} />
    </div>
  );
};

const mapStateToprops =(state)=>{
  return {
    products : state.products
  }
}

export default connect(mapStateToprops,null)(AddProduct);
