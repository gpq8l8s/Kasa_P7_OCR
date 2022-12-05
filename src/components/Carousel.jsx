import React, { useState } from "react"

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  let length = slides.pictures.length;
  const lengthArrow = length > 1;


  if(!Array.isArray(slides.pictures) || slides.pictures.length <= 0) {
    length = 1;
  }
  return(
    <section className="slider">
          { lengthArrow ? <svg className="left-arrow-slide" onClick={() => {
            setCurrent(current === 0 ? length - 1 : current - 1)
          }} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312V7.78312Z" fill="white"/>
          </svg> : null }
          { lengthArrow ? <svg className="right-arrow-slide" onClick={() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
          }} width="48" height="80" viewBox="0 0 48 80" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </svg> : null }
      <div className="slider-wrapper">
        <div className="slider-div">
      {slides.pictures && slides.pictures.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current &&(
            <img key={index} src={slide} alt="" className="image-slider"></img>
            )}</div>
          )
        })}
        </div>
        <p className="index-pictures-log">{current+1}/{length}</p>
        </div>
    </section>
  )
}

export default ImageSlider;
