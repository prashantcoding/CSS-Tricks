import React from "react";
import Cards from "../Component/Cards/Cards";
import allenWake from "../assets/cards/Alan waker.avif";
import rdr2 from "../assets/cards/rdr2.avif";
import gow from "../assets/cards/gow.avif";
import starWar from "../assets/cards/starWar.avif";
import cyberPunk from "../assets/cards/cyberPunk.avif";
const CardPage = () => {
  const iconStyle={
    color:'white',
    margin:'.3em',
    fontSize:"1rem",
    padding:'8px',
    background:'#202020',
    borderRadius:'50%'
  }
  return (
    <>
      <div
        style={{
          width: "75%",
          margin: "0 auto",
          color: "white",
          fontWeight: "normal",
          marginTop: "3em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          Holiday Sale Spotlight
          <span style={{ color: "white", marginLeft: ".5em" }}>{">"}</span>
        </div>
        <div>
          <span style={iconStyle}>{"<"}</span>
          <span style={iconStyle}>{">"}</span>
        </div>
      </div>

      <div
        className="card__container"
        style={{
          display: "flex",
          gap: "1em",

          marginTop: "2rem",
        }}
      >
        <Cards img={allenWake} title="Alan Wake 2" />
        <Cards img={rdr2} title="Red Dead Redemption 2" />
        <Cards img={gow} title="God of War" />
        <Cards img={starWar} title="Star War Jedi" />
        <Cards img={cyberPunk} title="CyberPunk 2050" />
      </div>
    </>
  );
};

export default CardPage;
