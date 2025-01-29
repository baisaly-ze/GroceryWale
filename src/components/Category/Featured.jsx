import React from "react";
import "../../assets/css/featured.css";

import F2 from "../../assets/images/F2.png";
import F3 from "../../assets/images/F3.png";
import F4 from "../../assets/images/F4.png";
import F5 from "../../assets/images/F5.png";
import F6 from "../../assets/images/F6.png";

const products = [
  {
    id: 1,
    name: "Greek Style Plain Yogurt",
    image: F2,
    originalPrice: 30.0,
    discountedPrice: 20.0,
    rating: 4.5,
    
  },
  {
    id: 2,
    name: "Pure Squeezed No Pulp Orange Juice",
    image: F3,
    originalPrice: 80.0,
    discountedPrice: 85.0,
    rating: 4.5,
    
  },
  {
    id: 3,
    name: "Yougart",
    image: F4,
    originalPrice: 90.0,
    discountedPrice: 100.0,
    rating: 4.5,
    
  },
  {
    id: 4,
    name: "Fresh Lemons",
    image: F5,
    originalPrice: 200.0,
    discountedPrice: 240.0,
    rating: 4.5,
    
  },
  {
    id: 5,
    name: "Candy",
    image: F6,
    originalPrice: 22.0,
    discountedPrice: 30.0,
    rating: 4.5,
    
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      
      <h3 className="h3class">{product.name}</h3>
      <div className="price">
        <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
        <span className="discounted-price">₹{product.discountedPrice.toFixed(2)}</span>
      </div>
      
      <div className="details">
  <span className="star">⭐</span>
  <span>
    {product.rating}
    
  </span>
</div>

      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      
      <button className="btnn">View All</button>
     
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
