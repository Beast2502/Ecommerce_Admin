import React from "react";

import './order.css';

import Button from "../../components/Button/Button"
import Table from "../../components/Table/table";

const Orders = () => {
  return (
    <div className="order-container">
      <div className="order-header">
        <p>Order</p>
        <Button name={"ADD"} color={"orange"} />
      </div>
      <Table />
    </div>
  );
};

export default Orders;
