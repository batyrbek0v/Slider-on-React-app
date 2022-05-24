import React from 'react'
import Buttons from '../buttons/Buttons'
import Dot from '../dots/Dot'
import { imgBase } from '../../utils/Base'
import './Slider.scss'

const Slider = () => {
    const [sliderindex, setsliderIndex] = React.useState(1)

    const nextSlide = () => {
        if(sliderindex !== imgBase.length) {
            setsliderIndex(sliderindex + 1)
        } else if(sliderindex == imgBase.length) {
            setsliderIndex(1)
        }
    }
    const prevSlide = () => {
        if(sliderindex !== 1) {
            setsliderIndex(sliderindex - 1)
        }else if(sliderindex === 1) {
            setsliderIndex(imgBase.length)
        }
    }

    return (
        <>
            <div className='slider-parent'>
                {
                    imgBase.map
                    (
                        ({ image, id }, index) =>
                        <img src={image}
                        key={id}
                        className={sliderindex === index + 1 ? 'image active' : 'image' } />
                    )
                }

                <div className='buttons-block'> 
                    <Buttons direction="prev" handleSlide={prevSlide}/>
                    <Buttons direction="next" handleSlide={nextSlide}/>
                </div>
            </div>
            <div className='dots_block'> 
                {
                    Array.from({length:6}).map( (dot, index) => <Dot index={ index } sliderIndex={ sliderindex }/> )
                }
            </div>
        </>
    )
}

export default Slider
