import React from "react";
import Text from "../Text/Text.jsx";

function Product({ image, title, subtitle}) {
  return <div className="flex col product">
    <img src={image} alt="product" />
    <h3>{title}</h3>
    <Text text={subtitle} />
  </div>;
}

export default Product;
