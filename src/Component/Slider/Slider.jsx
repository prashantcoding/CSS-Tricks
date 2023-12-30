import React, { useEffect, useState } from "react";
import allen from "../../assets/allen_wake.avif";
import creed from "../../assets/creed.avif"; // Make sure the image file names match your actual file names
import hog from "../../assets/hog.avif";
import football from "../../assets/football.avif";
import "./SliderStyle.css";

const Slider = () => {
  const [active, setActive] = useState(0);
  const slides = [{ img: allen }, { img: football}, { img: creed },{img:hog}];
  const activeStyle = { left: `${0}%` }; // Adjust the left position based on the active index

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically move to the next slide
      setActive((prev) => (prev + 1) % slides.length);
    }, 10000); // Change the interval time as needed (e.g., every 3 seconds)

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [active, slides.length]);

  return (
    <div className="slider__container">
      <div className="track__container">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img
              className="slide--image"
              src={slide.img}
              alt=""
              style={active === index ? activeStyle : {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
