import React, { useState ,useEffect } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/usersActions";

const AddUser = (props) => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [mobile, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [depart, setDepart] = useState("");
  const [prof, setProf] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(false);

  const handleFName = (e) => {
    setFirst(e.target.value);
  };

  const handleLName = (e) => {
    setLast(e.target.value);
  };
  const handleMob = (e) => {
    setMob(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDepart = (e) => {
    setDepart(e.target.value);
  };
  const handleProfile = (e) => {
    setProf(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(!status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUser({
      firstName,
      lastName,
      mobile,
      email,
      depart,
      prof,
      role,
      status
    })

  };

  useEffect(() => {
   
    console.log(props.users ,"UPDATED USERS")
  }, [props.users]);

  return (
    <div className="user-container">
      <p>Add User</p>
      <div className="user-sub-container">
        <InputField
          name={"First Name"}
          type={"text"}
          value={firstName}
          handleChange={handleFName}
        />
        <InputField
          name={"Last Name"}
          type={"text"}
          value={lastName}
          handleChange={handleLName}
        />
      </div>
      <div className="user-sub-container">
        <InputField
          name={"Mobile Number"}
          type={"number"}
          value={mobile}
          handleChange={handleMob}
        />
        <InputField
          name={"Email"}
          type={"email"}
          value={email}
          handleChange={handleEmail}
        />
      </div>
      <div className="user-sub-container">
        <InputField
          name={"Department"}
          type={"text"}
          value={depart}
          handleChange={handleDepart}
        />
        <InputField
          name={"Job Profile"}
          type={"text"}
          value={prof}
          handleChange={handleProfile}
        />
      </div>
      <div className="user-sub-container">
        <InputField
          name={"Role Assigned"}
          type={"text"}
          value={role}
          handleChange={handleRole}
        />
        <p className="user-active-container">
          <InputField
            name={"Status"}
            type={"checkbox"}
            value={status}
            handleChange={handleStatus}
          />
          Active Status
        </p>
      </div>
      <div className="user-sub-container">
        <Button
          name={"Submit"}
          color={"rgb(113 146 219"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

const mapStateToprops = (state) =>{
  return{
    users : state.users
  }
}

export default connect(mapStateToprops, actions)(AddUser);
