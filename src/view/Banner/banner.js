import React from "react";
import './banner.css';

import Button from "../../components/Button/Button"
import Table from "../../components/Table/table";

const Banner = () =>{
    return (
       <div className="banner-container">
            <div className="banner-header">
                <p>Upload Banner</p>
                <Button name={"Upload"} color={"orange"} />
            </div>
            <Table/>
       </div>
    )
}

export default Banner;