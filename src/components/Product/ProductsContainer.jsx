import React from "react"
import Product from "./Product.jsx";
import Heading from "../Text/Heading.jsx";
import "../../css/Product.css";
import Privacy from "../../assets/home/freeproducts/privacy.png";
import Domain from "../../assets/home/freeproducts/domain.png";
import Terms from "../../assets/home/freeproducts/terms.png";
import Invoice from "../../assets/home/freeproducts/invoice.png";

const freeProductsSubtitle =
  "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.";

const freeProducts = [
  {
    title: "Privacy Policy Generator",
    subtitle: freeProductsSubtitle,
    image: Privacy,
    id: 1,
  },
  {
    title: "Terms & Conditions Generator",
    subtitle: freeProductsSubtitle,
    image: Terms,
    id: 2,
  },
  {
    title: "Domain Name Generator",
    subtitle: freeProductsSubtitle,
    image: Domain,
    id: 3,
  },
  {
    title: "Invoice Generator",
    subtitle: freeProductsSubtitle,
    image: Invoice,
    id: 4,
  },
];

export default function ProductsContainer() {
  return (
    <div className="bg-white products-container">
      <div className="container">
        <Heading text="Try our other free products" />
        <div className="products">
          {freeProducts.map(({image, title, subtitle, id}) => <Product image={image} title={title} subtitle={subtitle} key={id} />)}
        </div>
      </div>
    </div>
  )
}
