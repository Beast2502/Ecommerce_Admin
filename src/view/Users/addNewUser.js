import React from "react";
import Button from "../../components/Button/Button";

import InputField from "../../components/InputField/InputField";

const AddUser = () => {
  return (
    <div className="product-container">
      <p>Add User</p>
      <div>
        <InputField name={"First Name"} type={"text"} />
        <InputField name={"Last Name"} type={"text"} />
      </div>
      <div>
        <InputField name={"Mobile Number"} />
        <InputField name={"Email"} />
      </div>
      <div>
        <InputField name={"Department"} />
        <InputField name={"Job Profile"} />
      </div>

      <InputField name={"Role Assigned"} />
      <p className="user-active-container">
        <InputField name={"Status"} type="checkbox" /> Active Status
      </p>
      <Button name={"Submit"} />
    </div>
  );
};

export default AddUser;
