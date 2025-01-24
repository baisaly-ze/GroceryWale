import React from 'react'
import '../../assets/css/style.css'
import img1 from "../../assets/images/banner-1.jpg"
const Banner = () => {
  return (
    <div className='banner'>

        {/* <img  src={img1} /> */}
      
        
      <h1>Grocery in 10 minutes</h1>
     

      <p className='text'>Get your <span className="highlight">grocery</span> at your doorstep with just a few clicks. 
        We deliver <span className="highlight">fresh fruits</span>, vegetables, and daily essentials 
        straight to your home, ensuring quality and convenience for your everyday needs.</p>
             
    </div>
  )
}

export default Banner;
