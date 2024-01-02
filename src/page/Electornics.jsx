import React from "react";
import NavBar from "../Component/NavBar.js/NavBar";
import SearchBar from "../Component/SearchBar/SearchBar";
import Slider from "../Component/Slider/Slider";
import CardPage from "./CardPage";
import CategoryPage from "./CategoryPage";
import Footer from "../Component/Footer/Footer";

import airdrop from "../assets/electornics/airdrop.webp";
import enigma from "../assets/electornics/engima.webp";
import Dream from '../assets/electornics/Dream.webp'
import nirvan from '../assets/electornics/nirvan.webp'
const Electornics = () => {
    const slides = [
        { img: airdrop,name:"FireBolt Kawaii"},
        { img:enigma,name:"Enigma Switch Boat" },
        { img: Dream,name:" FireBolt Dream " },
        { img: nirvan,name:"Nirvana Boat" },
      ];
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Slider slides={slides}/>
      <CardPage />
      <CardPage />
      <CardPage />
      <CategoryPage />
      <Footer />
    </div>
  );
};

export default Electornics;
