import React from "react";
import "../../assets/css/arrived.css"; 


import ja1 from "../../assets/images/ja1.png";
import ja2 from "../../assets/images/ja2.png";
import ja3 from "../../assets/images/ja3.png";
import ja4 from "../../assets/images/ja4.png";
import ja5 from "../../assets/images/ja5.png";


  const products = [
    {
      image: ja1,
      name: "Bread",
      price: "18.00",
      originalPrice: "24.00",
      discount: "10% OFF",
      rating: 4.5
      
    },
    {
      image: ja2,
      name: "Fresh juice",
      price: "160.00",
      originalPrice: "240.00",
      discount: "10% OFF",
      rating: 4.5
      
    },
    {
      image: ja3,
      name: "Custard Powder",
      price: "60.00",
      originalPrice: "65.00",
      discount: "5% OFF",
      rating: 4.5
      
    },
    {
      image: ja4,
      name: "Gourmet Dark Chocolate",
      price: "180.00",
      originalPrice: "240.00",
      discount: "10% OFF",
      rating: 4.5
      
    },
    {
      image: ja5,
      name: "Sunstar Fresh Melon Juice",
      price: "160.00",
      originalPrice: "200.00",
      discount: "10% OFF",
      rating: 4.5
    },
  ];
  
  const Arrived = () => {
  return (
    <div className="p-4">
      <h2 className="heading">Just Arrived</h2>
      <button className="b-tn">View All</button>

      <div className="grid-s">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover"
            />
            <h3 className="p-name">{product.name}</h3>
            <div className="details">
              <span className="star">⭐</span>
              <span>
                {product.rating} 
              </span>
            </div>
            <div className="price-container">

            <div className="o-price">₹{product.originalPrice}</div>
            <div className="actual-p">₹{product.price}</div>
            </div>
            <div className="d-price">{product.discount}</div>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrived;
