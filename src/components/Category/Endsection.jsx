
import React from "react";
import '../../assets/css/endsection.css'; 

const Endsection = () => {
  const tags = [
    "Chips and Snacks",
    "Cold drinks and juices",
    "Oil, Ghee & Masala",
    "Sauces and spreads",
    "Vegetables and fruits",
    "Rice",
    "Atta",
    "Pasta and Noodles",
    "Bread & Butter",
    "Biscuits & Bakery",
    "Dry Fruits & Cereal",
    "Chicken, Meat & Fish",
    "Kitchenware and Applicanes ",
    "Sweetes and chocolates",
    "Bath & Body",
    "Beauty & Cosmetics",
    "Hair , Skin & Face",
    "Feminine Hygine",
    "Baby care",
    "Health & Pharma",
    "Home & Lifestyle",
    "Stationery & Games",
    "Electronics",
    "Cleaners and Replinents",
    "Pooja store",
    "Sports Store",
    "Bookstore",
    "Fashion basics store",
    "Toy store"

  ];

  const features = [
    { title: "Free delivery", description: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
    { title: "100% secure payment", description: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
    { title: "Quality guarantee", description: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
    { title: "Guaranteed savings", description: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
    { title: "Daily offers", description: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
  ];

  return (
    <div className="endsection-container">
      <h2 className="section-title">People are also looking for</h2>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endsection;