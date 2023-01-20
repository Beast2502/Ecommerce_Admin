import React, { useState } from "react";
import "./InputWithSearch.css";

const InputWithSearch = (props) => {
  const [opSel, setOpSel] = useState("");

  const data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(opSel);
  };
  return (
      <div className="input-search-container">
        <input
          className="input-field"
          list="browsers"
          name="browser"
          id="browser"
          placeholder="Search"
          onChange={(e) => setOpSel(e.target.value)}
        />
        <datalist id="browsers">
          {data.map((op) => {
            return <option value={op}></option>;
          })}
        </datalist>
        <button className="btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
  );
};
export default InputWithSearch;
