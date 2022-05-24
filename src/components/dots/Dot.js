import React from 'react'
import './Dot.scss'
const Dot = ({index, sliderIndex}) => {
  
  return (
    <div className={sliderIndex === index + 1 ? 'dots active' : 'dots'}>
    
    </div>
  )
}

export default Dot
