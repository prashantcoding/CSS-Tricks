import React, { useEffect, useState } from "react";

import "./SliderStyle.css";

const Slider = ({slides}) => {
  const [active, setActive] = useState(0);
  
  const activeStyle = { left: `${-10}%` }; // Adjust the left position based on the active index
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically move to the next slide
      setActive((prev) => (prev + 1) % slides.length);
    }, 10000); // Change the interval time as needed (e.g., every 3 seconds)

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [active, slides.length]);
  const activenavStyle={
     background:"#18181c"
  }
  return (
    <div className="slider__container">
      <div className="track__container">
        {slides.map((slide, index) => (
          <div className="slide" key={index} style={active === index ? activeStyle : {}}>
            <img
              className="slide--image"
              src={slide.img}
              alt=""
              
            />
          </div>
        ))}
        <div className="slider__navigation">
          {slides.map((slide, index) => (
            <div className="slider-nav-item" onClick={()=>{setActive(index)}} style={active===index?activenavStyle:{}}>
              <img className="nav--img" src={slide.img} ></img>
              <p>{slide.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
