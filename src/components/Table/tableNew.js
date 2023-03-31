import React from "react";
import "./table.css";
import Button from "../Button/Button";
import { useState } from "react";

const TableNew = (props) => {
    const [isChecked, setIsChecked] = useState(true);
    console.log(Object.keys(props.data));

  return (
    <div>
      <table className="table-container">
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
        {
          props.data ? props.data.map((data)=>{
            return (
              <tr>
              <td>1</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td><input type="checkbox" id="horns" name="horns"  checked={data.active} /></td>
              <td><Button name={"View"} color={"#abdddd"} /></td>
            </tr>
            )
          }) :
          <tr>
          <td>1</td>
          <td>Banner 1</td>
          <td>Image 1</td>
          <td><input type="checkbox" id="horns" name="horns"  checked={isChecked} /></td>
          <td><Button name={"View"} color={"#abdddd"} /></td>
        </tr>
        }
       
      </table>
    </div>
  );
};

export default TableNew;
