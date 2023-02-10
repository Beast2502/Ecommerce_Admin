import React, { useEffect, useState } from "react";
import "./addCategory.css";

import Button from "../../components/Button/Button";
import Table from "../../components/Table/bannerTable";
import ImageUpload from "../../components/ImageUploader/ImageUpload";
import InputField from "../../components/InputField/InputField";

import { connect } from "react-redux";
import * as actions from '../../redux/actions';



const AddCategory = (props) => {
  const [name, setName] = useState("");
  const [url, setImage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCategory({ name, url });
    console.log(props.categories)

  };

  useEffect(()=>{
    console.log(props.categories)
  },[props.categories])

  return (
    <div className="category-container">
      <div className="category-header">
      <p>Category</p>
      <InputField
          name={"Category Name"}
          value={name}
          type={"text"}
          handleChange={handleName}
        />
        <ImageUpload handleUpload={setImage} value={url} />
        <Button name={"ADD"} color={"orange"} onClick={handleSubmit} />
      </div>
      <Table data={props.categories}/>
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    categories: state.categories,
  };
}
export default connect(mapStatetoProps, actions)(AddCategory);
