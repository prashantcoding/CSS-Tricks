import React from "react";
import "./CardStyle.css";

const Cards = ({img,title}) => {
  return (
    <div className="card__container">
      
      <div className="card">
      <div className="card--imageContainer">
      <div className="cardEffect" >
        <span className="cardEffect--icon">+</span>
      </div>
      <img src={img} className="card__container--image"></img>
      </div>
      <div className="card__description">
        <span className="card_description--cardType">Base Game</span>
        <p className="card_description--cardName">{title}</p>
        <div className="card_description_PriceDetails">
        <button className="card_descripton--discount">-40%</button>
        <p className="card_description--price opacity-low"><s>₹3,999</s></p>
        <p className="card_description--price">₹2,198.40</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
