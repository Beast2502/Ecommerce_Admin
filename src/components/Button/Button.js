import React from "react";
import './Button.css';

const Button = (props) =>{
    return(
        <button className="btn" style={props.color ? {backgroundColor : `${props.color}`} : {backgroundColor : "#d8dfeb"} } onClick={props.onClick}>{props.name}</button>
    )
}

export default Button;