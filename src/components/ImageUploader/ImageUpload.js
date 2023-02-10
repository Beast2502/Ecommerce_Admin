import React from "react";
import "./ImageUpload.css";
import UploadIcon from "./upload.png";

const ImageUpload = (props) => {
  const uploadImage = async (e) => {
    console.log(e.target.name, "Name");
    const file = e.target.files[0];
    console.log(file, "File");
    const base64 = await convertBase64(file);
    console.log(base64);
    props.handleUpload(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        return resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        return reject(error);
      };
    });
  };

  return (
    <>
      <div className="uploadImage">
        <label for="file-ip-1">
          <img src={UploadIcon} alt="upload Image" className="uploadImg"/> Upload Image
        </label>

        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          name="image1"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </div>
    </>
  );
};

export default ImageUpload;
