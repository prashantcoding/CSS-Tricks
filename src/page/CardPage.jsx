import React from "react";
import Cards from "../Component/Cards/Cards";

const CardPage = () => {
  return (
    <>
    <h3 style={{width:'75%',margin:'0 auto',color:"white",fontWeight:'normal',marginTop:'3em'}}>Holiday Sale Spotlight</h3>
     <div className="card__container" style={{display:'flex',gap:'1em',overflow:"hidden",marginTop:'2rem'}}>
        
     <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
     </div>
    </>
  );
};

export default CardPage;
