import React from 'react'
import './Buttons.scss'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { MdOutlineNavigateBefore } from 'react-icons/md'

const Buttons = ({direction,handleSlide}) => {
  return (
    <>
        {
            direction === 'prev' 
            ? <button className='prev' onClick={handleSlide}><MdOutlineNavigateBefore/></button>
            : <button className='next' onClick={handleSlide}><MdOutlineNavigateNext/></button>
        }
    </>
  )
}

export default Buttons
