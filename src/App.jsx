import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
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


function App() {
  return (
    <>
      <NavBar />
      <div class="content">
      
       <Banner/>
       <Category/>
       <ProductList/>
       <Bgbanner/>
       <Featured/>
       <Discount/>
       <Arrived/>
       <BlogSection/>
       <Download/>
       <Endsection/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
