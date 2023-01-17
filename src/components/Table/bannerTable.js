import React from "react";
import "./table.css";
import Button from "../Button/Button";

const Table = (props) => {
  return (
    <div>
      <table className="table-container">
        <tr>
          <th>S.No.</th>
          <th>Banner Name</th>
          <th>Banner Image</th>
          <th>Action</th>
        </tr>
        {
          props.data ? props.data.map((data)=>{
            return (
              <tr>
              <td>1</td>
              <td>{data.bannerName}</td>
              <td>{data.bannerPath}</td>
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
