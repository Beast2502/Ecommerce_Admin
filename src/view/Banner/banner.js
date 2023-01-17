import React, { useEffect, useState } from "react";
import './banner.css';

import Button from "../../components/Button/Button"
import Table from "../../components/Table/bannerTable";
import { connect } from "react-redux";
import * as actions from '../../redux/actions'

const Banner = (props) =>{
    const [bannerName , setBanner] = useState(' ');
    const [bannerPath ,setPath] = useState(' ');
    const handleNameChange = (event) =>{
        setBanner(event.target.value)
    }
    const handleFile =(event) =>{
        setPath(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(bannerName);
        console.log(bannerPath);
        props.addBanner({bannerName,bannerPath});
        setBanner('');
        setPath('');
        
    }
    useEffect(()=>{
        console.log(props.banners)
    },[props.banners])
    
    return (
       <div className="banner-container">
            <div className="banner-header">
                <p>Upload Banner</p>
                <div>
                    <input type='text' placeholder="Name" onChange={handleNameChange} />
                    <input type='file' placeholder ="File" onChange={handleFile}/>
                </div>
                <Button name={"Upload"} color={"orange"} onClick={handleSubmit} value={bannerName} />
            </div>
            <Table data={props.banners}/>
       </div>
    )
}
function mapStateToProps(state){
    return {banners : state.banners}
}

export default connect(mapStateToProps,actions)(Banner);