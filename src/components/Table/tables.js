import React from "react";
import "./table.css";
import Button from "../Button/Button";

const Table = (props) => {
  return (
    <div>
      <table className="table-container">
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {
          props.data ? props.data.map((data)=>{
            return (
              <tr>
              <td>1</td>
              <td>{data.name}</td>
              <td>{data.url}</td>
              <td><Button name={"Delete"} color={"red"} /></td>
            </tr>
            )
          }) :
          <tr>
          <td>1</td>
          <td>Banner 1</td>
          <td>Image 1</td>
          <td><Button name={"Delete"} color={"red"} /></td>
        </tr>
        }
       
      </table>
    </div>
  );
};

export default Table;
