import React from 'react'
import '../../assets/css/style.css'
// import '../../../baisaly-ze-GroceryWale-c8739b3/src/assets/css/style.css'
import img1 from "../../assets/images/banner-1.jpg"
const Banner = () => {
  return (
    <div className='banner'>

        {/* <img  src={img1} /> */}
      
        
      <h1 className='gh1'><span className='bh1'>Skip the <span className='hilits'>Store</span>,Not the  <span className='hilits'>Freshness </span></span></h1>
       <h2 className='gh2'><span className="bold"> – Shop Online Now! </span></h2>
     
<br /><br />
      <p className='text'>Get your <span className="highlight">grocery</span> at your doorstep with just a few clicks. 
        We deliver <span className="highlight">fresh fruits</span>, vegetables, and daily essentials 
        straight to your home, ensuring quality and convenience for your everyday needs.</p>
             

           

<div className="header">
        <button className="btn0 start-shopping">Start Shopping</button>
        <button className="btn0 join-now">Join Now</button>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h2>14k+</h2>
          <p>Product Varieties</p>
        </div>
        <div className="stat-item">
          <h2>50k+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Store Locations</p>
        </div>
      </div>
      <div className="features">
        <div className="feature-item fresh">
          <h3>Fresh from farm</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className="feature-item organic">
          <h3>100% Organic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
        <div className="feature-item delivery">
          <h3>Free delivery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
      </div>

    </div>
  )
}

export default Banner;
