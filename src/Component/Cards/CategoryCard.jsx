import React from "react";
import "./CategoryStyle.css";


const CategoryCard = ({img,title}) => {
  return (
    <div className=" categorycard">
      <div className="Category--imageContainer">
        <div className="cardEffect border--medium"></div>
        <img src={img} className="category__container--image"></img>
        <div className="card__description">
          <br></br>
          <span className="card_description--cardName">CyberPunk 2077</span>
          <div className="card_description_PriceDetails" >
            <button className="card_descripton--discount">-40%</button>
            <p className="card_description--price opacity-low">
              <s>₹3,999</s>
            </p>
            <p className="card_description--price">₹2,198.40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
