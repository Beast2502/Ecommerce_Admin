import React from "react";
import "./addProduct.css";

import InputField from "../../components/InputField/InputField";
import InputWithSearch from "../../components/InputWithSearch/InputWithSearch";
import Button from '../../components/Button/Button.js';

const AddDetails = (props) => {
  return (
    <div className="product-container">
      <p>Add product</p>
      <div className="">
        <InputField name={"Product Name"} />
        <InputWithSearch />
        <InputField name={"Product Description"} />
        <InputField name={"Quanity"} />
        <InputField name={"Upload image"} />
        <Button name={'Upload'} color ={'rgb(223, 66, 66);'} />
        <InputWithSearch />
        <InputField name={"SKU"} />
        <InputField name={"Item Weight"} />
        <div>
          <p>Item Dimension</p>
          <InputField name={"Lenghth"} />
          <InputField name={"Width"} />
          <InputField name={"Height"} />
        </div>

        <Button name={'Add Product'} color ={'rgb(223, 66, 66);'} />
      </div>
    </div>
  );
};

export default AddDetails;
