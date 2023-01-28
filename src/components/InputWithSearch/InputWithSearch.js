import React, { useState } from "react";
import "./InputWithSearch.css";

const InputWithSearch = (props) => {

  const data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

  return (
      <div className="input-search-container">
        <input
          className="input-field"
          list="browsers"
          name="browser"
          id="browser"
          placeholder={props.name}
          onChange={props.onChange}
        />
        <datalist id="browsers">
          {data.map((op) => {
            return <option value={op}></option>;
          })}
        </datalist>
      </div>
  );
};
export default InputWithSearch;
