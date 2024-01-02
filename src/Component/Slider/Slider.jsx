import React, { useEffect, useState } from "react";
import allen from "../../assets/allen_wake.avif";
import creed from "../../assets/creed.avif"; // Make sure the image file names match your actual file names
import hog from "../../assets/hog.avif";
import football from "../../assets/football.avif";
import "./SliderStyle.css";

const Slider = () => {
  const [active, setActive] = useState(0);
  const slides = [
    { img: allen,name:"Alan Wake 2"},
    { img: football,name:"EA SPORTS FC 24" },
    { img: creed,name:"Assassin's creed Mirage" },
    { img: hog,name:"LORT: Return to Moria" },
  ];
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
