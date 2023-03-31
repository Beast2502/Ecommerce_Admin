import React, { Component } from "react";
import "./dashBoard.css";
import PieChart from "../../components/PieChart/PieChart";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const DashBoard = () => {
  return (
    <div className="dash-header">
      <div>
        <p>Total Sales</p>
        <PieChart />
      </div>
      <div>
        <p>Total Order</p>
        <PieChart />
      </div>
      <div>
        <p>Total Users</p>
        <PieChart />
      </div>
    </div>
  );
};

export default connect(null, actions)(DashBoard);
