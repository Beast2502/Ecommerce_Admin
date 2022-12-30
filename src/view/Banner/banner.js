import React from "react";
import './banner.css';

import Button from "../../components/Button/Button"
import Table from "../../components/Table/table";

const Banner = () =>{
    return (
       <div className="banner-container">
            {/* <div className="banner-title">Upload Banner</div>
            <div className="banner-fields">
                <input type="text" placeholder="Banner Name" />
                <input type= "file"/>
                <Button name={'Submit'} color={"rgb(0, 106, 245)"}></Button>
            </div> */}
            <Table/>
       </div>
    )
}

export default Banner;