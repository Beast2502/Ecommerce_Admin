import React from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
      <div className="sidebar-container">
        <NavLink className="side-nav" to={"/"}>DASHBOARD</NavLink>
        <NavLink className="side-nav" to={"/banners"}>BANNERS</NavLink>
        <NavLink className="side-nav" to={"/category"}>CATEGORY</NavLink>
        <NavLink className="side-nav" to={"/products"}>PRODUCTS</NavLink>
        <NavLink className="side-nav" to={"/orders"}>ORDERS</NavLink>
        <NavLink className="side-nav" to={"/users"}>USERS</NavLink>
      </div>
  );
};

export default SideBar;
