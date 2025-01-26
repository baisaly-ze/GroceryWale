import React from "react";
import '../../assets/css/product.css'
import t1 from "../../assets/images/thumb-1.jpg";
import  t2 from "../../assets/images/thumb-2.png";
import t3 from "../../assets/images/thumb-3.png";
import t4 from "../../assets/images/thumb-4.png";
import t5 from "../../assets/images/thumb-5.png";
import t6 from "../../assets/images/thumb-6.png";
import t7 from "../../assets/images/thumb-7.png";
import t8 from "../../assets/images/thumb-8.png";
import t9 from "../../assets/images/thumb-9.png";
import t10 from "../../assets/images/thumb-10.png";

const products = [
  {
    name: "Whole Wheat Sandwich Bread",
    price: "30.00",
    originalPrice: "40.00",
    discount: "10% OFF",
    rating: 4.5,
    image: t1,
  },
  {
    name: "Whole Grain Oatmeal",
    price: "50.00",
    originalPrice: "60.00",
    discount: "10% OFF",
    rating: 4.1,
    image: t2,
  },
  {
    name: "Sharp Cheddar Cheese Block",
    price: "120.00",
    originalPrice: "130.00",
    discount: "10% OFF",
    rating: 3.2,
    image: t3,
  },
  {
    name: "Organic Baby Spinach",
    price: "18.00",
    originalPrice: "28.00",
    discount: "10% OFF",
    rating: 4.2,
    image: t4,
  },
  {
    name: "Organic Spinach Leaves (Fresh Produce)",
    price: "10.00",
    originalPrice: "20.00",
    discount: "10% OFF",
    rating: 4.2,
    image: t5,
  },
  {
    name: "Fresh Salmon",
    price: "300.00",
    originalPrice: "600.00",
    discount: "50% OFF",
    rating: 4.7,
    image: t6,
  },
  {
    name: "Imported Italian Spaghetti Pasta",
    price: "80.00",
    originalPrice: "140.00",
    discount: "30% OFF",
    rating: 4,
    image: t7,
  },
  {
    name: "Granny Smith Apples",
    price: "180.00",
    originalPrice: "240.00",
    discount: "10% OFF",
    rating: 4.3,
    image: t8,
  },
  {
    name: "Organic 2% Reduced Fat Milk",
    price: "30.00",
    originalPrice: "35.00",
    discount: "10% OFF",
    rating: 3.9,
    image: t9,
  },
  {
    name: "Greek Style Plain Yogurt",
    price: "30.00",
    originalPrice: "50.00",
    discount: "10% OFF",
    rating: 4.2,
    image: t10,
  },
];


const ProductList = () => {
  return (
    
    <div className="grid1">
      {products.map((product, index) => (
        <div key={index} className="box">
          <img
            src={product.image}
            alt={product.name}
            className="cover"
          />
          <h3 className="productname">{product.name}</h3>
          <div className="container">
            <span className="Oprice">₹{product.originalPrice}</span>
            <span className="price">₹{product.price}</span>
          </div>
          <div className="discount">{product.discount}</div>
          <div className="review">⭐ {product.rating}</div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
    
  );
};

export default ProductList;
