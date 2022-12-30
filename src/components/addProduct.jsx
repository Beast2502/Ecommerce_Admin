import React from "react";

const ProductImageUpload =() =>{

    const uploadImage = async (e) =>{
        console.log(e.target.name,"Name")
        const file = e.target.files[0];
        console.log(file,"File");
        const base64 = await convertBase64(file);
        console.log(base64);
    }

    const convertBase64=(file)=>{
        return new Promise((resolve ,reject)=>{

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload =()=>{
                return resolve(fileReader.result);
            };

            fileReader.onerror = (error) =>{
                return reject(error);
            }
        })
    }


    return (
        <>
         Add Product
         <input
         type="file"
         name="image1"
         onChange={(e)=>{
            uploadImage(e);
         }}
         />
          <input
         type="file"
         name ="image2"
         onChange={(e)=>{
            uploadImage(e);
         }}
         />
        </>
    )
}

export default ProductImageUpload;