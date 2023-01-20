import React from "react";  
import "./InputField.css"

const InputField = (props) =>{
    return (
        <>
            <input placeholder={props.name} className="input-field" />
        </>
    )
}

export default InputField;