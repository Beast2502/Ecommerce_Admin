import React, { useEffect, useState } from "react";
import "./addProduct.css";

import InputField from "../../components/InputField/InputField";
import InputWithSearch from "../../components/InputWithSearch/InputWithSearch";
import Button from "../../components/Button/Button.js";
import ImageUpload from "../../components/ImageUploader/ImageUpload";

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
    if(addName === "" || addCat ==="" || addDesc ==="" || addImage === "" || addCol ==="" ){
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

    setName("");
    setCat("");
    setDesc("");
    setQuan("");
    setImage("");
    setCol("");
    setSku("");
    setWei("");
    setLen("");
    setWid("");
    setHei("");
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
          value={addName}
          type={"text"}
          handleChange={handleName}
        />
        <InputWithSearch
          name={"Category Name"}
          value={addCat}
          list={categoryList}
          onChange={handleCategory}
        />
        <InputField name={"Product Description"} value={addDesc} handleChange={handleDesc}  />
        <InputField
          name={"Quanity"}
          value={addQuan}
          type={"number"}
          handleChange={handleQuant}
        />
        
        
        
       <ImageUpload handleUpload = {setImage} value={addImage}/>
      </div>
      <p>Packing Details</p>
      <div className="product-sub-container">
        <InputWithSearch name={"Color Name"} value={addCol} onChange={handleCol} />
        <InputField name={"SKU"} value={addSku} type={"text"} handleChange={handleSku} />
        <InputField
          name={"Item Weight"}
          value={addWeig}
          type={"number"}
          handleChange={handleWeight}
        />
      </div>
      <p>Item Dimension</p>

      <div className="product-sub-container">
        <InputField name={"Length"} value={addLen} type={"number"} handleChange={handleLen} />
        <InputField name={"Width"} value={addWid} type={"number"} handleChange={handleWid} />
        <InputField name={"Height"} value={addHei} type={"number"} handleChange={handleHei} />
      </div>

      <div className="product-sub-btn">
        <Button name={"Add Product"} color={"rgb(113 146 219"} onClick={handleSubmit} />
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
