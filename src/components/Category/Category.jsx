import React from 'react';
import '../../assets/css/category.css';
import apple from '../../assets/images/apple.jpg';
import breads from '../../assets/images/breads.jpg';
import berries from '../../assets/images/berries.jpg';
import beverages from '../../assets/images/beverages.jpg';
import meat from '../../assets/images/meat.jpg';
import bread from '../../assets/images/bread.jpg';
import eggs from '../../assets/images/eggs.jpg';
import sweets from '../../assets/images/sweets.jpg';

const Category = () => {
  const categories = [
    { name: "Fruits & Veges", image: apple },
    { name: "Breads & Sweets", image: breads },
    { name: "Fruits & Veges", image: berries },
    { name: "Beverages", image: beverages },
    { name: "Meat Products", image: meat },
    { name: "Breads", image: bread },
    { name: "Fruits & Veges", image: eggs },
    { name: "Breads & Sweets", image: sweets },
  ];

  return (
    <div className="category-container">
      <br />
      <h2 className="category-heading">Categories</h2>
      <button className="category-button">View All</button>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
      

<div className='best-p'>

<br /><br /><br />
<h2 >Best Selling Products</h2>
<button className="v-button">View All</button>



</div>

    </div>




  );
};

export default Category;

