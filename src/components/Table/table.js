import React from "react";
import "./table.css";
import Button from "../Button/Button";

const Table = () => {
  return (
    <div>
      <table className="table-container">
        <tr>
          <th>S.No.</th>
          <th>Banner Name</th>
          <th>Banner</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Banner 1</td>
          <td>Image 1</td>
          <td><Button name={"Delete"} color={"red"} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Banner2 </td>
          <td>Image 1</td>
          <td><Button name={"Delete"} color={"red"} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Banner 3</td>
          <td>Image 3</td>
          <td><Button name={"Delete"} color={"red"} /></td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
