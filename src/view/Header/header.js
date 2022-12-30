import React from "react";
import "./header.css";

import Button from "../../components/Button/Button";

const Header = () => {
  return (
   <header className="header-container">
        <div>
            <p>Admin</p>
        </div>
        <div>
            <Button name={"Notify"} />
            <Button name={"Log out"} color={"rgb(223, 66, 66)"} />
        </div>
   </header>
  );
};

export default Header;
