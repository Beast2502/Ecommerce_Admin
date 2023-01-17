import React, { useState } from "react";
import "./addCategory.css";

import Button from "../../components/Button/Button"
import Table from "../../components/Table/bannerTable";


import { NavLink } from "react-router-dom";

const AddCategory = () => {
  const [addCat ,setCat] = useState("");
  console.log(addCat ,"Check the data")
  return (
    <div className="category-container">
      <div className="category-header">
        <p>Categories</p>
        <Button name={"ADD"} color={"orange"} onClick={setCat} value={"Mehul Saxena"}/>
       

      </div>
      <Table />
    </div>
  );
};

export default AddCategory;
