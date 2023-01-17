import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import "./login.css";

import * as actions from '../../redux/actions';

const Login = (props) => {
  const [userEmail ,setUserEmail]  = useState('');
  const [password,setPassword] = useState('');

  const handleEmail = (event) =>{
    setUserEmail(event.target.value)
  }

  const handlePass = (event) =>{
    setPassword(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.authUser({userEmail,password})
    console.log(props.isActive)
  } 

  return (
   <div>
        <p>Login View</p>
        <input type='text' placeholder="Email" onChange={handleEmail} />
        <input type='password' placeholder="Password" onChange={handlePass} />
        <Button name={"Login"} color={"orange"} onClick={handleSubmit} />
   </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    isActive : state.isActive
  }
}

export default connect(mapStateToProps,actions)(Login);
