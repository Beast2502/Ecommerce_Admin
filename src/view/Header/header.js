import React, { useEffect, useState ,useRef } from "react";
import "./header.css";

import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from '../../redux/actions';

const Header = (props) => {
  const [state ,setState] = useState(10);

  const handleSubmit = () =>{
    props.logOutUser();
    console.log(props.isActive)
   
  }

  const handleNoti =()=>{
      setState(state + 10);
      setState(state + 10);
  }
  useEffect(()=>{
    console.log(state)
  },[state])
  
  return (
   <header className="header-container">
        <div>
            <p>Admin</p>
        </div>
        <div>
            <Button name={"Notify"} onClick={handleNoti} />
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
