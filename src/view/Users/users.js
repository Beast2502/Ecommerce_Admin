import React, { useEffect, useState } from "react";
import "./users.css";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import Button from "../../components/Button/Button";
import TableNew from "../../components/Table/tableNew";
import { NavLink } from "react-router-dom";


const Users = () => {
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    setUserList([
      {
        name: "Mehul Saxena",
        email: "mehulsaxena45@gmail.com",
        active: true,
      },
      {
        name: "Mehul Saxena",
        email: "mehulsaxena45@gmail.com",
        active: true,
      },
      {
        name: "Mehul Saxena",
        email: "mehulsaxena45@gmail.com",
        active: true,
      },
      {
        name: "Mehul Saxena",
        email: "mehulsaxena45@gmail.com",
        active: false,
      },
      {
        name: "Mehul Saxena",
        email: "mehulsaxena45@gmail.com",
        active: true,
      },
    ]);
  }, []);

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
    products:state.products
  }
}

export default connect(mapStateToprops,actions)(Users);
