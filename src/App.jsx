import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import React from "react";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Banner />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
