import React from "react";
import SloganContainer from "./components/Slogan/SloganContainer.jsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Product/ProductsContainer.jsx";
import Features from "./components/Features/FeaturesContainer.jsx";
import "./css/App.css";

export default function App() {
  return <div>
    <Navbar />
    <SloganContainer/>
    <Features />
    <Products />
    <Footer />
  </div>;
}
