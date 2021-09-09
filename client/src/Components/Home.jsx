import React from "react";
import { Link } from "react-router-dom";
import PaintingList from "./PaintingList";
import "../Styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Famous Paintings Store!</h1>
      <nav>
        <Link to="/cart">Cart</Link>
      </nav>
      <PaintingList />
    </div>
  );
};

export default Home;
