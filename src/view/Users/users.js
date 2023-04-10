import React, { useEffect, useState } from "react";
import "./users.css";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import Button from "../../components/Button/Button";
import TableNew from "../../components/Table/tableNew";
import { NavLink } from "react-router-dom";


const Users = (props) => {
  const [usersList, setUserList] = useState([]);
 console.log(props.users ,"YSSERRSSSS")
  useEffect(() => {
    setUserList(props.users);
  }, [props.users]);

  return (
    <div className="user-container">
      <div className="user-header">
        <p>Users</p>
        <button className="btn"><NavLink to={"./addUsers"} className='nav-link'>ADD</NavLink></button>
      </div>
      <TableNew data={usersList} />
    </div>
  );
};

const mapStateToprops = (state) =>{
  return {
    users:state.users
  }
}

export default connect(mapStateToprops,actions)(Users);
