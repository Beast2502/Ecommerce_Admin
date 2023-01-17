import React from "react";
import "./header.css";

import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from '../../redux/actions';

const Header = (props) => {

  const handleSubmit = () =>{
    props.logOutUser();
    console.log(props.isActive)
   
  }
  return (
   <header className="header-container">
        <div>
            <p>Admin</p>
        </div>
        <div>
            <Button name={"Notify"} />
            <Button name={"Log out"} color={"rgb(223, 66, 66)"} onClick={handleSubmit} />
            
        </div>
   </header>
  );
};

const mapStateToProps = (state) =>{
  return {
    isActive : state.isActive
  }
}

export default connect(mapStateToProps,actions)(Header);
