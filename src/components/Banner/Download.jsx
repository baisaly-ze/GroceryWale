import React from 'react'
import '../../assets/css/download.css'

import photo1 from '../../assets/images/photo1.png'
import photo2 from '../../assets/images/photo2.png'
import photo3 from '../../assets/images/photo3.png'


const Download = () => {
  return (
    <div className='box1'>
      
      <img 
        src={photo2} 
        alt="Descriptive Alt Text" 
        className="image2" 
      />
      <img 
        src={photo3} 
        alt="Descriptive Alt Text" 
        className="image3" 
      />
<img 
        src={photo1} 
        alt="Descriptive Alt Text" 
        className="image" 
      />
    </div>
  )
}

export default Download
