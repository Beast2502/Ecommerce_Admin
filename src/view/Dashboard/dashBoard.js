import React, { Component } from "react";
import "./dashBoard.css";
import PieChart from "../../components/PieChart/PieChart";

import * as xlsx from 'xlsx/xlsx.mjs';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const DashBoard = () => {
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json ,);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}
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
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
    </div>
  );
};

export default connect(null, actions)(DashBoard);
