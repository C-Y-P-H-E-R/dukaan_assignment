import React from "react";
import Heading from "../Text/Heading.jsx";
import Subtitle from "../Text/Subtitle.jsx";
import Button from "../Button/Button.jsx";
import Input from "./Input.jsx";
import Text from "../Text/Text.jsx";
import Slogan from "./Slogan.jsx";
import "../../css/SloganContainer.css";

export default function SloganContainer() {
  return (
    <div className="slogan-container container bg-white flex col">
      <Heading text="Free Slogan Creator" />
      <Subtitle text="Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free." />
      <Text text="Word for your slogan" />
      <Input />
      <Button type="primary" text="Generate Slogan" />
      <div className="divider"></div>
      <div className="slogans-header">
        <Subtitle text="We have generated 1,023 slogans for “cozy”" />
        <Button type="outlined" text="Download All" />
      </div>

      <div className="slogans-grid">
        {slogans.map((slogan, idx) => (
          <Slogan
            slogan={slogan}
            placement={["left", "right"][idx % 2]}
            key={idx}
          />
        ))}
      </div>

      <div className="divider"></div>

      <div className="slogan-pagination">
        <div className="slogan-pagination-nums">
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          ....
          <a href="#">21</a>
        </div>
        <div className="slogan-next">
          {" "}
          Next &gt;
        </div>
      </div>
    </div>
  );
}


const sloganLeft =
  "There is no Sore it will Not Heal, No cool it will not Subdue.";

const sloganRight = "coziness building for tomorrow";

const slogans = new Array(18)
  .fill("")
  .map((_, i) => [sloganLeft, sloganRight][i % 2]);
