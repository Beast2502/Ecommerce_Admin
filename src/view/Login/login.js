import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import "./login.css";

import * as actions from "../../redux/actions";

import Image from './image.svg';

const Login = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.authUser({ userEmail, password });
    console.log(props.isActive);
  };

  return (
    <div className="login-container">
      <img src={Image} className="login-image"/>
      <div className="login-detail">
        <p className="login-title">Admin Login</p>
        <input type="text" placeholder="Email" onChange={handleEmail}  className="login-control"/>
        <input type="password" placeholder="Password" onChange={handlePass}  className="login-control"/>
        <Button name={"Login"} color={"#6c63ff"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isActive: state.isActive,
  };
};

export default connect(mapStateToProps, actions)(Login);
