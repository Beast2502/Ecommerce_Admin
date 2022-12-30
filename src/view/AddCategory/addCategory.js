import React from "react";
import "./addCategory.css";

import Button from "../../components/Button/Button"
import Table from "../../components/Table/table";

const AddCategory = () => {
  return (
    <div className="category-container">
      <div className="category-header">
        <p>Categories</p>
        <Button name={"ADD"} color={"orange"} />
      </div>
      <Table />
    </div>
  );
};

export default AddCategory;
