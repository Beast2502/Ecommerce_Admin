import React from "react";
import "./users.css";


import Button from "../../components/Button/Button"
import Table from "../../components/Table/table";

const Users = () => {
  return (
    <div className="user-container">
      <div className="user-header">
        <p>Users</p>
        <Button name={"ADD"} color={"orange"} />
      </div>
      <Table />
    </div>
  );
};

export default Users;
