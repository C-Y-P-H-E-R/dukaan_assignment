import React from "react";
import Button from "../Button/Button.jsx";
import Logo from "../../assets/navbar/navbar_logo.svg";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex wrap">
        <img src={Logo} alt="Dukaan" />
        <div className="flex row">
          <Button type="primary" text="Sign In" />
          <Button type="secondary" text="Dukaan for PC" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
