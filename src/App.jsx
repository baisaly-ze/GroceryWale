import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import React from "react";
import "./App.css";
import Category from "./components/Category/Category";
import ProductList from "./components/Category/ProductList";
import Bgbanner from "./components/Banner/Bgbanner";
import Featured from "./components/Category/Featured";
import Discount from "./components/Banner/Discount";
import Arrived from "./components/Category/Arrived";
import BlogSection from "./components/Category/BlogSection";
import Download from "./components/Banner/Download";
import Endsection from "./components/Category/Endsection";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Banner />
        <Category />
        <ProductList />
        <Bgbanner />
        <Featured />
        <Discount />
        <Arrived />
        <BlogSection />
        <Download />
        <Endsection />
        <Footer />
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
