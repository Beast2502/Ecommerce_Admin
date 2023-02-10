import React, { useEffect, useState } from "react";
import "./banner.css";

import Button from "../../components/Button/Button";
import Table from "../../components/Table/bannerTable";
import ImageUpload from "../../components/ImageUploader/ImageUpload";
import InputField from "../../components/InputField/InputField";


import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Banner = (props) => {
  const [name, setBanner] = useState(" ");
  const [url, setPath] = useState(" ");

  const handleNameChange = (event) => {
    setBanner(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBanner({ name, url });
    setBanner("");
    setPath("");
  };
  useEffect(() => {
    console.log(props.banners);
  }, [props.banners]);

  return (
    <div className="banner-container">
      <div className="banner-header">
        <p>Upload Banner</p>

        <InputField
          name={"Banner Name"}
          value={name}
          type={"text"}
          handleChange={handleNameChange}
        />
        <ImageUpload handleUpload={setPath} value={url} />

        <Button name={"Upload"} color={"orange"} onClick={handleSubmit} />
      </div>
      <Table data={props.banners} />
    </div>
  );
};
function mapStateToProps(state) {
  return { banners: state.banners };
}

export default connect(mapStateToProps, actions)(Banner);
