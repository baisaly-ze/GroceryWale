import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import NavBar from "./components/NavBar/NavBar";
// import "./assets/css/style.css"
import Banner from "./components/Banner/Banner";


function App() {
  return (
    <>
      <NavBar />
      <div class="content">
      
       <Banner/>
      </div>
    </>
  );
}

export default App;
