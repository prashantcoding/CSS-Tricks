import React from "react";
import CategoryCard from "../Component/Cards/CategoryCard";
import { Alan,gow,rdr2,cyberpunk,starWar } from "../assets/imageLocation";
const CategoryPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2em",
          width: "75%",

          margin: "0 auto",
          marginTop: "2em",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            borderRight: "1px solid #2A2A2A",
            width: "40%",
            paddingRight: "2rem",
          }}
        >
          <h3 style={{ color: "white", fontWeight: "normal" }}>Top Sellers</h3>
          <CategoryCard  img={Alan}/>
          <CategoryCard img={gow}/>
          <CategoryCard img={rdr2}/>
          <CategoryCard img={cyberpunk}/>
          <CategoryCard img={starWar}/>
        </div>

        <div
          style={{
            borderRight: "1px solid #2A2A2A",
            width: "40%",
            paddingRight: "2rem",
          }}
        >
          <h3 style={{ color: "white", fontWeight: "normal" }}>
            Top Gaming Score
          </h3>
          <CategoryCard  img={Alan}/>
          <CategoryCard img={gow}/>
          <CategoryCard img={rdr2}/>
          <CategoryCard img={cyberpunk}/>
          <CategoryCard img={starWar}/>
        </div>
        <div style={{ width: "40%", paddingRight: "2rem" }}>
          <h3 style={{ color: "white", fontWeight: "normal" }}>Top Upcoming</h3>
          <CategoryCard  img={Alan}/>
          <CategoryCard img={gow}/>
          <CategoryCard img={rdr2}/>
          <CategoryCard img={cyberpunk}/>
          <CategoryCard img={starWar}/>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
