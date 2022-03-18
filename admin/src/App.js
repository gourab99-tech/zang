import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Home } from "./components/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import React from "react";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";

<link
  href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap"
  rel="stylesheet"
></link>;
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<Products />} />
        <Route path={"/products/:id?"} element={<ProductCard />} />
        <Route path={"/cart/:id?"} element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}
