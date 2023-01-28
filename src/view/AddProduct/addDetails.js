import React, { useEffect, useState } from "react";
import "./addProduct.css";

import InputField from "../../components/InputField/InputField";
import InputWithSearch from "../../components/InputWithSearch/InputWithSearch";
import Button from "../../components/Button/Button.js";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const AddDetails = (props) => {
  const [addName, setName] = useState("");
  const [addCat, setCat] = useState("");
  const [addDesc, setDesc] = useState("");
  const [addQuan, setQuan] = useState("");
  const [addImage, setImage] = useState("");
  const [addCol, setCol] = useState("");
  const [addSku, setSku] = useState("");
  const [addWeig, setWei] = useState("");
  const [addLen, setLen] = useState("");
  const [addWid, setWid] = useState("");
  const [addHei, setHei] = useState("");
  const categoryList = [1, 2, 3, 4, 5, 6];

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCategory = (event) => {
    setCat(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  const handleQuant = (event) => {
    setQuan(event.target.value);
  };

  const handleCol = (event) => {
    setCol(event.target.value);
  };

  const handleSku = (event) => {
    setSku(event.target.value);
  };

  const handleWeight = (event) => {
    setWei(event.target.value);
  };
  const handleLen = (event) => {
    setLen(event.target.value);
  };
  const handleWid = (event) => {
    setWid(event.target.value);
  };
  const handleHei = (event) => {
    setHei(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(addName === "" || addCat ===""){
      alert("Opps ... Something you had miised")
    }
    props.addProduct({
      addName,
      addCat,
      addDesc,
      addQuan,
      addImage,
      addCol,
      addSku,
      addWeig,
      addLen,
      addWid,
      addHei,
    });
  };
  useEffect(() => {
    console.log(props.products);
  }, [props.products]);

  return (
    <div className="product-container">
      <p>Add product</p>
      <div className="product-sub-container">
        <InputField
          name={"Product Name"}
          type={"text"}
          handleChange={handleName}
        />
        <InputWithSearch
          name={"Category Name"}
          list={categoryList}
          onChange={handleCategory}
        />
        <InputField name={"Product Description"} handleChange={handleDesc} />
        <InputField
          name={"Quanity"}
          type={"number"}
          handleChange={handleQuant}
        />
        <InputField name={"Upload image"} />
      </div>
      <p>Packing Details</p>
      <div className="product-sub-container">
        <InputWithSearch name={"Color Name"} onChange={handleCol} />
        <InputField name={"SKU"} type={"number"} handleChange={handleSku} />
        <InputField
          name={"Item Weight"}
          type={"number"}
          handleChange={handleWeight}
        />
      </div>
      <p>Item Dimension</p>

      <div className="product-sub-container">
        <InputField name={"Length"} type={"number"} handleChange={handleLen} />
        <InputField name={"Width"} type={"number"} handleChange={handleWid} />
        <InputField name={"Height"} type={"number"} handleChange={handleHei} />
      </div>

      <div className="product-sub-btn">
        <Button name={"Add Product"} color={"#1456eb"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStatetoProps, actions)(AddDetails);
