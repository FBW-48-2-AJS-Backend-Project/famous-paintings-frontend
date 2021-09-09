import React from "react";
import PaintingList from "./PaintingList";
import "../Styles/home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Famous Paintings Store!</h1>
      <Navbar/>
      <PaintingList />
    </div>
  );
};

export default Home;
