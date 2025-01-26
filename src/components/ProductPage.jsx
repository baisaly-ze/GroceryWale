import React from "react";
import "@/assets/css/ProductPage.css";

function ProductPage() {
  return (
    <div className="product-page">
    <div>
      {/* Hero Section */}
      <div>
        <img className="hero-section" src="paan-corner-desktop.webp" alt="Hero Section" />
      </div>
<div className="categories">
      {/* Grocery Section */}
      <h2 className="grocery">Grocery & Kitchen</h2>
      <div className="product-section">
        <img className="space" src="/Grocery & Kitchen/fruits&vegi.webp" alt="Fruits and Vegetables" />
        <img className="space" src="/Grocery & Kitchen/dairy.webp" alt="Dairy" />
        <img className="space" src="/Grocery & Kitchen/atta.webp" alt="Atta" />
        <img className="space" src="/Grocery & Kitchen/meat.webp" alt="Meat" />
        <img className="space" src="/Grocery & Kitchen/masala.webp" alt="Masala" />
        <img className="space" src="/Grocery & Kitchen/breakfast.webp" alt="Breakfast" />
        <img className="space" src="/Grocery & Kitchen/packed_food.webp" alt="Packed Food" />
      </div>

      {/* Snacks Section */}
      <h2 className="Snacks">Snacks & Drinks</h2>
      <div className="product-section2">
        <img className="space1" src="/Snacks & Drinks/Zepto-Cafe.webp" alt="Zepto Cafe" />
        <img className="space1" src="/Snacks & Drinks/tea,coffee.webp" alt="Tea and Coffee" />
        <img className="space1" src="/Snacks & Drinks/icecreams.webp" alt="Ice Creams" />
        <img className="space1" src="/Snacks & Drinks/frozenfood.webp" alt="Frozen Food" />
        <img className="space1" src="/Snacks & Drinks/sweetcravings.webp" alt="Sweet Cravings" />
        <img className="space1" src="/Snacks & Drinks/colddrink.webp" alt="Cold Drinks" />
        <img className="space1" src="/Snacks & Drinks/munchies.webp" alt="Munchies" />
        <img className="space1" src="/Snacks & Drinks/buiscuit.webp" alt="Biscuits" />
      </div>

      {/* Beauty Section */}
      <h2 className="Beauty">Beauty & Personal Care</h2>
      <div className="product-section3">
        <img className="space2" src="/Beauty & Personal Care/makeup.webp" alt="Makeup" />
        <img className="space2" src="/Beauty & Personal Care/skincare.webp" alt="Skincare" />
        <img className="space2" src="/Beauty & Personal Care/babycare.webp" alt="Baby Care" />
        <img className="space2" src="/Beauty & Personal Care/bath.webp" alt="Bath" />
        <img className="space2" src="/Beauty & Personal Care/hair.webp" alt="Hair" />
        <img className="space2" src="/Beauty & Personal Care/jewellery.webp" alt="Jewellery" />
        <img className="space2" src="/Beauty & Personal Care/apparel.webp" alt="Apparel" />
      </div>
    </div>
    </div>
    </div>
  );
}


export default ProductPage;
