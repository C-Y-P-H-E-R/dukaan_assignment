import React from "react";
import "../../css/Footer.css";
import Logo from "../../assets/navbar/navbar_logo.svg";
import MadeIn from "../../assets/footer/made-in.png";

function Footer() {
  return (
    <div className="footer-container bg-black">
      <div className="container">
        <div className="footer">
          <img src={Logo} alt="Dukaan" />
          <div className="flex col">
            <a href="#">Contact</a>
            <a href="#">FAQ&apos;s</a>
          </div>
          <div className="flex col">
            <a href="#">Tutorial</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex col">
            <a href="#">Privacy</a>
            <a href="#">Banned Items</a>
          </div>
          <div className="flex col">
            <a href="#">About</a>
            <a href="#" className="flex">
              Jobs <p className="num">3</p>{" "}
            </a>
          </div>
          <div className="flex col">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="divider bg-light-grey"></div>
        <div className="footer-credits flex">
          <p>Dukaan 2020, All rights reserved.</p>
          <img src={MadeIn} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
