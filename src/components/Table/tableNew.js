import React from "react";
import "./table.css";
import Button from "../Button/Button";
import { useState } from "react";

const TableNew = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(Object.keys(props.data));
  return (
    <div>
      <table className="table-container">
     
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        {
          props.data ? props.data.map((data,i)=>{
            console.log(data.status)
            return (
              <tr>
              <td>{i+1}</td>
              <td>{data.firstName}</td>
              <td>{data.email}</td>
              <td><input type="checkbox" id="horns" name="horns"  value="false" />{data.status}</td>
              <td><Button name={"View"} color={"#abdddd"} /></td>
            </tr>
            )
          }) :
          <tr>
         <p>No data Found</p>
        </tr>
        }
       
      </table>
    </div>
  );
};

export default TableNew;
