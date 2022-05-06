import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip"
import "../../css/Slogan.css";

function Slogan({ slogan, placement }) {
  const [title,setTitle] = useState("");

  return <Tooltip title={title} placement={placement}>
    <div
      className="text-primary text-base slogan-card"
      onMouseEnter={() => setTitle("Click to Copy!")}
      onClick={() => setTitle("Copied!")}
    >
      {slogan}
    </div>
  </Tooltip>;
}

export default Slogan;
