import React from "react";

import './order.css';

import Button from "../../components/Button/Button"
import Table from "../../components/Table/tables";

const Orders = () => {
  return (
    <div className="order-container">
      <div className="order-header">
        <p>Orders</p>
      </div>
      <Table />
    </div>
  );
};

export default Orders;
