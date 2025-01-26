import React from "react";
import "../../assets/css/blogsection.css";


import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const blogs = [
  {
    date: "25 DEC 2023",
    category: "TIPS & TRICKS",
    title: "How to Save Time and Stress: Grocery Shopping Without Leaving Home!Top 10 casual look ideas to dress up your kids",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    image: image1,
  },
  {
    date: "11 SEP 2022",
    category: "TRENDING",
    title: "Top 10 Must-Have Grocery Items for Busy Weeknights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    image: image2,
  },
  {
    date: "20 JAN 2021",
    category: "INSPIRATION",
    title: "The Secret to Fresh Groceries: Delivered Right to Your Door",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam.",
    image: image3,
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div div className="blog-header">
          <h2>Our Recent Blog</h2>
        </div>
        </div>


        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-meta">
                  <span>{blog.date}</span> | <span>{blog.category}</span>
                </p>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    //   </div>
    
  );
};

export default BlogSection;
